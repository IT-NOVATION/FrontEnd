import { IMutateProfileUpdate } from '@interfaces/user';
import { baseApi } from './instance';

const GET_MOVIELOG_URI = '/movielog';
const FOLLOW_URI = '/push/follow';
const MUTATE_PROFILE_UPDATE_URI = '/user/auth/profile';

export const MovieLogApi = {
  getMovieLog: async (userId: number) =>
    await baseApi
      .get(GET_MOVIELOG_URI + '/' + userId, {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem('accessToken')
              ? localStorage.getItem('accessToken')
              : ''
          }`,
        },
      })
      .then((res) => res.data),
  follow: async (body: { targetUserId: number }) =>
    await baseApi.post(FOLLOW_URI, body),
  mutateProfileUpdate: async (newProfileData: IMutateProfileUpdate) =>
    await baseApi
      .put(MUTATE_PROFILE_UPDATE_URI, newProfileData)
      .then((res) => res.data),
};
