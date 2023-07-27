import * as S from "./style";
import { Block, Button, Text } from "@styles/UI";
import { IMovieTalkUser } from "@interfaces/user";
import { useNavigate } from "react-router-dom";
import { IMovieSearchMovie } from "@interfaces/movies";
import cutMovieTitle from "@utils/cutMovieTitle";
import { useQuery } from "@tanstack/react-query";

function MovieSearchContent({
  movie,
  rank,
}: {
  movie: IMovieSearchMovie;
  rank: number;
}) {
  const navigate = useNavigate();
  const handlePosterClick = () => {
    navigate(`/singleMovie/${movie.movieId}`);
  };
  const loadImage = async (src: string) =>
    await new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        resolve(src);
      };
      img.onerror = (e) => {
        reject(e);
      };
    });
  const { data } = useQuery({
    queryFn: () => loadImage(movie.movieImg),
    queryKey: ["poster", movie.movieId],
    suspense: true,
  });
  return (
    <S.MovieContainer>
      <S.Poster img={data as string} onClick={handlePosterClick}>
        {rank + 1 <= 10 && (
          <S.RankBadge>
            <S.RankText>{rank + 1}</S.RankText>
          </S.RankBadge>
        )}
      </S.Poster>
      <Block.RowBox margin="11px 0 0 0" justifyContent="center">
        <Text.Title5>{cutMovieTitle(movie.movieTitle)}</Text.Title5>
      </Block.RowBox>
      <Block.RowBox
        margin="8px 0 0 0"
        justifyContent="center"
        alignItems="center"
      >
        <S.Icon src="/icons/MovieSearch/star.svg" />
        <Text.Body3 margin="0 35px 0 5px">
          평점 {movie.starScore.toFixed(1)}
        </Text.Body3>
        <Text.Body3>리뷰 {movie.reviewCount}</Text.Body3>
      </Block.RowBox>
    </S.MovieContainer>
  );
}
export default MovieSearchContent;
