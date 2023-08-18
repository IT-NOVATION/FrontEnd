import { baseApi } from './instance';

const GET_MOVIES_URI = '/top/yesterday/user';
const TODAY_REVIEWER_URI = '/movies/popular-and-recommend';
export const MainPageApi = {
  getMovies: async () =>
    await baseApi
      .get(GET_MOVIES_URI, {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem('accessToken')
              ? localStorage.getItem('accessToken')
              : ''
          }`,
        },
      })
      .then((res) => res.data),
  getTodayReviewer: async () =>
    await baseApi
      .get(TODAY_REVIEWER_URI, {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem('accessToken')
              ? localStorage.getItem('accessToken')
              : ''
          }`,
        },
      })
      .then((res) => res.data),
};
