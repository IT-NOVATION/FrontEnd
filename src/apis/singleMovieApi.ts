import { baseApi } from './instance';

const GET_Single_MOVIE_URI = '/single/movie-page';
const GET_REVIEW_COUNT_URI = '/single/movie/review-count';
const GET_TOP_FEATURES_URI = '/top/movie-keyword';
const POST_STAR_EVALUATE = '/single/star-evaluate';
const POST_MOVIE_LIKE = '/push/movie-like';

export const SingleMovieApi = {
  getSinglelMovie: async (movieId: number) =>
    await baseApi
      .get(GET_Single_MOVIE_URI + '/' + movieId)
      .then((res) => res.data),
  getReviewCount: async (movieId: number) =>
    await baseApi
      .get(GET_REVIEW_COUNT_URI + '/' + movieId)
      .then((res) => res.data),
  getTop3HasFeature: async (movieId: number) =>
    await baseApi
      .get(GET_TOP_FEATURES_URI + '/' + movieId)
      .then((res) => res.data),
  postStarEvaluate: async (movieId: number, starScore: number) => {
    await baseApi.post(POST_STAR_EVALUATE, { movieId, starScore });
  },
  postMovieLike: async (movieId: number) => {
    await baseApi.post(POST_MOVIE_LIKE, { movieId });
  },
};
