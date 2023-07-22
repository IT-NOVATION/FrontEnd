import { IMovieSearchMovie } from "./movies";

export interface IMovieSearchMovies {
  lastPage: number;
  firstPage: number;
  nowPage: number;
  moiveSearchDtoList: IMovieSearchMovie[];
}
