export interface IInterstedMovie {
  movieId: number;
  movieImg: string;
  star: number;
  title: string;
  hasReviewed: boolean;
}
export interface IMovieBase {
  movieId: number;
  movieTitle: string;
}

export interface IPopularMovie extends IMovieBase {
  movieImg: string;
  starScore: number;
  popularity: number;
}
export interface IRecommendedMovie extends IMovieBase {
  movieImg: string;
  starScore: number;
}
export interface IMainPageMovie {
  popular: IPopularMovie[];
  recommended: IRecommendedMovie[];
}

export interface IWriteReviewMovie extends IMovieBase {
  title: string;
  movieImg: string;
}
