import { BASE_URL } from './system';
import axios, { AxiosRequestConfig } from 'axios';
import * as authService from '../services/auth-service';



export function requestBackend(config: AxiosRequestConfig) {
  const headers = config.withCredentials
    ? {
      ...config.headers,
      Authorization: "Bearer " + authService.getAcessToken()
    }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
}