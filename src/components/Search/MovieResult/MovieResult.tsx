import * as S from "./style";
import { IMovieResult } from "@interfaces/movieResult";
import Poster from "./Poster/Poster";
import { Block, Text } from "@styles/UI";

type Props = {
  result: IMovieResult;
};

export default function MovieResult({ result }: Props) {
  return (
    <S.Grid>
      {result.movieSearchResult?.map((v) => (
        <Poster key={v.movieId} movie={v} />
      ))}
    </S.Grid>
  );
}
