import { IInterstedMovie } from "@interfaces/movies";
import * as S from "./style";
import { useState } from "react";
import { Block, Button, Text } from "@styles/UI";
import cutMovieTitle from "@utils/cutMovieTitle";
import useCalcStar from "@hooks/useCalcStar";
import { useQueryClient } from "@tanstack/react-query";
import { ILoginState } from "@interfaces/loginState";
import { useNavigate, useParams } from "react-router-dom";
import { SingleMovieApi } from "@apis/singleMovieApi";

function Movie({ movie }: { movie: IInterstedMovie }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const loginState = queryClient.getQueryData<ILoginState>(["loginState"]);
  const { userId } = useParams();
  const [mouseEntered, setMouseEntered] = useState(false);
  const handleMouseEnter = () => {
    setMouseEntered(true);
  };
  const handleMouseLeave = () => {
    setMouseEntered(false);
  };
  const { fullStar, halfStar } = useCalcStar(movie.star);
  const handleRemoveLike = async () => {
    await SingleMovieApi.postMovieLike(movie.movieId);
    await queryClient.invalidateQueries(["movieLog", userId]);
  };
  const handleGoReadReview = () => {
    // navigate("/")
  };
  const handleGoWriteReview = () => {
    navigate(`/write-review/${movie.movieId}`);
  };
  const handleBtnClick = () => {
    if (!movie.hasReviewdByLoginedUser) handleGoWriteReview();
    else handleGoReadReview();
  };
  return (
    <S.MovieContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      img={movie.movieImg}
    >
      {mouseEntered && (
        <S.MovieInfoContainer>
          <Text.Title4 color="darkWhite">
            {cutMovieTitle(movie.title)}
          </Text.Title4>
          <Block.RowBox margin="10px 0 0 0">
            {fullStar.map((v, i) => (
              <img key={i} src="/icons/MovieLog/purple_star.svg" />
            ))}
            {halfStar.map((v, i) => (
              <img key={i} src="/icons/MovieLog/purple_half_star.svg" />
            ))}
          </Block.RowBox>
          <Block.RowBox margin="157px 0 0 0">
            {loginState?.userId === Number(userId) && (
              <S.MinusBtn onClick={handleRemoveLike}>
                <S.MinusBox />
              </S.MinusBtn>
            )}
            <Button.Button
              width="130px"
              height="50px"
              borderRadius="15px"
              bgColor="main"
              onClick={handleBtnClick}
            >
              <Text.Body3 color="white">
                {movie.hasReviewdByLoginedUser ? "MY 리뷰" : "리뷰 쓰기"}
              </Text.Body3>
            </Button.Button>
          </Block.RowBox>
        </S.MovieInfoContainer>
      )}
    </S.MovieContainer>
  );
}
export default Movie;
