import { baseApi } from "./instance";

const GET_MOVIES_URI = "/test/api/v1/movies/popularAndRecommend";
const TODAY_REVIEWER_URI = "/today/topUser";
export const MainPageApi = {
  getMovies: async () =>
    await baseApi.get(GET_MOVIES_URI).then((res) => res.data),
  getTodayReviewer: async () =>
    await baseApi.get(TODAY_REVIEWER_URI).then((res) => res.data),
};
