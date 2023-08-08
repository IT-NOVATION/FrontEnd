import { IPopularMovie, IRecommendedMovie } from "@interfaces/movies";
import Poster from "./Poster/Poster";
import { Suspense, useEffect, useState } from "react";
import Loading from "@components/Home/Loading/Loading";

type Props = {
  movies: IPopularMovie[] | IRecommendedMovie[];
  page: number;
};

function Posters({ movies, page }: Props) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {movies.map((movie, idx) => (
          <Poster
            key={movie.movieId}
            movie={movie}
            rank={idx + 1 + Math.abs(page % 2) * 5}
          />
        ))}
      </Suspense>
    </>
  );
}
export default Posters;
