import { baseApi } from "./instance";

const MOVIE_INFO_URI = "/review/movieInfo/";
export const WriteReviewApi = {
  movieInfo: async (movieId: number) =>
    await baseApi.get(MOVIE_INFO_URI + movieId).then((res) => res.data),
};
