export interface IBestReview {
  userId: number;
  profileImg: string;
  nickName: string;
  introduction: string;
  reviews: IReview[];
}
interface IReview {
  reviewId: number;
  reviewTitle: string;
  movie: {
    movieId: number;
    movieImg: string;
  };
}
