export interface IMovieResult {
  movieSearchResult: IMovieSearchResult[];
  totalSize: number;
}

export interface IMovieSearchResult {
  movieId: number;
  movieTitle: string;
  movieImg: string;
  starScore: number;
}
