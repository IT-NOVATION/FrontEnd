import { Block, Text } from "@styles/UI";
import Poster from "./Poster/Poster";
import { Suspense, useEffect, useState } from "react";
import * as S from "./style";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { MainPageApi } from "@apis/mainPageApi";
import { IMainPageMovie } from "@interfaces/movies";

const variants = {
  enter: ({ direction }: { direction: number }) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: ({ direction, animate }: { direction: number; animate: boolean }) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: animate ? 0.5 : 0,
      },
    };
  },
};

function Posters() {
  const { data: movies } = useQuery<IMainPageMovie>({
    queryKey: ["mainPage", "movies"],
    queryFn: MainPageApi.getMovies,
    suspense: true,
  });
  const [showPopular, setShowPopular] = useState(true);
  const [[page, direction], setPage] = useState([0, 0]);
  const [animate, setAnimate] = useState(false);
  const handlePopularClick = () => {
    setAnimate(false);
    setPage([0, 0]);
    setShowPopular(true);
  };
  const handleRecommendedClick = () => {
    setAnimate(false);
    setPage([0, 0]);
    setShowPopular(false);
  };
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setAnimate(true);
  };
  const handleNextClick = () => {
    paginate(1);
  };
  const handlePrevClick = () => {
    paginate(-1);
  };

  return (
    <Block.ColumnBox padding="0 0 100px 0" bgColor="white">
      <Block.RowBox justifyContent="center" margin="25px 0 75px 0">
        <S.PosterTitle
          onClick={handlePopularClick}
          color="lightBlack"
          margin="0 40px 0 0"
          pointer
          selected={showPopular}
        >
          무비타임 인기
        </S.PosterTitle>
        <S.PosterTitle
          onClick={handleRecommendedClick}
          color="lightBlack"
          margin="0 0 0 40px"
          pointer
          selected={!showPopular}
        >
          무비타임 추천
        </S.PosterTitle>
      </Block.RowBox>
      <Block.RowBox alignItems="center" justifyContent="center">
        <Block.RowBox alignItems="center" justifyContent="center">
          <S.Icon
            onClick={handlePrevClick}
            style={{ marginRight: "20px", cursor: "pointer", zIndex: "1000" }}
            src="/icons/MainPage/left_arrow.svg"
          />
          <AnimatePresence custom={{ direction, animate }} mode="popLayout">
            <Block.RowBox
              custom={{ direction, animate }}
              key={page}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "linear", duration: animate ? 0.5 : 0 }}
              width="1100px"
              justifyContent="center"
            >
              {showPopular
                ? movies?.popular
                    .slice(Math.abs(page % 2) * 5, Math.abs(page % 2) * 5 + 5)
                    .map((movie, idx) => (
                      <Poster
                        key={movie.movieId}
                        movie={movie}
                        rank={idx + 1 + Math.abs(page % 2) * 5}
                      />
                    ))
                : movies?.recommended
                    .slice(Math.abs(page % 2) * 5, Math.abs(page % 2) * 5 + 5)
                    .map((movie, idx) => (
                      <Poster
                        key={movie.movieId}
                        movie={movie}
                        rank={idx + 1 + Math.abs(page % 2) * 5}
                      />
                    ))}
            </Block.RowBox>
          </AnimatePresence>
          <S.Icon
            onClick={handleNextClick}
            style={{ marginLeft: "20px", cursor: "pointer", zIndex: "1000" }}
            src="/icons/MainPage/right_arrow.svg"
          />
        </Block.RowBox>
      </Block.RowBox>
    </Block.ColumnBox>
  );
}
export default Posters;
