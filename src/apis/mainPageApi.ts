import { baseApi } from "./instance";

const GET_MOVIES_URI = "/movies/popularAndRecommend";
const TODAY_REVIEWER_URI = "/today/topUser";
export const MainPageApi = {
  getMovies: async () =>
    await baseApi
      .get(GET_MOVIES_URI, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => res.data),
  getTodayReviewer: async () =>
    await baseApi
      .get(TODAY_REVIEWER_URI, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => res.data),
};
