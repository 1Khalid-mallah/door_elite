import React, { createContext, useState, useEffect, useContext, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_BASE_URL, API_CONFIG, getEndpointUrl, API_ENDPOINTS } from '../config/api';

/**
 * Application context that manages global state including user authentication,
 * shopping cart, services, and bookings.
 */
const AppContext = createContext();

/**
 * Provider component that wraps application and provides context values.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const AppProvider = ({ children }) => {
  // State variables
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [serviceLoading, setServiceLoading] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  
  const navigate = useNavigate();

  // Create axios instance with base URL and credentials
  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: API_BASE_URL,
      withCredentials: API_CONFIG.CORS.credentials,
      timeout: API_CONFIG.TIMEOUT,
      headers: API_CONFIG.HEADERS,
      ...API_CONFIG.CORS
    });

    // Request interceptor
    instance.interceptors.request.use(
      (config) => {
        // Add timestamp to prevent caching
        config.params = config.params || {};
        config.params._t = Date.now();
        return config;
      },
      (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor for error handling
    instance.interceptors.response.use(
      (response) => {
        // Log successful responses in development
        if (process.env.NODE_ENV === 'development') {
          console.log('API Response:', {
            url: response.config.url,
            method: response.config.method,
            status: response.status,
            data: response.data
          });
        }
        return response;
      },
      (error) => {
        // Log detailed error information
        console.error('API Error:', {
          url: error.config?.url,
          method: error.config?.method,
          status: error.response?.status,
          data: error.response?.data,
          message: error.message
        });

        // Handle specific error cases
        if (error.response?.status === 401) {
          // Don't redirect for public routes
          const isPublicRoute = window.location.pathname.includes('/login') ||
                               window.location.pathname.includes('/signup') ||
                               window.location.pathname.includes('/services') ||
                               window.location.pathname.includes('/contact') ||
                               window.location.pathname.includes('/about') ||
                               window.location.pathname.includes('/beauty') ||
                               window.location.pathname.includes('/cart') ||
                               window.location.pathname === '/';
           
          // Unauthorized - clear user state
          setUser(null);
          setBookings([]);
          setCart([]);
          
          // Only redirect for protected routes (like /profile, /my-orders)
          if (!isPublicRoute) {
            toast.error('Your session has expired. Please log in again.');
            navigate('/login');
          }
        } else if (error.response?.status === 403) {
          toast.error('Access forbidden. You do not have permission to access this resource.');
        } else if (error.response?.status === 404) {
          toast.error('Resource not found.');
        } else if (error.response?.status >= 500) {
          toast.error('Server error. Please try again later.');
        } else if (error.code === 'ECONNABORTED') {
          toast.error('Request timeout. Please check your connection.');
        } else if (!error.response) {
          toast.error('Network error. Please check your internet connection.');
        }
        
        return Promise.reject(error);
      }
    );

    return instance;
  }, [navigate]);

  // Check authentication on initial load (without bookings fetch)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true);
        const { data } = await axiosInstance.get('/user/is-auth');
        
        // Check if response indicates user is authenticated
        if (data.success && data.user) {
          setUser(data.user);
        } else {
          // User is not authenticated, clear any existing user state
          setUser(null);
          setBookings([]);
        }
      } catch (error) {
        console.error("Authentication check failed:", error.message);
        // Don't show error toast on initial auth check for public routes
        setUser(null);
        setBookings([]);
      } finally {
        setLoading(false);
        setAuthChecked(true);
      }
    };
    checkAuth();
  }, [axiosInstance]);

  // ... rest of your functions remain the same ...

  /**
   * Function to fetch services with optional filtering parameters
   * @param {Object} params - Query parameters for filtering
   * @returns {Promise<Array>} Array of services
   */
  const fetchServices = useCallback(async (params = {}) => {
    try {
      setServiceLoading(true);
      setError(null);
      
      // Build query string from parameters
      const queryString = new URLSearchParams(
        Object.entries(params).filter(([_, value]) => value !== undefined)
      ).toString();
      
      const url = queryString ? `${getEndpointUrl(API_ENDPOINTS.SERVICE.LIST)}?${queryString}` : getEndpointUrl(API_ENDPOINTS.SERVICE.LIST);
      const { data } = await axiosInstance.get(url);
      
      if (data.success) {
        setServices(data.services);
        return data.services;
      }
      throw new Error(data.message || 'Failed to fetch services');
    } catch (error) {
      console.error('Error fetching services:', error);
      setError(error.message || 'Failed to fetch services');
      toast.error(error.response?.data?.message || 'Failed to fetch services');
      return [];
    } finally {
      setServiceLoading(false);
    }
  }, [axiosInstance]);

  /**
   * Function to fetch a single service by ID
   * @param {string} id - Service ID
   * @returns {Promise<Object|null>} Service object or null if not found
   */
  const fetchService = useCallback(async (id) => {
    try {
      setServiceLoading(true);
      setError(null);
      
      const { data } = await axiosInstance.get(`${getEndpointUrl(API_ENDPOINTS.SERVICE.DETAIL)}/${id}`);
      
      if (data.success) {
        return data.service;
      }
      throw new Error(data.message || 'Failed to fetch service');
    } catch (error) {
      console.error('Error fetching service:', error);
      setError(error.message || 'Failed to fetch service');
      toast.error(error.response?.data?.message || 'Failed to fetch service');
      return null;
    } finally {
      setServiceLoading(false);
    }
  }, [axiosInstance]);

  /**
   * Function to fetch user bookings
   * @returns {Promise<Array>} Array of bookings
   */
  const fetchUserBookings = useCallback(async () => {
    try {
      setBookingLoading(true);
      const { data } = await axiosInstance.get(getEndpointUrl(API_ENDPOINTS.BOOKING.USER_BOOKINGS));
      
      if (data.success) {
        setBookings(data.bookings);
        return data.bookings;
      }
      throw new Error(data.message || 'Failed to fetch bookings');
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast.error(error.response?.data?.message || 'Failed to fetch bookings');
      return [];
    } finally {
      setBookingLoading(false);
    }
  }, [axiosInstance]);

  /**
   * Function to add a new booking
   * @param {Object} bookingData - Booking data
   * @returns {Promise<Object|null>} Created booking or null if failed
   */
  const addBooking = useCallback(async (bookingData) => {
    try {
      setBookingLoading(true);
      setError(null);
      
      // Validate booking data before sending
      console.log('Booking data being sent:', bookingData);
      
      // Check required fields
      const requiredFields = ['services', 'address', 'date', 'time', 'mobile'];
      const missingFields = requiredFields.filter(field => 
        !bookingData[field] || 
        (Array.isArray(bookingData[field]) && bookingData[field].length === 0) ||
        (typeof bookingData[field] === 'string' && bookingData[field].trim() === '')
      );
      
      if (missingFields.length > 0) {
        const errorMessage = `Missing required fields: ${missingFields.join(', ')}`;
        console.error('Validation error:', errorMessage);
        setError(errorMessage);
        toast.error(errorMessage);
        return null;
      }
      
      // Validate services array
      if (!Array.isArray(bookingData.services) || bookingData.services.length === 0) {
        const errorMessage = 'At least one service must be selected';
        console.error('Validation error:', errorMessage);
        setError(errorMessage);
        toast.error(errorMessage);
        return null;
      }
      
      // Validate mobile number
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(bookingData.mobile)) {
        const errorMessage = 'Please enter a valid 10-digit mobile number';
        console.error('Validation error:', errorMessage);
        setError(errorMessage);
        toast.error(errorMessage);
        return null;
      }
      
      // Validate date (not in past)
      const selectedDate = new Date(bookingData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        const errorMessage = 'Booking date cannot be in the past';
        console.error('Validation error:', errorMessage);
        setError(errorMessage);
        toast.error(errorMessage);
        return null;
      }
      
      const { data } = await axiosInstance.post(getEndpointUrl(API_ENDPOINTS.BOOKING.CREATE), bookingData);
      
      if (data.success) {
        // Refresh bookings after adding a new one (using direct axios call to avoid dependency issue)
        try {
          const bookingData = await axiosInstance.get(getEndpointUrl(API_ENDPOINTS.BOOKING.USER_BOOKINGS));
          if (bookingData.success) {
            setBookings(bookingData.bookings);
          }
        } catch (bookingError) {
          console.warn("Failed to fetch bookings after adding:", bookingError);
        }
        toast.success('Booking created successfully');
        return data.booking;
      }
      throw new Error(data.message || 'Failed to create booking');
    } catch (error) {
      console.error('Error creating booking:', error);
      console.error('Error response:', error.response);
      
      // Handle specific error cases
      let errorMessage = 'Failed to create booking';
      
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please try again.';
      } else if (!error.response) {
        errorMessage = 'Network error. Please check your connection.';
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    } finally {
      setBookingLoading(false);
    }
  }, [axiosInstance]);

  /**
   * Function to update a booking
   * @param {string} bookingId - Booking ID
   * @param {Object} bookingData - Updated booking data
   * @returns {Promise<Object|null>} Updated booking or null if failed
   */
  const updateBooking = useCallback(async (bookingId, bookingData) => {
    try {
      setBookingLoading(true);
      const { data } = await axiosInstance.put(`${getEndpointUrl(API_ENDPOINTS.BOOKING.BOOKING_DETAIL)}/${bookingId}`, bookingData);
      
      if (data.success) {
        // Update specific booking in state
        setBookings(prevBookings => 
          prevBookings.map(booking => 
            booking._id === bookingId ? { ...booking, ...data.booking } : booking
          )
        );
        toast.success('Booking updated successfully');
        return data.booking;
      }
      throw new Error(data.message || 'Failed to update booking');
    } catch (error) {
      console.error('Error updating booking:', error);
      toast.error(error.response?.data?.message || 'Failed to update booking');
      throw error;
    } finally {
      setBookingLoading(false);
    }
  }, [axiosInstance]);

  /**
   * Function to cancel a booking
   * @param {string} bookingId - Booking ID
   * @returns {Promise<Object|null>} Updated booking or null if failed
   */
  const cancelBooking = useCallback(async (bookingId) => {
    try {
      setBookingLoading(true);
      const { data } = await axiosInstance.put(`${getEndpointUrl(API_ENDPOINTS.BOOKING.CANCEL)}/${bookingId}`);
      
      if (data.success) {
        // Update booking status in state
        setBookings(prevBookings => 
          prevBookings.map(booking => 
            booking._id === bookingId ? { ...booking, status: 'cancelled' } : booking
          )
        );
        toast.success('Booking cancelled successfully');
        return data.booking;
      }
      throw new Error(data.message || 'Failed to cancel booking');
    } catch (error) {
      console.error('Error cancelling booking:', error);
      toast.error(error.response?.data?.message || 'Failed to cancel booking');
      throw error;
    } finally {
      setBookingLoading(false);
    }
  }, [axiosInstance]);

  /**
   * Function to complete a booking with rating and review
   * @param {string} bookingId - Booking ID
   * @param {number} rating - Rating value
   * @param {string} review - Review text
   * @returns {Promise<Object|null>} Updated booking or null if failed
   */
  const completeBooking = useCallback(async (bookingId, rating, review) => {
    try {
      setBookingLoading(true);
      const { data } = await axiosInstance.put(`${getEndpointUrl(API_ENDPOINTS.BOOKING.COMPLETE)}/${bookingId}`, { rating, review });
      
      if (data.success) {
        // Update booking status in state
        setBookings(prevBookings => 
          prevBookings.map(booking => 
            booking._id === bookingId ? { ...booking, status: 'completed', rating, review } : booking
          )
        );
        toast.success('Booking completed successfully');
        return data.booking;
      }
      throw new Error(data.message || 'Failed to complete booking');
    } catch (error) {
      console.error('Error completing booking:', error);
      toast.error(error.response?.data?.message || 'Failed to complete booking');
      throw error;
    } finally {
      setBookingLoading(false);
    }
  }, [axiosInstance]);

  /**
   * Function to update user profile
   * @param {FormData} formData - Form data with profile information
   * @returns {Promise<Object>} Updated user data
   */
  const updateProfile = useCallback(async (formData) => {
    try {
      setProfileLoading(true);
      const { data } = await axiosInstance.put(getEndpointUrl(API_ENDPOINTS.USER.UPDATE_PROFILE), formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (data.success) {
        setUser(data.user);
        toast.success('Profile updated successfully');
        return data.user;
      }
      throw new Error(data.message || 'Failed to update profile');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error(error.response?.data?.message || 'Failed to update profile');
      throw error;
    } finally {
      setProfileLoading(false);
    }
  }, [axiosInstance]);

  /**
   * Function to register a new user
   * @param {string} name - User name
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} Response data
   */
  const register = useCallback(async (name, email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Attempting to register user:', { name, email });
      
      const { data } = await axiosInstance.post(getEndpointUrl(API_ENDPOINTS.USER.REGISTER), {
        name,
        email,
        password,
      });
      
      if (data.success) {
        setUser(data.user);
        toast.success('Account created successfully');
        navigate('/');
      }
      return data;
    } catch (error) {
      console.error('Registration error:', error);
      console.error('Error response:', error.response);
      
      const errorMessage = error.response?.data?.message || error.message || "Registration failed";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [axiosInstance, navigate]);

  /**
   * Function to log in a user
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} Response data
   */
  const login = useCallback(async (email, password) => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.post(getEndpointUrl(API_ENDPOINTS.USER.LOGIN), {
        email,
        password,
      });
      
      if (data.success) {
        setUser(data.user);
        // Fetch bookings after successful login (using direct axios call to avoid dependency issue)
        try {
          const bookingData = await axiosInstance.get(getEndpointUrl(API_ENDPOINTS.BOOKING.USER_BOOKINGS));
          if (bookingData.success) {
            setBookings(bookingData.bookings);
          }
        } catch (bookingError) {
          console.warn("Failed to fetch bookings after login:", bookingError);
        }
        toast.success('Logged in successfully');
        navigate('/');
      }
      return data;
    } catch (error) {
      console.error('Login error:', error);
      console.error('Error response:', error.response);
      
      const errorMessage = error.response?.data?.message || error.message || "Login failed";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [axiosInstance, navigate]);

  /**
   * Function to log out a user
   * @returns {Promise<Object>} Response data
   */
  const logout = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(getEndpointUrl(API_ENDPOINTS.USER.LOGOUT));
      
      if (data.success) {
        setUser(null);
        setBookings([]);
        setCart([]);
        toast.success('Logged out successfully');
        navigate('/');
      }
      return data;
    } catch (error) {
      console.error('Logout error:', error);
      const errorMessage = error.response?.data?.message || error.message || "Logout failed";
      setError(errorMessage);
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [axiosInstance, navigate]);

  /**
   * Function to add a service to cart
   * @param {Object} service - Service object
   */
  const addToCart = useCallback((service) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item._id === service._id);

      if (existingItem) {
        toast.info(`${service.name} quantity increased in cart`);
        return prevCart.map(item =>
          item._id === service._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      toast.success(`${service.name} added to cart`);
      return [...prevCart, { ...service, quantity: 1 }];
    });
  }, []);

  /**
   * Function to remove a service from cart
   * @param {string} serviceId - Service ID
   */
  const removeFromCart = useCallback((serviceId) => {
    setCart(prevCart => {
      const item = prevCart.find(item => item._id === serviceId);
      if (item) {
        toast.info(`${item.name} removed from cart`);
      }
      return prevCart.filter(item => item._id !== serviceId);
    });
  }, []);

  /**
   * Function to update quantity of a service in cart
   * @param {string} serviceId - Service ID
   * @param {number} newQuantity - New quantity value
   */
  const updateQuantity = useCallback((serviceId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(serviceId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item._id === serviceId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, [removeFromCart]);

  /**
   * Function to clear cart
   */
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  /**
   * Function to clear error state
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Calculate total price using useMemo
  const totalPrice = useMemo(() => 
    cart.reduce((sum, item) => sum + (item.price * item.quantity), 0), 
    [cart]
  );

  // Calculate total items in cart using useMemo
  const totalItems = useMemo(() => 
    cart.reduce((sum, item) => sum + item.quantity, 0), 
    [cart]
  );

  // Get booking statistics using useMemo
  const bookingStats = useMemo(() => {
    const stats = {
      total: bookings.length,
      pending: 0,
      confirmed: 0,
      inProgress: 0,
      completed: 0,
      cancelled: 0
    };

    bookings.forEach(booking => {
      switch (booking.status) {
        case 'pending':
          stats.pending++;
          break;
        case 'confirmed':
          stats.confirmed++;
          break;
        case 'in-progress':
          stats.inProgress++;
          break;
        case 'completed':
          stats.completed++;
          break;
        case 'cancelled':
          stats.cancelled++;
          break;
        default:
          break;
      }
    });

    return stats;
  }, [bookings]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    // User state
    user,
    setUser,
    authChecked,
    
    // Cart state and functions
    cart,
    setCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
    
    // Search state
    searchQuery,
    setSearchQuery,
    
    // Loading states
    loading,
    profileLoading,
    serviceLoading,
    bookingLoading,
    
    // Error state
    error,
    setError,
    clearError,
    
    // Axios instance
    axios: axiosInstance,
    
    // Authentication functions
    register,
    login,
    logout,
    updateProfile,
    
    // Services state and functions
    services,
    setServices,
    fetchServices,
    fetchService,
    
    // Bookings state and functions
    bookings,
    setBookings,
    fetchUserBookings,
    addBooking,
    updateBooking,
    cancelBooking,
    completeBooking,
    bookingStats,
  }), [
    user, cart, searchQuery, loading, profileLoading, serviceLoading, bookingLoading, error, authChecked,
    services, bookings, totalPrice, totalItems, bookingStats, axiosInstance,
    register, login, logout, updateProfile,
    addToCart, removeFromCart, updateQuantity, clearCart,
    fetchServices, fetchService, fetchUserBookings,
    addBooking, updateBooking, cancelBooking, completeBooking, clearError
  ]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

/**
 * Custom hook to use AppContext
 * @returns {Object} Context value
 */
export const useAppContext = () => useContext(AppContext);