import { IReviewPreview } from "./review";

export interface IUserBase {
  userId: number;
}
export interface IReviewTimeUser extends IUserBase {
  profileImg: string;
  nickName: string;
  introduction?: string;
  grade: string;
  followers: number;
  followings: number;
  reviews: IReviewPreview[];
}
export interface IReadReviewUser extends IUserBase {
  bgImg: string;
  nickname: string;
  grade: string;
  introduction: string;
  profileImg: string;
  folllowerNum: number;
  followingNum: number;
}
export interface IReadReviewLoginUser {
  pushedFollow: boolean;
  pushedReviewLike?: boolean;
}
