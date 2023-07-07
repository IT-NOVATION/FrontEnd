import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = "http://localhost:8080";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
};
export const baseApi = axios.create(axiosConfig);
