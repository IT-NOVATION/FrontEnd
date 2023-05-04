import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://192.168.0.63:8080";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  //   withCredentials: true,
};
export const baseApi = axios.create(axiosConfig);
