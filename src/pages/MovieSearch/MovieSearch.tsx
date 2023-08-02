import { Block, Text } from "@styles/UI";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieSearchContents from "../../components/MovieSearch/MovieSearchContents/MovieSearchContents";
import { Helmet } from "react-helmet";

export type MovieSearchContentsType = "Reviews" | "Star" | "ReleaseDate";

export default function MovieSearch() {
  const [contents, setContents] = useState<MovieSearchContentsType>("Reviews");
  const navigate = useNavigate();
  const handleGoToMovieTalk = () => {
    navigate("/movietalk");
  };
  const checkSelected = (selected: MovieSearchContentsType) => {
    if (contents === selected) return true;
    return false;
  };
  const handleLabelClick = (selected: MovieSearchContentsType) => {
    setContents(selected);
  };

  return (
    <>
      <Helmet>
        <title>무비서치</title>
      </Helmet>
      <Block.PageWrapper>
        <Block.PageLayout>
          <Block.RowBox margin="117px 0 0 0">
            <S.PageTitle>무비서치</S.PageTitle>
          </Block.RowBox>
          <Block.RowBox margin="20px 0 0 0 ">
            <Text.Title4 color="lightBlack" lineHeight="1.5">
              It’s Movie Time에서는 매주 영화 정보를 업데이트 하고있습니다.
              {"\n"}
              원하는 영화가 보이지 않는다면 상단의 검색 기능을 활용해보세요.
            </Text.Title4>
          </Block.RowBox>
          <S.GoWriteReviewBox>
            <Block.RowBox width="900px" alignItems="center">
              <Text.Title5 color="lightBlack" margin="0 59px 0 0 ">
                다른 유저들이 작성한 리뷰가 궁금하다면?
              </Text.Title5>
              <Block.RowBox
                onClick={handleGoToMovieTalk}
                pointer
                width="auto"
                alignItems="center"
              >
                <Text.Title5 color="main">무비토크 가기</Text.Title5>
                <S.RightChevronIcon src="/icons/MovieTalk/chevron_right_purple.svg" />
              </Block.RowBox>
            </Block.RowBox>
          </S.GoWriteReviewBox>
          <Block.RowBox margin="150px 0 0 0" width="auto" gap="60px">
            <S.ContentLabel
              onClick={() => handleLabelClick("Reviews")}
              selected={checkSelected("Reviews")}
            >
              리뷰 수
            </S.ContentLabel>
            <S.ContentLabel
              onClick={() => handleLabelClick("Star")}
              selected={checkSelected("Star")}
            >
              평점
            </S.ContentLabel>
            <S.ContentLabel
              onClick={() => handleLabelClick("ReleaseDate")}
              selected={checkSelected("ReleaseDate")}
            >
              개봉일자
            </S.ContentLabel>
          </Block.RowBox>
          <Block.ColumnBox margin="35px 0 0 0">
            <MovieSearchContents contents={contents} />
          </Block.ColumnBox>
        </Block.PageLayout>
      </Block.PageWrapper>
    </>
  );
}
