import { MovieTalkApi } from "@apis/movieTalkApi";
import { Block } from "@styles/UI";
import { useQueries } from "@tanstack/react-query";
import { IMovieTalkUser } from "@interfaces/user";
import MovieTalkContent from "./MovieTalkContent/MovieTalkContent";
import { ContentsType } from "@pages/MovieTalk/MovieTalk";
function MovieTalkContents({ contents }: { contents: ContentsType }) {
  const [{ data: bestReviews }, { data: popularUsers }] = useQueries({
    queries: [
      {
        queryKey: ["BestReviews"],
        queryFn: MovieTalkApi.bestReviews,
        staleTime: Infinity,
      },
      {
        queryKey: ["PopularUsers"],
        queryFn: MovieTalkApi.popularUsers,
        staleTime: Infinity,
      },
      // { queryKey: ["BestReviews"], queryFn: MovieTalkApi.bestReviews },
    ],
  });

  return (
    <Block.ColumnBox margin="0 0 70px 0 ">
      {contents === "BestReviews"
        ? bestReviews?.map((v: IMovieTalkUser) => (
            <MovieTalkContent content={v} />
          ))
        : contents === "PopularUsers"
        ? popularUsers.map((v: IMovieTalkUser) => (
            <MovieTalkContent content={v} />
          ))
        : bestReviews?.map((v: IMovieTalkUser) => (
            <MovieTalkContent content={v} />
          ))}
    </Block.ColumnBox>
  );
}
export default MovieTalkContents;
