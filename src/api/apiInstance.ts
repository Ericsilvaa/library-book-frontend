import axios from 'axios';

const BASE_API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/${import.meta.env.VITE_API_VERSION}`;

export const DEFAULT_REQ_HEADERS = { 'Content-Type': 'application/json', Accept: 'application/json' };

export const apiInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: DEFAULT_REQ_HEADERS
});
