import { Block, Text } from "@styles/UI";
import { useEffect, useState } from "react";
import * as S from "./style";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { MainPageApi } from "@apis/mainPageApi";
import { IMainPageMovie } from "@interfaces/movies";
import PostersContainer from "./PostersContainer/PostersContainer";

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
  useEffect(() => {
    console.log(animate);
  }, []);
  return (
    <Block.ColumnBox
      height="500px"
      padding="0 0 100px 0"
      bgColor="white"
      alignItems="center"
    >
      <Block.RowBox
        width="277px"
        justifyContent="center"
        margin="70px 0 0 0"
        position="relative"
      >
        <S.Ellipse src="/icons/MainPage/ellipse.svg" />
        <S.MovieTimeTitle>MOVIE TIME</S.MovieTimeTitle>
      </Block.RowBox>
      <Block.RowBox justifyContent="center" margin="25px 0 50px 0">
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
            style={{ marginRight: "20px", cursor: "pointer", zIndex: "2" }}
            src="/icons/MainPage/left_arrow.svg"
          />
          <AnimatePresence
            custom={{ direction, animate }}
            mode="popLayout"
            initial={false}
          >
            <Block.RowBox
              custom={{ direction, animate }}
              key={page}
              variants={S.variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "linear", duration: animate ? 0.5 : 0 }}
              width="1100px"
              height="300px"
              justifyContent="center"
            >
              {showPopular
                ? movies && (
                    <PostersContainer
                      key={page + "popular"}
                      movies={movies.popular.slice(
                        Math.abs(page % 2) * 5,
                        Math.abs(page % 2) * 5 + 5
                      )}
                      page={page}
                    />
                  )
                : movies && (
                    <PostersContainer
                      key={page + "recommended"}
                      movies={movies.recommended.slice(
                        Math.abs(page % 2) * 5,
                        Math.abs(page % 2) * 5 + 5
                      )}
                      page={page}
                    />
                  )}
            </Block.RowBox>
          </AnimatePresence>
          <S.Icon
            onClick={handleNextClick}
            style={{ marginLeft: "20px", cursor: "pointer", zIndex: "2" }}
            src="/icons/MainPage/right_arrow.svg"
          />
        </Block.RowBox>
      </Block.RowBox>
    </Block.ColumnBox>
  );
}
export default Posters;
