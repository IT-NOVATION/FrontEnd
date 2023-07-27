import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = "http://localhost:8080";
export const REAL_BASE_URL =
  "http://ec2-43-201-196-249.ap-northeast-2.compute.amazonaws.com:8080/";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem("accessToken")
        ? localStorage.getItem("accessToken")
        : ""
    }`,
  },
};
export const baseApi = axios.create(axiosConfig);

export const sse = new EventSource(
  "http://localhost:8080/notifications/subscribe/2"
);
sse.addEventListener("connect", (e) => {
  const { data: receivedConnectData } = e;
  console.log("connect event data: ", receivedConnectData); // "connected!"
});

const subscribe = () =>
  axios.get("http://localhost:8080/notifications/subscribe/2", {
    headers: {
      Accept: "text / event - stream",
    },
  });
