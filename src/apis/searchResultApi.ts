import { baseApi } from "./instance";

const GET_MOVIE_RESULT_URI = "/single/movie";
const GET_USER_RESULT_URI = "/single/user";

export const SearchResultApi = {
    getMovieResult: async (movieNm: string) =>
        await baseApi.get(GET_MOVIE_RESULT_URI, { params: { movieNm: movieNm } }).then(res => res.data),
    getUserResult: async (userNm: string) =>
        await baseApi.get(GET_USER_RESULT_URI, { params: { userNm: userNm } }).then(res => res.data),
};
