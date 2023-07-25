export interface IMovieResult {
    movieSearchResultList: IMovieSearchResult[];
    totalSize: number;
}

export interface IMovieSearchResult {
    movieId: number;
    movieTitle: string;
    movieImg: string;
    star: number;
}
