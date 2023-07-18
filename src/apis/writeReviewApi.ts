import { IMutateReview } from "@interfaces/review";
import { baseApi } from "./instance";

const MOVIE_INFO_URI = "/review/movieInfo/";
const MUTATE_REVIEW_URI = "/review";
export const WriteReviewApi = {
  movieInfo: async (movieId: number) =>
    await baseApi.get(MOVIE_INFO_URI + movieId).then((res) => res.data),
  mutateReview: async (reviewData: IMutateReview) =>
    await baseApi.post(MUTATE_REVIEW_URI, reviewData).then((res) => res.data),
};
