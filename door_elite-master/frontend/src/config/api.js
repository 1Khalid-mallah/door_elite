/**
 * API Configuration
 * Centralized configuration for all API endpoints and settings
 */

// Environment Configuration
const ENV = {
  development: 'http://localhost:4000/api',
  production: process.env.VITE_API_URL || 'https://your-production-api.com/api',
  staging: 'https://your-staging-api.com/api'
};

// Current Environment
const getEnvironment = () => {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return import.meta.env.MODE || 'development';
  }
  return 'development';
};

// Base API URL
export const API_BASE_URL = ENV[getEnvironment()] || ENV.development;

// API Endpoints
export const API_ENDPOINTS = {
  // User endpoints
  USER: {
    LOGIN: '/user/login',
    REGISTER: '/user/register',
    LOGOUT: '/user/logout',
    PROFILE: '/user/me',
    UPDATE_PROFILE: '/user/me',
    IS_AUTH: '/user/is-auth',
    CHANGE_PASSWORD: '/user/change-password'
  },

  // Service endpoints
  SERVICE: {
    LIST: '/service/list',
    DETAIL: '/service',
    CREATE: '/service',
    UPDATE: '/service',
    DELETE: '/service'
  },

  // Booking endpoints
  BOOKING: {
    CREATE: '/booking',
    USER_BOOKINGS: '/booking/user',
    BOOKING_DETAIL: '/booking',
    UPDATE_STATUS: '/booking',
    CANCEL: '/booking/cancel',
    COMPLETE: '/booking/complete'
  }
};

// Request Configuration
export const API_CONFIG = {
  // Default timeout for requests (milliseconds)
  TIMEOUT: 10000,

  // Default headers
  HEADERS: {
    'Content-Type': 'application/json',
  },

  // CORS settings
  CORS: {
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }
};

// Helper function to build full API URL
export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Helper function to get full endpoint URL
export const getEndpointUrl = (endpoint) => {
  return buildApiUrl(endpoint);
};

export default {
  API_BASE_URL,
  API_ENDPOINTS,
  API_CONFIG,
  buildApiUrl,
  getEndpointUrl,
  getEnvironment,
  ENV
};