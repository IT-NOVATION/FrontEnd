export interface IMovieBase {
    movieId: number;
    movieTitle: string;
}

export interface IInterstedMovie {
    movieId: number;
    movieImg: string;
    star: number;
    title: string;
    hasReviewed: boolean;
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

export interface IReadReviewMovie extends IMovieBase {
    title: string;
    movieReleaseDate: string;
    movieImg: string;
    movieGenre: string;
    movieCountry: string;
}
