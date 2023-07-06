import { Block, Text } from "@styles/UI";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BestReviews from "@components/MovieTalk/BestReviews/BestReviews";
import TopFollowers from "@components/MovieTalk/TopFollowers/TopFollowers";
import Updates from "@components/MovieTalk/Updates/Updates";

type ContentsType = "BestReviews" | "TopFollowers" | "Updates";

export default function MovieTalk() {
  const [contents, setContents] = useState<ContentsType>("BestReviews");
  const navigate = useNavigate();
  const handleGoWriteReview = () => {
    // 영화 조회 페이지로 이동...
  };
  const checkSelected = (selected: ContentsType) => {
    if (contents === selected) return true;
    return false;
  };
  const handleLabelClick = (selected: ContentsType) => {
    setContents(selected);
  };
  return (
    <Block.PageWrapper>
      <Block.PageLayout>
        <Block.RowBox margin="57px 0 0 0">
          <S.PageTitle>오늘의 무비토크</S.PageTitle>
        </Block.RowBox>
        <Block.RowBox margin="22px 0 0 0 ">
          <Text.Title4 color="lightBlack">
            매일 좋은 리뷰를 쓰는 잇츠무비타임의 베스트 유저들을 소개합니다.
          </Text.Title4>
        </Block.RowBox>
        <S.GoWriteReviewBox>
          <Block.RowBox width="900px" alignItems="center">
            <Text.Title5 color="lightBlack" margin="0 59px 0 0 ">
              오늘의 무비스타가 되고싶다면, 자신만의 무비로그를 완성하러
              가보세요
            </Text.Title5>
            <Block.RowBox
              onClick={handleGoWriteReview}
              pointer
              width="auto"
              alignItems="center"
            >
              <Text.Title5 color="main">리뷰쓰러 가기</Text.Title5>
              <S.RightChevronIcon src="/icons/MovieTalk/chevron_right_purple.svg" />
            </Block.RowBox>
          </Block.RowBox>
        </S.GoWriteReviewBox>
        <Block.RowBox
          margin="210px 0 0 0"
          width="490px"
          justifyContent="space-between"
        >
          <S.ContentLabel
            onClick={() => handleLabelClick("BestReviews")}
            selected={checkSelected("BestReviews")}
          >
            베스트 리뷰
          </S.ContentLabel>
          <S.ContentLabel
            onClick={() => handleLabelClick("TopFollowers")}
            selected={checkSelected("TopFollowers")}
          >
            팔로워 인기
          </S.ContentLabel>
          <S.ContentLabel
            onClick={() => handleLabelClick("Updates")}
            selected={checkSelected("Updates")}
          >
            NEW 업데이트
          </S.ContentLabel>
        </Block.RowBox>
        <Block.ColumnBox margin="25px 0 0 0">
          {contents === "BestReviews" ? (
            <BestReviews />
          ) : contents === "TopFollowers" ? (
            <TopFollowers />
          ) : (
            <Updates />
          )}
        </Block.ColumnBox>
      </Block.PageLayout>
    </Block.PageWrapper>
  );
}
