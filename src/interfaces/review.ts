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
