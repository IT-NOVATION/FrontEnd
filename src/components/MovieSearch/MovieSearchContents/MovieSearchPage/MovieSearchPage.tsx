import { Block } from "@styles/UI";
import { useQuery } from "@tanstack/react-query";
import { MovieSearchApi } from "@apis/movieSearchApi";
import { useEffect, useState } from "react";
import { IMovieSearchMovies } from "@interfaces/movieSearch";
import MovieSearchContent from "./MovieSearchContent/MovieSearchContent";
function MovieSearchPage({ v, i }: { v: IMovieSearchMovies; i: number }) {
  const loadImage = (src: string) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        resolve(img);
      };
      img.onerror = (e) => {
        reject(e);
      };
    });
  const { data } = useQuery({
    queryFn: () =>
      Promise.all(
        v.moiveSearchDtoList.map((movie) => loadImage(movie.movieImg))
      ),
    suspense: true,
  });
  return (
    <>
      {v.moiveSearchDtoList.map((v2, i2) => (
        <MovieSearchContent rank={i * 16 + i2} key={v2.movieId} movie={v2} />
      ))}
    </>
  );
}
export default MovieSearchPage;
