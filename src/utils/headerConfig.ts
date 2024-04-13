import { AxiosRequestConfig } from 'axios';
import { DEFAULT_REQ_HEADERS } from '../api';

export const headerConfig = async (bearerToken?: string, hasFile?: boolean) => {
  const AUTHORIZATION_HEADER = 'Authorization';

  let config: AxiosRequestConfig = { withCredentials: true, headers: DEFAULT_REQ_HEADERS };
  if (hasFile) {
    config = { headers: { 'Content-Type': 'multipart/form-data', Accept: 'application/json' } };
  }

  if (bearerToken && config.headers) {
    config.headers[AUTHORIZATION_HEADER] = `Bearer ${bearerToken}`;
  }
  return config;
};
