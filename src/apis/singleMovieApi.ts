import { baseApi } from "./instance";

const GET_Single_MOVIE_URI = "/single/moviePage";
const GET_REVIEW_COUNT_URI = "/single/movie/reviewCount";
const GET_TOP_FEATURES_URI = "/top/moviekeyword";

export const SingleMovieApi = {
    getSinglelMovie: async () => await baseApi.get(GET_Single_MOVIE_URI).then(res => res.data),
    getReviewCount: async () => await baseApi.get(GET_REVIEW_COUNT_URI).then(res => res.data),
    getTop3HasFeature: async () => await baseApi.get(GET_TOP_FEATURES_URI).then(res => res.data),
};
