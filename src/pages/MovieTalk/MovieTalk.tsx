import { Block, Text } from "@styles/UI";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MovieTalkContents from "@components/MovieTalk/MovieTalkContents/MovieTalkContents";
import { Helmet } from "react-helmet";

export type ContentsType = "BestReviews" | "PopularUsers" | "LatestReviews";

export default function MovieTalk() {
  const [contents, setContents] = useState<ContentsType>("BestReviews");
  const navigate = useNavigate();
  const handleGoWriteReview = () => {
    navigate("/movie-search");
  };
  const checkSelected = (selected: ContentsType) => {
    if (contents === selected) return true;
    return false;
  };
  const handleLabelClick = (selected: ContentsType) => {
    setContents(selected);
  };
  return (
    <>
      <Helmet>
        <title>무비토크</title>
        <meta name="keywords" content="무비토크" />
        <meta
          name="description"
          content="더 많은 이야기를 쓰고, 만나고, 발견해 보세요"
        />
      </Helmet>
      <Block.PageWrapper>
        <Block.PageLayout>
          <Block.RowBox margin="117px 0 0 0">
            <S.PageTitle>오늘의 무비토크</S.PageTitle>
          </Block.RowBox>
          <Block.RowBox margin="20px 0 0 0 ">
            <Text.Title4 lineHeight="1.4" color="lightBlack">
              잇츠무비타임의 무비스타를 소개합니다.{"\n"}
              무비토크는 다양한 취향을 가진 유저들을 만나고, 리뷰를 읽을 수 있는
              공간입니다.
            </Text.Title4>
          </Block.RowBox>
          <S.GoWriteReviewBox>
            <Block.RowBox width="900px" alignItems="center">
              <Text.Title5 color="lightBlack" margin="0 59px 0 0 ">
                오늘의 무비스타가 되고싶다면, 재밌게 봤던 영화를 찾아 리뷰를
                작성해보세요
              </Text.Title5>
              <Block.RowBox
                onClick={handleGoWriteReview}
                pointer
                width="auto"
                alignItems="center"
              >
                <Text.Title5 color="main">무비서치 가기</Text.Title5>
                <S.RightChevronIcon src="/icons/MovieTalk/chevron_right_purple.svg" />
              </Block.RowBox>
            </Block.RowBox>
          </S.GoWriteReviewBox>
          <Block.RowBox
            margin="180px 0 0 0"
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
              onClick={() => handleLabelClick("LatestReviews")}
              selected={checkSelected("LatestReviews")}
            >
              최신 리뷰
            </S.ContentLabel>
            <S.ContentLabel
              onClick={() => handleLabelClick("PopularUsers")}
              selected={checkSelected("PopularUsers")}
            >
              인기 유저
            </S.ContentLabel>
          </Block.RowBox>
          <Block.ColumnBox margin="25px 0 0 0">
            <MovieTalkContents contents={contents} />
          </Block.ColumnBox>
        </Block.PageLayout>
      </Block.PageWrapper>
    </>
  );
}
