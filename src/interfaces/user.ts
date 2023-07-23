import { IMovieTalkReview, IReviewPreview } from "./review";

export interface IUserBase {
  userId: number;
}
export interface IReviewTimeUser extends IUserBase {
  profileImg: string;
  nickName: string;
  introduction?: string;
  grade: Grade;
  followers: number;
  followings: number;
  reviews: IReviewPreview[];
  isLoginedUserFollowsNowUser: boolean;
}
export interface IReadReviewUser extends IUserBase {
  bgImg: string;
  nickname: string;
  grade: Grade;
  introduction: string;
  profileImg: string;
  followerNum: number;
  followingNum: number;
}
export interface IReadReviewLoginUser {
  pushedFollow: boolean;
  pushedReviewLike?: boolean;
}
export interface IMovieTalkUser extends IUserBase {
  isMyProfile: boolean;
  isNowUserFollowThisUser: boolean;
  profileImg: string;
  nickName: string;
  introduction: string;
  reviews: IMovieTalkReview[];
}

export enum Grade {
  "STANDARD",
  "PREMIUM",
  "VIP",
  "SPECIAL",
}
export interface IMovieLogUser extends IUserBase {
  bgImg?: string;
  nickname: string;
  introduction?: string;
  grade: Grade;
  profileImg?: string;
}
export interface IMovieLogFollowUser extends IUserBase {
  nickname: string;
  profileImg: string;
}
export interface IMutateProfileUpdate {
  nickname: string;
  introduction: string;
  profileImg: string;
  bgImg: string;
}
export interface ICommentUser extends IUserBase {
  nickname: string;
  profileImg: string;
}
export interface ILikeListUser extends IUserBase {
  isMyProfile: boolean;
  profileImg: string;
  nickname: string;
  isLoginUserFollowed: boolean;
}
