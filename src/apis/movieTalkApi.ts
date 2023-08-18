import { baseApi } from './instance';

const BEST_REVIEWS_URI = '/movie-talk/best-review';
const POPULAR_USERS_URI = '/movie-talk/popular-user';
const LATEST_REVIEWS_URI = '/movie-talk/latest-review';

export const MovieTalkApi = {
  bestReviews: async () =>
    baseApi.get(BEST_REVIEWS_URI).then((res) => res.data),
  popularUsers: async () =>
    baseApi.get(POPULAR_USERS_URI).then((res) => res.data),
  latestReviews: async () =>
    baseApi.get(LATEST_REVIEWS_URI).then((res) => res.data),
};
