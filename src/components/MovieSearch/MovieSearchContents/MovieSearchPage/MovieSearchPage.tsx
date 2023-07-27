import { Block } from "@styles/UI";
import { useQuery } from "@tanstack/react-query";
import { MovieSearchApi } from "@apis/movieSearchApi";
import { Suspense, useEffect, useState } from "react";
import { IMovieSearchMovies } from "@interfaces/movieSearch";
import MovieSearchContent from "./MovieSearchContent/MovieSearchContent";
import Loading from "../Loading/Loading";
function MovieSearchPage({ v, i }: { v: IMovieSearchMovies; i: number }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {v.moiveSearchDtoList.map((v2, i2) => (
          <MovieSearchContent rank={i * 16 + i2} key={v2.movieId} movie={v2} />
        ))}
      </Suspense>
    </>
  );
}
export default MovieSearchPage;
