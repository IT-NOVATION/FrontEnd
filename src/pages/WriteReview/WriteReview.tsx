import * as S from "./style";
import { Block, Button, Poster, Text } from "@styles/UI";
import ReviewEditor from "@components/WriteReview/ReviewEditor/ReviewEditor";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "@components/WriteReview/StarRating/StarRating";
import Keywords from "@components/WriteReview/Keywords/Keywords";
import ViewDate from "@components/WriteReview/ViewDate/ViewDate";
import { useMutation, useQuery } from "@tanstack/react-query";
import { WriteReviewApi } from "@apis/writeReviewApi";
import { IWriteReviewMovie } from "@interfaces/movies";
import { createContext } from "react";
import { IMutateReview } from "@interfaces/review";
import CancelModal from "@components/WriteReview/CancelModal/CancelModal";
import SaveModal from "@components/WriteReview/SaveModal/SaveModal";

export const ReviewDataContext = createContext<{
  reviewData: IMutateReview;
  setReviewData: React.Dispatch<React.SetStateAction<IMutateReview>>;
} | null>(null);

function WriteReview() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { data: movieInfo, isError } = useQuery<IWriteReviewMovie>({
    queryKey: ["movie"],
    queryFn: async () => await WriteReviewApi.movieInfo(Number(movieId)),
    retry: false,
  });
  const handleError = () => {
    alert("이미 작성한 리뷰입니다");
    navigate(-1);
  };
  const { mutateAsync: mutateReview } = useMutation(() => {
    return WriteReviewApi.mutateReview(reviewData);
  });

  isError && handleError();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setReviewData({ ...reviewData, reviewTitle: e.currentTarget.value });
  const toggleSpoilerChecked = () =>
    setReviewData((prev) => {
      return { ...prev, hasSpoiler: !prev.hasSpoiler };
    });

  const [isSaveModalOn, setIsSaveModalOn] = useState<boolean | string>(false);

  const handleSubmit = async () => {
    try {
      if (!reviewData.reviewTitle) throw new Error("제목을 정해주세요.");
      if (!reviewData.star) throw new Error("별점을 매겨주세요.");
      if (!reviewData.reviewMainText.length)
        throw new Error("내용을 입력해주세요.");
      const reviewId = await mutateReview();
      setIsSaveModalOn(reviewId);
    } catch (error) {
      alert(String(error).split(":")[1]);
      console.log(error);
    }
  };
  const [reviewData, setReviewData] = useState<IMutateReview>({
    movieId: Number(movieId),
    star: 0,
    reviewTitle: "",
    reviewMainText: "",
    hasGoodStory: false,
    hasGoodProduction: false,
    hasGoodScenario: false,
    hasGoodDirecting: false,
    hasGoodOst: false,
    hasGoodVisual: false,
    hasGoodActing: false,
    hasGoodCharterCharming: false,
    hasGoodDiction: false,
    hasSpoiler: false,
    hasCheckDate: false,
    watchDate: "",
  });
  const [isPosterLoading, setIsPosterLoading] = useState(true);
  const handlePosterLoaded = () => setIsPosterLoading(false);

  const [isCancelModalOn, setIsCancelModalOn] = useState(false);
  const handleCancelClick = () => {
    setIsCancelModalOn(true);
  };
  return (
    <>
      <ReviewDataContext.Provider value={{ reviewData, setReviewData }}>
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
            <Block.RowBox
              width="887px"
              height="233px"
              margin="40px 25px 50px 0"
            >
              {isPosterLoading && <S.PosterOutline />}
              <S.Poster
                src={movieInfo?.movieImg}
                onLoad={handlePosterLoaded}
                isPosterLoading={isPosterLoading}
              />
              <Block.ColumnBox margin="0 0 0 25px">
                <Block.ColumnBox>
                  <Text.Body4 margin="0 0 3px 0">별점</Text.Body4>

                  <StarRating />

                  <Block.Bar width="702px" bgColor="gray" margin="11px 0 0 0" />
                  <Keywords />
                  <Block.Bar width="702px" bgColor="gray" margin="13px 0 0 0" />
                </Block.ColumnBox>
              </Block.ColumnBox>
            </Block.RowBox>

            {/* 에디터 */}
            <ReviewEditor />

            {/* 관람일, 스포일러 */}
            <Block.RowBox
              margin="0 0 24px 0"
              justifyContent="flex-end"
              alignItems="center"
            >
              <ViewDate />
              <input
                id="spoiler"
                type="checkbox"
                checked={reviewData.hasSpoiler}
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
                onClick={handleCancelClick}
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
      </ReviewDataContext.Provider>
      {isCancelModalOn && (
        <CancelModal setIsCancelModalOn={setIsCancelModalOn} />
      )}
      {isSaveModalOn && <SaveModal reviewId={isSaveModalOn} />}
    </>
  );
}

export default WriteReview;
