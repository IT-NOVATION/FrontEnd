import { Block, Button, Text } from "@styles/UI";
import * as S from "./style";
import { Suspense, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IPopularMovie, IRecommendedMovie } from "@interfaces/movies";

function Poster({
  movie,
  rank,
}: {
  movie: IPopularMovie | IRecommendedMovie;
  rank: number;
}) {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Block.ColumnBox
        margin="0px 10px 0 10px"
        width="200px"
        height="280px"
        bgImg={`url(${movie.movieImg})`}
        bgSize="cover"
        borderRadius="10px"
        position="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hovered && (
          <S.HoveredPoster alignItems="center">
            <Text.Title5 margin="40px 0 0 0" color="white">
              {movie.movieTitle}
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
              <Text.Body3 color="white">{movie.starScore}</Text.Body3>
            </Block.RowBox>
            <Button.Button
              margin="90px 0 0 0"
              bgColor="lightBlack"
              width="135px"
              height="55px"
              borderRadius="15px"
              backdropFilter="blur(5px)"
            >
              <Text.Body3 color="white">상세정보</Text.Body3>
            </Button.Button>
          </S.HoveredPoster>
        )}
        <S.Rank>{rank}</S.Rank>
      </Block.ColumnBox>
    </Suspense>
  );
}
export default Poster;
