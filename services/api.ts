import apiClient from '@/lib/axios';

/**
 * Global entry point for future API service integrations.
 * Export custom endpoints or group resource-specific API handlers here.
 */
export const api = {
  client: apiClient,
};
