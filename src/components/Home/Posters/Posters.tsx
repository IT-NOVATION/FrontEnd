import { Block, Text } from "@styles/UI";
import Poster from "./Poster/Poster";
import { useEffect, useState } from "react";
import * as S from "./style";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { waitForAll } from "recoil";

const PopularMovies = [
  {
    id: 1,
    title: "스즈메의 문단속",
    movieImg:
      "https://i.namu.wiki/i/NjCKhPVnVnQX28o9MoSRlKxK_UGVN5ro8fDifuBnOqHXZVocFPbEJNLTHsEctpXST1XXAWgV1_pWHmtp6odKUg.webp",
    star: 4.5,
  },
  {
    id: 2,
    title: "스즈메의 문단속",
    movieImg:
      "https://i.namu.wiki/i/NjCKhPVnVnQX28o9MoSRlKxK_UGVN5ro8fDifuBnOqHXZVocFPbEJNLTHsEctpXST1XXAWgV1_pWHmtp6odKUg.webp",
    star: 4.5,
  },
  {
    id: 3,
    title: "스즈메의 문단속",
    movieImg:
      "https://i.namu.wiki/i/NjCKhPVnVnQX28o9MoSRlKxK_UGVN5ro8fDifuBnOqHXZVocFPbEJNLTHsEctpXST1XXAWgV1_pWHmtp6odKUg.webp",
    star: 4.5,
  },
  {
    id: 4,
    title: "스즈메의 문단속",
    movieImg:
      "https://i.namu.wiki/i/NjCKhPVnVnQX28o9MoSRlKxK_UGVN5ro8fDifuBnOqHXZVocFPbEJNLTHsEctpXST1XXAWgV1_pWHmtp6odKUg.webp",
    star: 4.5,
  },
  {
    id: 5,
    title: "스즈메의 문단속",
    movieImg:
      "https://i.namu.wiki/i/NjCKhPVnVnQX28o9MoSRlKxK_UGVN5ro8fDifuBnOqHXZVocFPbEJNLTHsEctpXST1XXAWgV1_pWHmtp6odKUg.webp",
    star: 4.5,
  },
  {
    id: 6,
    title: "슬램덩크",
    movieImg:
      "https://i.namu.wiki/i/ig1xhAN2DpixlDX25hmpfx2mlH9ktqIw4795n-JzQdFY3jxP6XXo0ktC9X2kLanV8gw467xeiyV3doD5WN4EyA.webp",
    star: 4,
  },
  {
    id: 7,
    title: "슬램덩크",
    movieImg:
      "https://i.namu.wiki/i/ig1xhAN2DpixlDX25hmpfx2mlH9ktqIw4795n-JzQdFY3jxP6XXo0ktC9X2kLanV8gw467xeiyV3doD5WN4EyA.webp",
    star: 4,
  },
  {
    id: 8,
    title: "슬램덩크",
    movieImg:
      "https://i.namu.wiki/i/ig1xhAN2DpixlDX25hmpfx2mlH9ktqIw4795n-JzQdFY3jxP6XXo0ktC9X2kLanV8gw467xeiyV3doD5WN4EyA.webp",
    star: 4,
  },
  {
    id: 9,
    title: "슬램덩크",
    movieImg:
      "https://i.namu.wiki/i/ig1xhAN2DpixlDX25hmpfx2mlH9ktqIw4795n-JzQdFY3jxP6XXo0ktC9X2kLanV8gw467xeiyV3doD5WN4EyA.webp",
    star: 4,
  },
  {
    id: 10,
    title: "슬램덩크",
    movieImg:
      "https://i.namu.wiki/i/ig1xhAN2DpixlDX25hmpfx2mlH9ktqIw4795n-JzQdFY3jxP6XXo0ktC9X2kLanV8gw467xeiyV3doD5WN4EyA.webp",
    star: 4,
  },
];
const RecommendedMovies = [
  {
    id: 11,
    title: "웅남이",
    movieImg: "https://www.jgynews.com/news/photo/202306/32649_34872_2839.jpg",
    star: 2.5,
  },
  {
    id: 12,
    title: "웅남이",
    movieImg: "https://www.jgynews.com/news/photo/202306/32649_34872_2839.jpg",
    star: 2.5,
  },
  {
    id: 13,
    title: "웅남이",
    movieImg: "https://www.jgynews.com/news/photo/202306/32649_34872_2839.jpg",
    star: 2.5,
  },
  {
    id: 14,
    title: "웅남이",
    movieImg: "https://www.jgynews.com/news/photo/202306/32649_34872_2839.jpg",
    star: 2.5,
  },
  {
    id: 15,
    title: "웅남이",
    movieImg: "https://www.jgynews.com/news/photo/202306/32649_34872_2839.jpg",
    star: 2.5,
  },
  {
    id: 16,
    title: "소울메이트",
    movieImg:
      "https://i.namu.wiki/i/Po2Dt-ubUrX-k0Yc43yk57k8gXk_LlLfTUPVrg5kxtmSvLsV71pTf36y9SFs7UQLo0WbW8Fsfi4Op2CO4dEzDQ.webp",
    star: 3,
  },
  {
    id: 17,
    title: "소울메이트",
    movieImg:
      "https://i.namu.wiki/i/Po2Dt-ubUrX-k0Yc43yk57k8gXk_LlLfTUPVrg5kxtmSvLsV71pTf36y9SFs7UQLo0WbW8Fsfi4Op2CO4dEzDQ.webp",
    star: 3,
  },
  {
    id: 18,
    title: "소울메이트",
    movieImg:
      "https://i.namu.wiki/i/Po2Dt-ubUrX-k0Yc43yk57k8gXk_LlLfTUPVrg5kxtmSvLsV71pTf36y9SFs7UQLo0WbW8Fsfi4Op2CO4dEzDQ.webp",
    star: 3,
  },
  {
    id: 19,
    title: "소울메이트",
    movieImg:
      "https://i.namu.wiki/i/Po2Dt-ubUrX-k0Yc43yk57k8gXk_LlLfTUPVrg5kxtmSvLsV71pTf36y9SFs7UQLo0WbW8Fsfi4Op2CO4dEzDQ.webp",
    star: 3,
  },
  {
    id: 20,
    title: "소울메이트",
    movieImg:
      "https://i.namu.wiki/i/Po2Dt-ubUrX-k0Yc43yk57k8gXk_LlLfTUPVrg5kxtmSvLsV71pTf36y9SFs7UQLo0WbW8Fsfi4Op2CO4dEzDQ.webp",
    star: 3,
  },
];
// 이름, 평점, 순위

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
    <Block.ColumnBox padding="0 0 100px 0" bgColor="black">
      <Block.RowBox justifyContent="center" margin="25px 0 75px 0">
        <S.PosterTitle
          onClick={handlePopularClick}
          color="white"
          margin="0 40px 0 0"
          pointer
          selected={showPopular}
        >
          무비타임 인기
        </S.PosterTitle>
        <S.PosterTitle
          onClick={handleRecommendedClick}
          color="white"
          margin="0 0 0 40px"
          pointer
          selected={!showPopular}
        >
          무비타임 추천
        </S.PosterTitle>
      </Block.RowBox>
      <Block.RowBox alignItems="center" justifyContent="center">
        <Block.RowBox alignItems="center" justifyContent="center">
          <BsArrowLeftCircle
            onClick={handlePrevClick}
            size={40}
            color="#F9F9F999"
            style={{ marginRight: "20px", cursor: "pointer", zIndex: "1000" }}
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
                ? PopularMovies.slice(
                    Math.abs(page % 2) * 5,
                    Math.abs(page % 2) * 5 + 5
                  ).map((movie, idx) => (
                    <Poster
                      key={movie.id}
                      poster={movie}
                      rank={idx + 1 + Math.abs(page % 2) * 5}
                    />
                  ))
                : RecommendedMovies.slice(
                    Math.abs(page % 2) * 5,
                    Math.abs(page % 2) * 5 + 5
                  ).map((movie, idx) => (
                    <Poster
                      key={movie.id}
                      poster={movie}
                      rank={idx + 1 + Math.abs(page % 2) * 5}
                    />
                  ))}
            </Block.RowBox>
          </AnimatePresence>
          <BsArrowRightCircle
            onClick={handleNextClick}
            size={40}
            color="#F9F9F999"
            style={{ marginLeft: "20px", cursor: "pointer", zIndex: "1000" }}
          />
        </Block.RowBox>
      </Block.RowBox>
    </Block.ColumnBox>
  );
}
export default Posters;
