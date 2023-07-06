import { IInterstedMovie } from "@interfaces/movies";
import { Block } from "@styles/UI";
import Movie from "./Movie/Movie";
import * as S from "./style";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
function Movies({ movies }: { movies: IInterstedMovie[] }) {
  const [idx, setIdx] = useState(0);
  const [maxIdx, setMaxIdx] = useState(0);

  useEffect(() => {
    setMaxIdx(Math.floor(movies.length / 3));
  }, []);

  const handleRightArrowClick = () => {
    setIdx((prev) => {
      if (prev < maxIdx) return prev + 1;
      return 0;
    });
  };
  const handleLeftArrowClick = () => {
    setIdx((prev) => {
      if (!prev) return maxIdx;
      return prev - 1;
    });
  };
  return (
    <Block.RowBox
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Block.AbsoluteBox width="auto" top="150px" left="-20px">
        <S.ArrowBtn onClick={handleLeftArrowClick}>
          <img src="/icons/MovieLog/left_arrow.svg" />
        </S.ArrowBtn>
      </Block.AbsoluteBox>
      {movies.slice(idx * 3, idx * 3 + 3).map((v) => (
        <Movie key={v.movieId} movie={v} />
      ))}
      <Block.AbsoluteBox width="auto" top="150px" right="-20px">
        <S.ArrowBtn onClick={handleRightArrowClick}>
          <img src="/icons/MovieLog/right_arrow.svg" />
        </S.ArrowBtn>
      </Block.AbsoluteBox>
    </Block.RowBox>
  );
}
export default Movies;
