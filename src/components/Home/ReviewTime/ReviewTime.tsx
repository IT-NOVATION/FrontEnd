import { Block } from "@styles/UI";
import * as S from "./style";
import UserBox from "./UserBox/UserBox";
import { IReviewTimeUser } from "@interfaces/user";
import { MainPageApi } from "@apis/mainPageApi";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function ReviewTime() {
  const { data: users } = useQuery<IReviewTimeUser[]>({
    queryKey: ["mainPage", "user"],
    queryFn: MainPageApi.getTodayReviewer,
  });
  const [idx, setIdx] = useState(0);
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
        <S.Icon src="/icons/MainPage/left_arrow.svg" />
        {users && <UserBox user={users[idx]} />}
        <S.Icon src="/icons/MainPage/right_arrow.svg" />
      </Block.RowBox>
    </Block.ColumnBox>
  );
}
export default ReviewTime;
