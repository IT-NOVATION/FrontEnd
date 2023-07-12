import * as S from "./style";
import { Block, Button, Poster, Text } from "@styles/UI";
import ReviewEditor from "@components/WriteReview/ReviewEditor/ReviewEditor";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "@components/WriteReview/StarRating/StarRating";
import Keywords from "@components/WriteReview/Keywords/Keywords";
import ViewDate from "@components/WriteReview/ViewDate/ViewDate";
import { useMutation, useQuery } from "@tanstack/react-query";
import { WriteReviewApi } from "@apis/writeReviewApi";
import { IWriteReviewMovie } from "@interfaces/movies";
import { convertDateToString } from "@utils/convertDateToString";

function WriteReview() {
  const { movieId } = useParams();
  const { data: movieInfo } = useQuery<IWriteReviewMovie>({
    queryKey: ["movie"],
    queryFn: async () => await WriteReviewApi.movieInfo(Number(movieId)),
  });
  const { mutateAsync: mutateReview } = useMutation(() => {
    return WriteReviewApi.mutateReview({
      movieId: Number(movieId),
      star: score,
      reviewTitle: title,
      reviewMainText: content,
      hasGoodStory: keywords[0],
      hasGoodProduction: keywords[1],
      hasGoodScenario: keywords[2],
      hasGoodDirecting: keywords[3],
      hasGoodOst: keywords[4],
      hasGoodVisual: keywords[5],
      hasGoodActing: keywords[6],
      hasGoodCharterCharming: keywords[7],
      hasGoodDiction: keywords[8],
      hasCheckDate: keywords[9],
      hasSpoiler: spoilerChecked,
      watchDate: convertDateToString(viewDate),
    });
  });
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); //제목
  const [score, setScore] = useState(0); //별점
  const [content, setContent] = useState(""); //내용
  const [keywords, setKeywords] = useState(Array(9).fill(false)); //키워드
  const [viewDate, setViewDate] = useState<number[]>(Array(3).fill(0));
  const [spoilerChecked, setSpoilerChecked] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);
  const toggleSpoilerChecked = () => setSpoilerChecked((prev) => !prev);

  const handleSubmit = async () => {
    //서버에 제출
    try {
      if (!score) throw new Error("별점을 매겨주세요.");
      if (!content.length) throw new Error("내용을 입력해주세요.");
      await mutateReview();
      navigate(-1);
    } catch (error) {
      alert(String(error).split(":")[1]);
      console.log(error);
    }
  };

  return (
    <>
      {/* 헤더 */}
      <Block.ColumnBox
        width="100vw"
        height="285px"
        bgColor="darkWhite"
        alignItems="center"
        padding="60px 0 0 0"
      >
        <Block.ColumnBox width="887px" margin="70px 0 0 0">
          <Text.Title1>
            <S.TitleInput
              onChange={handleTitleChange}
              type="text"
              placeholder="리뷰 제목"
            />
          </Text.Title1>
          <Block.RowBox margin="22px 0 0 0">
            <Text.Body3 color="darkGray" margin="0 27px 0 0 ">
              {movieInfo?.title}
            </Text.Body3>
            <Text.Body3 color="darkGray">2023.05.16</Text.Body3>
          </Block.RowBox>
        </Block.ColumnBox>
      </Block.ColumnBox>

      <Block.PageWrapper>
        <Block.PageLayout>
          <Block.RowBox width="887px" height="233px" margin="40px 25px 50px 0">
            <Poster.Poster src={movieInfo?.movieImg} size="sm" />
            <Block.ColumnBox margin="0 0 0 25px">
              <Block.ColumnBox>
                <Text.Body4 margin="0 0 3px 0">별점</Text.Body4>
                <StarRating setParentScore={setScore} />
                <Block.Bar width="702px" bgColor="gray" margin="11px 0 0 0" />
                <Keywords selected={keywords} setSelected={setKeywords} />
                <Block.Bar width="702px" bgColor="gray" margin="13px 0 0 0" />
              </Block.ColumnBox>
            </Block.ColumnBox>
          </Block.RowBox>

          {/* 에디터 */}
          <ReviewEditor setContent={setContent} />

          {/* 관람일, 스포일러 */}
          <Block.RowBox
            margin="0 0 24px 0"
            justifyContent="flex-end"
            alignItems="center"
          >
            <ViewDate setViewDate={setViewDate} />
            <input
              id="spoiler"
              type="checkbox"
              checked={spoilerChecked}
              onChange={toggleSpoilerChecked}
            />
            <label htmlFor="spoiler">
              <Text.Body4>스포일러 포함</Text.Body4>
            </label>
          </Block.RowBox>

          {/* 저장/취소 버튼 */}
          <Block.RowBox margin="0 0 42px 0">
            <Button.Button
              width="306px"
              height="41px"
              margin="0 7px 0 0 "
              color="black"
              bgColor="white"
              border=".5px solid #5F5F5F"
              borderRadius="4px"
            >
              <Text.Body4>취소</Text.Body4>
            </Button.Button>
            <Button.Button
              width="594px"
              height="41px"
              color="white"
              bgColor="main"
              borderRadius="4px"
              onClick={handleSubmit}
            >
              <Text.Body4>저장</Text.Body4>
            </Button.Button>
          </Block.RowBox>
        </Block.PageLayout>
      </Block.PageWrapper>
    </>
  );
}

export default WriteReview;
