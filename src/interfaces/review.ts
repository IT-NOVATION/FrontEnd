import { IMovieTalkMovie, IReadReviewMovie } from "./movies";
import { IReviewAndUserInfo } from "./singleMovie";
import { IReadReviewLoginUser, IReadReviewUser } from "./user";

export interface IReviewPreview {
  reviewId: number;
  reviewTitle: string;
  star?: number;
  starScore?: number;
  reviewMainText: string;
  createdDate: string;
  reviewLikeCount: number;
  hasSpoiler: boolean;
  commentCount?: number;
  movie?: {
    movieId: number;
    movieImg: string;
  };
}

export interface IMovieLogReviewPreview {
  reviewId: number;
  reviewTitle: string;
  star: number;
  reviewMainText: string;
  createdDate: string;
  reviewLikeCount: number;
  hasSpoiler: boolean;
  movie: {
    movieId: number;
    movieImg: string;
  };
  movieofReview: {
    movieId: number;
    movieImg: string;
  };
}

export interface IMutateReview {
  movieId: number;
  star: number;
  reviewTitle: string;
  reviewMainText: string;
  hasGoodStory: boolean;
  hasGoodProduction: boolean;
  hasGoodScenario: boolean;
  hasGoodDirecting: boolean;
  hasGoodOst: boolean;
  hasGoodVisual: boolean;
  hasGoodActing: boolean;
  hasGoodCharterCharming: boolean;
  hasGoodDiction: boolean;
  hasCheckDate: boolean;
  hasSpoiler: boolean;
  watchDate: string;
}

export interface IReadReview {
  review: {
    reviewId: number;
    reviewTitle: string;
    reviewMainText: string;
    hasGoodStory: boolean;
    hasGoodProduction: boolean;
    hasGoodScenario: boolean;
    hasGoodDirecting: boolean;
    hasGoodOst: boolean;
    hasGoodVisual: boolean;
    hasGoodActing: boolean;
    hasGoodCharterCharming: boolean;
    hasGoodDiction: boolean;
    hasCheckDate: boolean;
    hasSpoiler: boolean;
    watchDate: string;
    star: number;
    reviewLikeNum: number;
    createdDate?: string;
  };
  movie: IReadReviewMovie;
  user: IReadReviewUser;
  loginUser: IReadReviewLoginUser;
}

export interface IMovieTalkReview {
  reviewId: number;
  reviewTitle: string;
  movieImg?: string;
  movie?: IMovieTalkMovie;
}
