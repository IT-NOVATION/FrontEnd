import { Block, Button, Text } from "@styles/UI";
import * as S from "./style";
import { Suspense, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IPopularMovie, IRecommendedMovie } from "@interfaces/movies";
import cutMovieTitle from "@utils/cutMovieTitle";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IMovieSearchResult } from "@interfaces/movieResult";

type Props = {
  movie: IPopularMovie | IRecommendedMovie | IMovieSearchResult;
  rank?: number;
  loadingFinished: boolean;
  onLoad: React.ReactEventHandler<HTMLImageElement>;
};

function Poster({ movie, rank, loadingFinished, onLoad }: Props) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleDetailClick = () => {
    navigate(`/singleMovie/${movie.movieId}`);
  };
  return (
    <>
      <S.PosterContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        loadingFinished={loadingFinished}
      >
        <S.Image key={movie.movieId} src={movie.movieImg} onLoad={onLoad} />
        {hovered && (
          <S.HoveredPoster alignItems="center">
            <Text.Title5 margin="40px 0 0 0" color="white">
              {cutMovieTitle(movie.movieTitle)}
            </Text.Title5>
            <Block.RowBox
              width="105px"
              height="25px"
              justifyContent="center"
              alignItems="center"
              margin="18px 0 0 0"
              border="1.5px solid white"
              borderRadius="5px"
            >
              <Text.Body3 color="white">평점 </Text.Body3>{" "}
              <AiFillStar color="#F8B319" />{" "}
              <Text.Body3 color="white">
                {movie.starScore.toFixed(1)}
              </Text.Body3>
            </Block.RowBox>
            <S.DetailBtn onClick={handleDetailClick}>
              <Text.Body3 color="white">상세정보</Text.Body3>
            </S.DetailBtn>
          </S.HoveredPoster>
        )}
        <S.Rank>{rank}</S.Rank>
      </S.PosterContainer>
    </>
  );
}
export default Poster;
