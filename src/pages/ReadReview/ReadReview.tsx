import * as S from "./style";
import { ReadReviewApi } from "@apis/readReviewApi";
import { IReadReview } from "@interfaces/review";
import { Block, Text } from "@styles/UI";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import useCalcStar from "@hooks/useCalcStar";
import theme from "@styles/theme";
import KeywordBox from "@components/WriteReview/Keywords/KeywordBox/KeywordBox";
import { KeywordsEnum } from "@components/WriteReview/Keywords/Keywords";
import DOMPurify from "dompurify";
import Like from "@components/ReadReview/Like/Like";
import UserInfo from "@components/ReadReview/UserInfo/UserInfo";
import Comments from "@components/ReadReview/Comments/Comments";

export default function ReadReview() {
  const { reviewId } = useParams();

  const { data: reviewData } = useQuery<IReadReview>({
    queryKey: ["review", reviewId],
    queryFn: async () => await ReadReviewApi.getReview(Number(reviewId)),
    suspense: true,
  });
  const { fullStar, halfStar } = useCalcStar(reviewData?.review.star as number);

  return (
    <Block.PageWrapper position="relative">
      <Block.PageLayout>
        {reviewData && (
          <>
            <Block.RowBox margin="150px 0 0 0" justifyContent="flex-start">
              <S.Title>{reviewData.review.reviewTitle}</S.Title>
            </Block.RowBox>
            <Block.RowBox margin="30px 0 0 0">
              <Text.Body4 color="darkGray" margin="0 25px 0 0">
                {reviewData.movie.title}
              </Text.Body4>
              <Text.Body4 color="darkGray">
                {reviewData.review.createdDate}
              </Text.Body4>
            </Block.RowBox>
            <Block.RowBox margin="59px 0 0 0">
              <Block.ColumnBox margin="0 26px 0 0" width="auto">
                <S.Poster src={reviewData.movie.movieImg} />
              </Block.ColumnBox>
              <Block.ColumnBox justifyContent="space-between">
                <Block.ColumnBox>
                  <S.MovieTitle>{reviewData.movie.title}</S.MovieTitle>
                  <S.MovieInfoText>
                    {reviewData.movie.movieReleaseDate.split("-")[0] +
                      " · " +
                      reviewData.movie.movieGenre}
                  </S.MovieInfoText>
                  <Block.RowBox margin="10px 0 0 0">
                    {fullStar.map(() => (
                      <FaStar size={30} color={theme.colors.main} />
                    ))}
                    {halfStar.map(() => (
                      <FaStarHalfAlt size={30} color={theme.colors.main} />
                    ))}
                  </Block.RowBox>
                </Block.ColumnBox>
                <S.KeywordGridBox>
                  {reviewData.review.hasGoodStory && (
                    <KeywordBox
                      text={KeywordsEnum[0]}
                      selected={true}
                      width="142px"
                      index={0}
                    />
                  )}
                  {reviewData.review.hasGoodProduction && (
                    <KeywordBox
                      text={KeywordsEnum[1]}
                      selected={true}
                      width="142px"
                      index={1}
                    />
                  )}
                  {reviewData.review.hasGoodScenario && (
                    <KeywordBox
                      text={KeywordsEnum[2]}
                      selected={true}
                      width="183px"
                      index={2}
                    />
                  )}
                  {reviewData.review.hasGoodDirecting && (
                    <KeywordBox
                      text={KeywordsEnum[3]}
                      selected={true}
                      width="142px"
                      index={3}
                    />
                  )}
                  {reviewData.review.hasGoodOst && (
                    <KeywordBox
                      text={KeywordsEnum[4]}
                      selected={true}
                      width="124px"
                      index={4}
                    />
                  )}
                  {reviewData.review.hasGoodVisual && (
                    <KeywordBox
                      text={KeywordsEnum[5]}
                      selected={true}
                      width="162px"
                      index={5}
                    />
                  )}
                  {reviewData.review.hasGoodActing && (
                    <KeywordBox
                      text={KeywordsEnum[6]}
                      selected={true}
                      width="189px"
                      index={6}
                    />
                  )}
                  {reviewData.review.hasGoodCharterCharming && (
                    <KeywordBox
                      text={KeywordsEnum[7]}
                      selected={true}
                      width="175px"
                      index={7}
                    />
                  )}
                  {reviewData.review.hasGoodDiction && (
                    <KeywordBox
                      text={KeywordsEnum[8]}
                      selected={true}
                      width="166px"
                      index={8}
                    />
                  )}
                </S.KeywordGridBox>
              </Block.ColumnBox>
            </Block.RowBox>
            <S.Bar />
            <S.ReviewMainText
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(reviewData.review.reviewMainText)
                ),
              }}
            />
            <Like
              reviewId={Number(reviewId)}
              reviewLikeNum={reviewData.review.reviewLikeNum}
              pushedReviewLike={reviewData.loginUser.pushedReviewLike}
            />
            <Comments reviewId={Number(reviewId)} />
            <UserInfo user={reviewData.user} />
          </>
        )}
      </Block.PageLayout>
    </Block.PageWrapper>
  );
}
