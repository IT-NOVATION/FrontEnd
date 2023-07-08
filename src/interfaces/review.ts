export interface IReview {
  reviewId: number;
  title: string;
  star: number;
  text: string;
  date: string;
  likes: number;
  comments: number;
  movie: {
    movieId: number;
    movieImg: string;
  };
}
export interface IReviewPreview {
  reviewId: number;
  reviewTitle: string;
  star: number;
  reviewMainText: string;
  createdDate: string;
  reviewLikeCount: number;
  movie: {
    movieId: number;
    movieImg: string;
  };
}
