import { IAccountInfo } from "@interfaces/forms";
import { baseApi } from "./instance";

const SIGNUP_URI = "/api/v1/signup";
const LOGIN_URI = "/login";
const TEST_URI = "/api/v1/movies";
const NAVER_LOGIN_URI = "/oauth2/authorization/naver";
const KAKAO_LOGIN_URI = "/oauth2/authorization/kakao";

export const AccountApi = {
  signup: async (signupForm: IAccountInfo) =>
    await baseApi.post(SIGNUP_URI, signupForm),
  login: async (loginForm: IAccountInfo) =>
    await baseApi.post(LOGIN_URI, loginForm),
  kakaoRedirect: async (code: string) =>
    await baseApi.get(`/login/oauth2/code/kakao${code}`),
};
