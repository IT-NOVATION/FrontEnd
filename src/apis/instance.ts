import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = "http://localhost:8080";
export const REAL_BASE_URL = "http://api.its-movietime.com:8080";

const axiosConfig: AxiosRequestConfig = {
  baseURL: REAL_BASE_URL,
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem("accessToken")
        ? localStorage.getItem("accessToken")
        : ""
    }`,
  },
};
export const baseApi = axios.create(axiosConfig);
