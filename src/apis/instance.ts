import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
    baseURL: "",
    withCredentials: true,
};
export const baseApi = axios.create(axiosConfig);
