import * as S from "./style";
import { Block } from "@styles/UI";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieSearchContentsType } from "@pages/MovieSearch/MovieSearch";
import { MovieSearchApi } from "@apis/movieSearchApi";
import { Suspense, useEffect, useState } from "react";
import { IMovieSearchMovies } from "@interfaces/movieSearch";
import MovieSearchPage from "./MovieSearchPage/MovieSearchPage";
import Loading from "./Loading/Loading";
function MovieSearchContents({
  contents,
}: {
  contents: MovieSearchContentsType;
}) {
  const [isFetching, setFetching] = useState(false);
  const { data, hasNextPage, fetchNextPage, isLoading } =
    useInfiniteQuery<IMovieSearchMovies>({
      queryKey: ["movieSearch", contents],
      queryFn: ({ pageParam = 1 }) =>
        MovieSearchApi.getMovies(contents, pageParam),
      getNextPageParam: ({ nowPage, lastPage }) => {
        if (nowPage === lastPage) {
          return false;
        }
        return nowPage + 1;
      },
    });
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    console.log(hasNextPage);
    if (scrollTop + clientHeight >= scrollHeight && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);

  return (
    <Block.ColumnBox margin="0 0 70px 0 ">
      <S.Grid>
        {data?.pages.map((v, i) => (
          <MovieSearchPage key={i} v={v} i={i} />
        ))}
      </S.Grid>
    </Block.ColumnBox>
  );
}
export default MovieSearchContents;
