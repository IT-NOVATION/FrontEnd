import useHovered from "@hooks/useHovered";
import * as S from "./style";
import { IMovieSearchResult } from "@interfaces/movieResult";
import { Block, Text } from "@styles/UI";
import cutMovieTitle from "@utils/cutMovieTitle";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Poster({ movie }: { movie: IMovieSearchResult }) {
  const { isHovered, handleHover, handleLeave } = useHovered();
  const navigate = useNavigate();
  const handleDetailClick = () => {
    navigate(`/singleMovie/${movie.movieId}`);
  };
  return (
    <S.Poster
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      isHovered={isHovered}
      img={movie.movieImg}
    >
      {isHovered && (
        <S.Background>
          <Block.RowBox width="auto">
            <Text.Body1 color="white">
              {cutMovieTitle(movie.movieTitle)}
            </Text.Body1>
          </Block.RowBox>
          <Block.RowBox
            width="109px"
            height="29px"
            justifyContent="center"
            alignItems="center"
            margin="18px 0 0 0"
            border="1.5px solid white"
            borderRadius="5px"
          >
            <Text.Body3 color="white">평점 </Text.Body3>{" "}
            <AiFillStar color="#F8B319" />{" "}
            <Text.Body3 color="white">{movie.starScore.toFixed(1)}</Text.Body3>
          </Block.RowBox>
          <S.DetailBtn onClick={handleDetailClick}>
            <Text.Body3 color="white">상세정보</Text.Body3>
          </S.DetailBtn>
        </S.Background>
      )}
    </S.Poster>
  );
}
