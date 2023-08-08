import { IPopularMovie, IRecommendedMovie } from "@interfaces/movies";
import Poster from "./Poster/Poster";
import { Suspense, useEffect, useState } from "react";
import Loading from "@components/Home/Loading/Loading";

type Props = {
  movies: IPopularMovie[] | IRecommendedMovie[];
  page: number;
};

function Posters({ movies, page }: Props) {
  const [isLoading, setIsLoading] = useState(Array(5).fill(true));
  const [loadingFinished, setLoadingFinished] = useState(false);
  useEffect(() => {
    if (isLoading.every((v) => v === false)) {
      setLoadingFinished(true);
    }
  }, [isLoading]);

  const handleLoaded = (idx: number) => {
    setIsLoading((prev) => {
      const temp = [...prev];
      temp[idx] = false;
      return temp;
    });
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        {movies.map((movie, idx) => (
          <Poster
            key={movie.movieId}
            movie={movie}
            rank={idx + 1 + Math.abs(page % 2) * 5}
            loadingFinished={loadingFinished}
            onLoad={() => handleLoaded(idx)}
          />
        ))}
      </Suspense>
    </>
  );
}
export default Posters;
