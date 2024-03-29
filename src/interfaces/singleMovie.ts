import { IReviewPreview } from "./review";

export interface ISingleMovie {
  movie: IMovieInformation;
  loginUserInfoDto: ILoginUserInfoDto;
  reviewAndUserInfoList: { review: IReviewPreview; user: IUser }[];
}

export interface IMovieInformation {
  movieImg?: string;
  title: string;
  movieBgImg: string;
  movieGenre: string;
  movieReleasedDate: string;
  movieDetail: string;
  movieActor: string[];
  movieDirector: string;
  movieAge: string;
  movieRunningTime: number;
  top3HasFeature: { topKeywordList: string[] };
  movieLikeCount: number;
  avgStarScore: number;
}

export interface ILoginUserInfoDto {
  reviewStart: number;
  movieStar: number;
  pushedMovieLike: boolean;
}

export interface IReviewAndUserInfo {
  review: ISingleMoviePageReview;
  user: IUser;
}

export interface ISingleMoviePageReview {
  reviewId: number;
  hasSpoiler: boolean;
  reviewTitle: string;
  reviewMainText: string;
  createdDate: string;
  starScore: number;
  reviewLikeCount: number;
}

export interface IUser {
  userId: number;
  nickname?: string;
  nickName?: string;
  userProfileImg: string;
}

export interface IReviewCount {
  reviewCount: number;
}
