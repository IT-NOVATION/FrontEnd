import { baseApi } from "./instance";

const BEST_REVIEWS_URI = "/today/bestReview";

export const MovieTalkApi = {
  bestReviews: async () =>
    baseApi.get(BEST_REVIEWS_URI).then((res) => res.data),
};
