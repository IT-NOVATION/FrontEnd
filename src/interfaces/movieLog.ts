import { IInterstedMovie } from "./movies";
import { Grade, IMovieLogUser } from "./user";

export interface IMovieLogData {
  nowUser: IMovieLogUser;
  followers: [];
  followings: [];
  reviews: {
    reviewId: number;
    reviewTitle: string;
    star: number;
    reviewMainText: string;
    createdDate: string;
    likeCount: number;
    comments: number;
    movieLogMovieofReviewsInfoDtoList: {
      movieId: number;
      movieImg: string;
    };
  }[];

  interestedMovie: IInterstedMovie[];
}
