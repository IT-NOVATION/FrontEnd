import { baseApi } from "./instance";

const BEST_REVIEWS_URI = "/today/bestReview";
const POPULAR_USERS_URI = "/today/popularUser";

export const MovieTalkApi = {
  bestReviews: async () =>
    baseApi.get(BEST_REVIEWS_URI).then((res) => res.data),
  popularUsers: async () =>
    baseApi.get(POPULAR_USERS_URI).then((res) => res.data),
};
