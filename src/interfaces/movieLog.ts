import { IFollowUser } from "./followUser";
import { IInterstedMovie } from "./movies";
import { IMovieLogReviewPreview, IReviewPreview } from "./review";
import { Grade, IMovieLogUser } from "./user";

export interface IMovieLogData {
  nowUser: IMovieLogUser;
  followers: IFollowUser[];
  followings: IFollowUser[];
  reviews: IMovieLogReviewPreview[];

  interestedMovie: IInterstedMovie[];
}
