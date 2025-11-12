# API Configuration Usage Guide

## Overview
This project now uses a centralized API configuration system located in `frontend/src/config/api.js`. This provides a clean, maintainable way to manage all API endpoints and settings.

## Quick Start

### 1. Import the API configuration
```jsx
import { getEndpointUrl, API_ENDPOINTS } from '../config/api';
```

### 2. Use in your components
```jsx
// Example usage in a component
import axios from 'axios';
import { getEndpointUrl, API_ENDPOINTS } from '../config/api';

// Using with axios
const fetchData = async () => {
  const { data } = await axios.get(getEndpointUrl(API_ENDPOINTS.SERVICE.LIST));
  return data;
};

// Using directly
const apiUrl = getEndpointUrl(API_ENDPOINTS.BOOKING.CREATE);
console.log(apiUrl); // http://localhost:4000/api/booking
```

## Available Components

### API_BASE_URL
The base URL for your API that automatically switches based on environment.
```jsx
import { API_BASE_URL } from '../config/api';
console.log(API_BASE_URL); // http://localhost:4000/api (development)
// or https://your-prod-api.com/api (production)
```

### API_ENDPOINTS
Organized endpoint constants for all API routes.
```jsx
import { API_ENDPOINTS } from '../config/api';

// User endpoints
API_ENDPOINTS.USER.LOGIN           // '/user/login'
API_ENDPOINTS.USER.REGISTER        // '/user/register'
API_ENDPOINTS.USER.PROFILE         // '/user/me'
API_ENDPOINTS.USER.UPDATE_PROFILE  // '/user/me'

// Service endpoints  
API_ENDPOINTS.SERVICE.LIST         // '/service/list'
API_ENDPOINTS.SERVICE.DETAIL       // '/service'
API_ENDPOINTS.SERVICE.CREATE       // '/service'

// Booking endpoints
API_ENDPOINTS.BOOKING.CREATE       // '/booking'
API_ENDPOINTS.BOOKING.USER_BOOKINGS // '/booking/user'
API_ENDPOINTS.BOOKING.CANCEL       // '/booking/cancel'
```

### Helper Functions
```jsx
import { buildApiUrl, getEndpointUrl } from '../config/api';

// Build full URL from endpoint
const fullUrl = buildApiUrl('/user/login'); // http://localhost:4000/api/user/login

// Get endpoint URL
const endpointUrl = getEndpointUrl(API_ENDPOINTS.USER.LOGIN); // http://localhost:4000/api/user/login
```

## Environment Configuration

The API automatically detects the environment and uses the appropriate base URL:

- **Development**: `http://localhost:4000/api`
- **Production**: `https://your-production-api.com/api` (set via `VITE_API_URL` env variable)
- **Staging**: `https://your-staging-api.com/api`

## Usage Examples

### In React Components
```jsx
import React from 'react';
import axios from 'axios';
import { getEndpointUrl, API_ENDPOINTS, API_CONFIG } from '../config/api';

const ExampleComponent = () => {
  const fetchServices = async () => {
    try {
      const response = await axios.get(
        getEndpointUrl(API_ENDPOINTS.SERVICE.LIST),
        {
          timeout: API_CONFIG.TIMEOUT,
          headers: API_CONFIG.HEADERS
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const createBooking = async (bookingData) => {
    try {
      const response = await axios.post(
        getEndpointUrl(API_ENDPOINTS.BOOKING.CREATE),
        bookingData,
        {
          timeout: API_CONFIG.TIMEOUT,
          headers: {
            ...API_CONFIG.HEADERS,
            'Authorization': `Bearer ${token}` // Add auth if needed
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return <div>Example Component</div>;
};
```

### With Custom Axios Instance
```jsx
import axios from 'axios';
import { API_BASE_URL, API_CONFIG, getEndpointUrl, API_ENDPOINTS } from '../config/api';

// Create a custom axios instance
const customAxios = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
  ...API_CONFIG.CORS
});

// Add request interceptor
customAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Usage
const fetchUserBookings = async () => {
  const response = await customAxios.get(getEndpointUrl(API_ENDPOINTS.BOOKING.USER_BOOKINGS));
  return response.data;
};
```

## Benefits

1. **Centralized Configuration**: All API settings in one place
2. **Environment Aware**: Automatically switches URLs based on environment
3. **Type Safety**: Organized endpoints prevent typos
4. **Maintainability**: Easy to update URLs and configurations
5. **Consistency**: Standardized way to handle API calls across the app
6. **Development Friendly**: Easy to configure different environments

## Best Practices

1. **Always use API_ENDPOINTS constants** instead of hardcoded strings
2. **Use getEndpointUrl()** to build full URLs
3. **Import only what you need** to keep bundle size smaller
4. **Use the API_CONFIG constants** for consistent request settings
5. **Handle errors appropriately** using try-catch blocks
6. **Consider using interceptors** for auth tokens and error handling

## Adding New Endpoints

To add new endpoints, update the `API_ENDPOINTS` object in `api.js`:

```javascript
export const API_ENDPOINTS = {
  // ... existing endpoints
  NEW_FEATURE: {
    LIST: '/new-feature',
    DETAIL: '/new-feature',
    CREATE: '/new-feature',
    UPDATE: '/new-feature',
    DELETE: '/new-feature'
  }
};
```

Then use it in your code:
```jsx
import { API_ENDPOINTS } from '../config/api';
const url = getEndpointUrl(API_ENDPOINTS.NEW_FEATURE.LIST);