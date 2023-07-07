import { baseApi } from "./instance";

const GET_MOVIES_API = "/test/api/v1/movies/popularAndRecommend";

export const MainPageApi = {
  getMovies: async () =>
    await baseApi.get(GET_MOVIES_API).then((res) => res.data),
};
