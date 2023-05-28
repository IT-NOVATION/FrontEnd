import { IAccountInfo } from "@interfaces/forms";
import { baseApi } from "./instance";

const SIGNUP_URI = "/api/v1/signup";
const LOGIN_URI = "/login";
const TEST_URI = "/api/v1/movies";
const NAVER_LOGIN_URI = "/oauth2/authorization/naver";
const KAKAO_LOGIN_URI = "/oauth2/authorization/kakao";

export const postSignup = (signupFormFirst: IAccountInfo) =>
  baseApi.post("/").then((res) => res.data);
export const AccountApi = {
  postSignup: async (signupForm: IAccountInfo) =>
    await baseApi
      .post(SIGNUP_URI, signupForm)
      .then((res) => console.log(res.data)),
  login: async (loginForm: IAccountInfo) =>
    await baseApi
      .post(LOGIN_URI, loginForm)
      .then((res) => console.log(res.data)),
  kakaoRedirect: async (code: string) =>
    await baseApi.get(`/login/oauth2/code/kakao${code}`),
};
