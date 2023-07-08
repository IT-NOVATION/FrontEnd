import { IReviewPreview } from "./review";

export interface IUserBase {
  userId: number;
}
export interface IReviewTimeUser extends IUserBase {
  profileImg: string;
  nickName: string;
  introduction: string;
  grade: string;
  followers: number;
  followings: number;
  reviews: IReviewPreview[];
}
