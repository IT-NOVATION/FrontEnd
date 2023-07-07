import { BASE_URL, baseApi } from "./instance";

const SIGNUP_URI = "/push/follow";

type FollowType = {
  pushUserId: number;
  targetUserId: number;
};

export const MovieLogApi = {
  follow: async ({ pushUserId, targetUserId }: FollowType) =>
    await baseApi.get(SIGNUP_URI, {
      params: {
        pushUserId,
        targetUserId,
      },
    }),
};
