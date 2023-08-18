import { IAccountInfo, IFindPassword } from '@interfaces/forms';
import { REAL_BASE_URL, baseApi } from './instance';
import { ILoginState } from '@interfaces/loginState';

const SIGNUP_URI = '/account/signup';
const ADD_PROFILE_URI = '/user/profile';
const LOGIN_URI = '/account/login';
const SEND_CODE_URI = '/email/password-find/email-send';
const CODE_CHECK_URI = '/email/password-find/final-check';
const CHANGE_PW_URI = '/email/password-find/rewrite-pw';
const LOGIN_STATE_URI = '/user/state';
const LOGOUT_URI = '/account/custom-logout';
const SOCIAL_BASE_URL = 'http://api.its-movietime.com:8080';
export const GOOGLE_LOGIN_URI = `${SOCIAL_BASE_URL}/oauth2/authorization/google`;
export const NAVER_LOGIN_URI = `${SOCIAL_BASE_URL}/oauth2/authorization/naver`;
export const KAKAO_LOGIN_URI = `${SOCIAL_BASE_URL}/oauth2/authorization/kakao`;

export const AccountApi = {
  useRefreshToken: async () =>
    await baseApi
      .get(LOGIN_STATE_URI, {
        headers: {
          'Authorization-refresh': `Bearer ${localStorage.getItem(
            'refreshToken'
          )}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        const [accessToken, refreshToken] = data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('accessToken', accessToken);
      }),

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
          Authorization: `Bearer ${
            localStorage.getItem('accessToken')
              ? localStorage.getItem('accessToken')
              : ''
          }`,
        },
      })
      .then((res) => res.data)
      .catch((err) => AccountApi.useRefreshToken()),

  logout: async () =>
    await baseApi
      .get(LOGOUT_URI, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => res.data),
};
