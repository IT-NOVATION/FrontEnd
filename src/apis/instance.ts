import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = "http://localhost:8080";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};
export const baseApi = axios.create(axiosConfig);
