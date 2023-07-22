import { MovieSearchContentsType } from "@pages/MovieSearch/MovieSearch";
import { baseApi } from "./instance";

const REVIEWS_URI = "/movie-search/review-order";
const STAR_URI = "/movie-search/star-score-order";
const RELEASE_DATE_URI = "/movie-search/release-order";

export const MovieSearchApi = {
  getMovies: async (
    contentsType: MovieSearchContentsType,
    pageParam: number
  ) => {
    if (contentsType === "Reviews") {
      return baseApi.get(REVIEWS_URI + "/" + pageParam).then((res) => res.data);
    }
    if (contentsType === "Star") {
      return baseApi.get(STAR_URI + "/" + pageParam).then((res) => res.data);
    }
    if (contentsType === "ReleaseDate") {
      return baseApi
        .get(RELEASE_DATE_URI + "/" + pageParam)
        .then((res) => res.data);
    }
  },
};
