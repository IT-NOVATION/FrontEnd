import { Block } from "@styles/UI";
import * as S from "./style";
import UserBox from "./UserBox/UserBox";
import { IReviewTimeUser } from "@interfaces/user";
import { MainPageApi } from "@apis/mainPageApi";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function ReviewTime() {
  const { data: users } = useQuery<IReviewTimeUser[]>({
    queryKey: ["mainPage", "user"],
    queryFn: MainPageApi.getTodayReviewer,
  });
  const [[page, direction], setPage] = useState([0, 0]);
  const [animate, setAnimate] = useState(false);
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
    <Block.ColumnBox margin="0 0 200px 0" alignItems="center">
      <Block.RowBox
        width="305px"
        justifyContent="center"
        margin="70px 0 0 0"
        position="relative"
      >
        <S.Ellipse src="/icons/MainPage/ellipse.svg" />
        <S.MovieTimeTitle>REVIEW TIME</S.MovieTimeTitle>
      </Block.RowBox>
      <Block.RowBox justifyContent="center">
        <S.Icon
          src="/icons/MainPage/left_arrow.svg"
          onClick={handlePrevClick}
        />
        {users && (
          <AnimatePresence custom={{ direction, animate }} mode="popLayout">
            <Block.RowBox
              width="auto"
              custom={{ direction, animate }}
              key={page}
              variants={S.variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "linear", duration: animate ? 0.5 : 0 }}
            >
              <UserBox user={users[Math.abs(page % 3)]} />
            </Block.RowBox>
          </AnimatePresence>
        )}
        <S.Icon
          src="/icons/MainPage/right_arrow.svg"
          onClick={handleNextClick}
        />
      </Block.RowBox>
    </Block.ColumnBox>
  );
}
export default ReviewTime;
