import { IMutateReview } from "@interfaces/review";
import { baseApi } from "./instance";

const GET_REVIEW_URI = "/review/Info/";
export const ReadReviewApi = {
  getReview: async (reviewId: number) =>
    await baseApi.get(GET_REVIEW_URI + reviewId).then((res) => res.data),
};
