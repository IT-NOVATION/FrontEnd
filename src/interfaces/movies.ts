export interface IMovieBase {
  movieId: number;
  movieTitle: string;
}

export interface IInterstedMovie {
  movieId: number;
  movieImg: string;
  star: number;
  title: string;
  hasReviewdByLoginedUser: boolean;
  reviewId?: number;
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
  releaseDate: string;
}

export interface IReadReviewMovie extends IMovieBase {
  title: string;
  movieReleaseDate: string;
  movieImg: string;
  movieGenre: string;
  movieCountry: string;
}

export interface IMovieTalkMovie {
  movieId: number;
  movieImg: string;
}

export interface IMovieSearchMovie extends IMovieBase {
  movieImg: string;
  movieTitle: string;
  starScore: number;
  reviewCount: number;
}
