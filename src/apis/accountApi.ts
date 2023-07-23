import { IAccountInfo, IFindPassword } from "@interfaces/forms";
import { REAL_BASE_URL, baseApi } from "./instance";

const SIGNUP_URI = "/signup";
const ADD_PROFILE_URI = "/userProfile";
const LOGIN_URI = "/login";
const SEND_CODE_URI = "/passwordfind/emailSend";
const CODE_CHECK_URI = "/passwordfind/finalCheck";
const CHANGE_PW_URI = "/passwordfind/rewritePw";
const LOGIN_STATE_URI = "/loginState";
const LOGOUT_URI = "/custom-logout";
export const GOOGLE_LOGIN_URI = `${REAL_BASE_URL}/oauth2/authorization/google`;
export const NAVER_LOGIN_URI = `${REAL_BASE_URL}/oauth2/authorization/naver`;
export const KAKAO_LOGIN_URI = `${REAL_BASE_URL}/oauth2/authorization/kakao`;

export const AccountApi = {
  signup: async (signupForm: IAccountInfo) =>
    await baseApi.post(SIGNUP_URI, signupForm),
  addProfile: async (profileForm: IAccountInfo) =>
    await baseApi.put(ADD_PROFILE_URI, profileForm),
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
  loginState: async () =>
    await baseApi
      .get(LOGIN_STATE_URI, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => res.data),
  logout: async () => await baseApi.get(LOGOUT_URI).then((res) => res.data),
};
