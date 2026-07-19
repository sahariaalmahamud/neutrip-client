import axios from 'axios';
import { env } from '@/lib/env';

const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Inject auth token from localStorage if available in browser
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Return a standardized error structure if response exists
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
    
    // Proactively handle auth/session timeouts
    if (status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
    
    return Promise.reject({
      message,
      status,
      originalError: error,
    });
  }
);

export default apiClient;
