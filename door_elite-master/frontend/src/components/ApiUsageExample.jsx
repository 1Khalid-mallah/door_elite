import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getEndpointUrl, API_ENDPOINTS, API_CONFIG } from '../config/api';

/**
 * Example Component demonstrating API configuration usage
 * This shows how to use the centralized API configuration in any component
 */
const ApiUsageExample = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Example 1: Using API endpoints with axios
  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Using the centralized API configuration
      const response = await axios.get(
        getEndpointUrl(API_ENDPOINTS.SERVICE.LIST),
        {
          timeout: API_CONFIG.TIMEOUT,
          headers: API_CONFIG.HEADERS
        }
      );
      
      setServices(response.data.services || []);
    } catch (err) {
      setError(err.message || 'Failed to fetch services');
    } finally {
      setLoading(false);
    }
  };

  // Example 2: Using API endpoints for user bookings
  const fetchUserBookings = async () => {
    try {
      setLoading(true);
      
      // Another example using the same pattern
      const response = await axios.get(
        getEndpointUrl(API_ENDPOINTS.BOOKING.USER_BOOKINGS),
        {
          timeout: API_CONFIG.TIMEOUT,
          headers: {
            ...API_CONFIG.HEADERS,
            'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Example auth
          }
        }
      );
      
      console.log('User bookings:', response.data.bookings);
    } catch (err) {
      setError(err.message || 'Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  // Example 3: Using API_BASE_URL directly
  const testDirectUrl = () => {
    console.log('API Base URL:', API_CONFIG); // Shows current config
    console.log('Full User Login URL:', getEndpointUrl(API_ENDPOINTS.USER.LOGIN));
    console.log('Service Detail URL for ID 123:', `${getEndpointUrl(API_ENDPOINTS.SERVICE.DETAIL)}/123`);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">API Configuration Example</h2>
      
      <div className="space-y-4">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={fetchServices}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Fetch Services'}
          </button>
          
          <button
            onClick={fetchUserBookings}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            disabled={loading}
          >
            Fetch User Bookings
          </button>
          
          <button
            onClick={testDirectUrl}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Test Direct URLs
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            Error: {error}
          </div>
        )}

        {/* Services Display */}
        {services.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Services ({services.length}):</h3>
            <div className="grid gap-2">
              {services.slice(0, 5).map((service, index) => (
                <div key={service._id || index} className="p-3 bg-gray-50 rounded border">
                  <h4 className="font-medium">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <p className="text-sm font-semibold text-green-600">₹{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* API Info Display */}
        <div className="p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">API Configuration Info:</h3>
          <div className="text-sm space-y-1">
            <div><strong>Environment:</strong> {import.meta.env.MODE || 'development'}</div>
            <div><strong>Base URL:</strong> {API_CONFIG ? 'Configured' : 'Not set'}</div>
            <div><strong>Available Endpoints:</strong></div>
            <ul className="list-disc list-inside ml-4">
              <li>User: LOGIN, REGISTER, PROFILE, etc.</li>
              <li>Service: LIST, DETAIL, CREATE, etc.</li>
              <li>Booking: CREATE, USER_BOOKINGS, etc.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiUsageExample;