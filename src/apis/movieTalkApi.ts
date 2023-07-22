import { baseApi } from "./instance";

const BEST_REVIEWS_URI = "/today/bestReview";
const POPULAR_USERS_URI = "/test/today/popularUser";
const LATEST_REVIEWS_URI = "/today/latestReview";

export const MovieTalkApi = {
  bestReviews: async () =>
    baseApi.get(BEST_REVIEWS_URI).then((res) => res.data),
  popularUsers: async () =>
    baseApi.get(POPULAR_USERS_URI).then((res) => res.data),
  latestReviews: async () =>
    baseApi.get(LATEST_REVIEWS_URI).then((res) => res.data),
};
