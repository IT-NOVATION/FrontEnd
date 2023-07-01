import { IAccountInfo, IFindPassword } from "@interfaces/forms";
import { BASE_URL, baseApi } from "./instance";

const SIGNUP_URI = "/signup";
const ADD_PROFILE_URI = "/userProfileInfo";
const LOGIN_URI = "/login";
const SEND_CODE_URI = "/passwordfind/emailSend";
const CODE_CHECK_URI = "/passwordfind/finalCheck";
const CHANGE_PW_URI = "/passwordfind/rewritePw";
export const GOOGLE_LOGIN_URI =
  "http://localhost:8080/oauth2/authorization/google";
export const NAVER_LOGIN_URI =
  "http://localhost:8080/oauth2/authorization/naver";
export const KAKAO_LOGIN_URI = `http://localhost:8080/oauth2/authorization/kakao`;

export const AccountApi = {
  signup: async (signupForm: IAccountInfo) =>
    await baseApi.post(SIGNUP_URI, signupForm),
  addProfile: async (profileForm: IAccountInfo) =>
    await baseApi.post(ADD_PROFILE_URI, profileForm),
  login: async (loginForm: IAccountInfo) =>
    await baseApi.post(LOGIN_URI, loginForm).then((res) => res.data),
  kakaoRedirect: async (code: string) =>
    await baseApi.get(`/login/oauth2/code/kakao${code}`),
  sendCode: async (email: string) =>
    await baseApi.post(SEND_CODE_URI, { email }).then((res) => res.data),
  codeCheck: async (findPasswordForm: IFindPassword) =>
    await baseApi
      .post(CODE_CHECK_URI, findPasswordForm)
      .then((res) => res.data),
  changePassword: async (data: IAccountInfo) =>
    await baseApi.post(CHANGE_PW_URI, data).then((res) => res.data),
};
