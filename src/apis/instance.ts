import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AccountApi } from './accountApi';

export const REAL_BASE_URL = 'https://api.its-movietime.com/api/v1';

const axiosConfig: AxiosRequestConfig = {
  baseURL: REAL_BASE_URL,
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem('accessToken')
        ? localStorage.getItem('accessToken')
        : ''
    }`,
  },
};

const onResponse = (res: AxiosResponse): AxiosResponse => {
  console.log(res);
  return res;
};

export const baseApi = axios.create(axiosConfig);
baseApi.interceptors.response.use(onResponse);
baseApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      const originalRequest = config;
      AccountApi.useRefreshToken();
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);
