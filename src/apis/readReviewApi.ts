import { IMutateReview } from "@interfaces/review";
import { baseApi } from "./instance";
import { IMutateComment } from "@interfaces/comments";

const GET_REVIEW_URI = "/review/Info/";
const PUSH_REVIEW_LIKE_URI = "/push/reviewlike";
const GET_COMMENTS_URI = "/comment/read";
const MUTATE_COMMENT_URI = "/comment/write";
const DELETE_COMMENT_URI = "/comment/delete";
export const ReadReviewApi = {
  getReview: async (reviewId: number) =>
    await baseApi.get(GET_REVIEW_URI + reviewId).then((res) => res.data),
  pushReviewLike: async (reviewId: number) =>
    await baseApi
      .post(PUSH_REVIEW_LIKE_URI, { reviewId })
      .then((res) => res.data),
  getComments: async (reviewId: number, pageParam: number) =>
    await baseApi
      .get(GET_COMMENTS_URI, { params: { reviewId, page: pageParam } })
      .then((res) => res.data),
  mutateComment: async (commentData: IMutateComment) =>
    await baseApi.post(MUTATE_COMMENT_URI, commentData).then((res) => res.data),
  deleteComment: async (commentId: number) =>
    await baseApi
      .get(DELETE_COMMENT_URI + "/" + commentId)
      .then((res) => res.data),
};
