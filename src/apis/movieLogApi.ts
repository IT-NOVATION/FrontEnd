import { BASE_URL, baseApi } from "./instance";

const FOLLOW_URI = "/push/follow";

type FollowType = {
  pushUserId: number;
  targetUserId: number;
};

export const MovieLogApi = {
  follow: async ({ pushUserId, targetUserId }: FollowType) =>
    await baseApi.get(FOLLOW_URI, {
      params: {
        pushUserId,
        targetUserId,
      },
    }),
};
