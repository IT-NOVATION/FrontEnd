import { IMovieTalkReview } from "./review";

export interface IUserResult {
  userSearchResponseDtoList: IUserSearchResponseDtoList[];
  totalSize: number;
}

export interface IUserSearchResponseDtoList {
  userId: number;
  isMyProfile: boolean;
  isNowUserFollowThisUser: boolean;
  profileImg: string;
  nickName: string;
  introduction: string;
  reviews: IMovieTalkReview[];
}
