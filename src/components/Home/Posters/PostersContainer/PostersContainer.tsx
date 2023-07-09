import { IPopularMovie, IRecommendedMovie } from "@interfaces/movies";
import Poster from "./Poster/Poster";
import { useEffect, useState } from "react";
import Loading from "@components/Home/Loading/Loading";
function PostersContainer({
  movies,
  page,
}: {
  movies: IPopularMovie[] | IRecommendedMovie[];
  page: number;
}) {
  const [isLoading, setIsLoading] = useState(Array(5).fill(true));
  const [loadingFinished, setLoadingFinished] = useState(false);
  useEffect(() => {
    if (isLoading.every((v) => v === false)) {
      setLoadingFinished(true);
    }
  }, [isLoading]);

  return (
    <>
      {!loadingFinished && <Loading />}

      {movies.map((movie, idx) => (
        <Poster
          setIsLoading={setIsLoading}
          idx={idx}
          key={movie.movieId}
          movie={movie}
          rank={idx + 1 + Math.abs(page % 2) * 5}
          loadingFinished={loadingFinished}
        />
      ))}
    </>
  );
}
export default PostersContainer;
