import { BASE_URL } from './system';
import axios, { AxiosRequestConfig } from 'axios';
export function requestBackend(config: AxiosRequestConfig) {
  return axios({ ...config, baseURL: BASE_URL });
}