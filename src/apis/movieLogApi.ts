import { BASE_URL, baseApi } from "./instance";

const GET_MOVIELOG_URI = "/movielog";
const FOLLOW_URI = "/push/follow";

type FollowType = {
  pushUserId: number;
  targetUserId: number;
};

export const MovieLogApi = {
  getMovieLog: async (userId: number) =>
    await baseApi.get(GET_MOVIELOG_URI + "/" + userId).then((res) => res.data),
  follow: async ({ pushUserId, targetUserId }: FollowType) =>
    await baseApi.get(FOLLOW_URI, {
      params: {
        pushUserId,
        targetUserId,
      },
    }),
};
