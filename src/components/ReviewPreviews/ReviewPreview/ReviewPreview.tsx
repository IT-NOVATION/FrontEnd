import * as S from "./style";
import { IReviewPreview } from "@interfaces/review";
import { Block, Text } from "@styles/UI";
import theme from "@styles/theme";
import cutReviewText from "@utils/cutReviewText";
import { useLocation, useNavigate } from "react-router-dom";
import { IUser } from "@interfaces/singleMovie";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";

type Props = {
  review: IReviewPreview;
  user?: IUser;
  isLast: boolean;
};

function ReviewPreview({ review, user, isLast }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleTitleClick = (reviewId: number) => {
    navigate(`/review/${reviewId}`);
  };

  const singleMovie = pathname.includes("/single");

  return (
    <>
      <S.Wrapper isLast={isLast}>
        {singleMovie ? (
          <S.ProfileContainer>
            {user?.userProfileImg === "" ? (
              <ProfileImg size="65px" />
            ) : (
              <Block.RowBox justifyContent="center">
                <S.EachProfileImg src={user?.userProfileImg} alt="프로필" />
              </Block.RowBox>
            )}

            <Block.RowBox
              width="100%"
              justifyContent="center"
              margin="10px 0 0 0"
            >
              <Text.Body1>{user?.nickname}</Text.Body1>
            </Block.RowBox>
          </S.ProfileContainer>
        ) : (
          <S.PosterContainer img={review?.movie?.movieImg as string} />
        )}

        <Block.ColumnBox
          onClick={() => handleTitleClick(review.reviewId)}
          pointer
        >
          <Block.RowBox alignItems="center">
            <Text.Title5 color="lightBlack" margin="0 20px 0 0">
              {review.reviewTitle}
            </Text.Title5>
            <Block.RowBox
              width="56px"
              height="27px"
              borderRadius="15px"
              border={`1px solid ${theme.colors.gray}`}
              justifyContent="center"
              alignItems="center"
            >
              <img src="/icons/star_purple.svg" alt="별점" />
              <Text.Body5 margin="0 0 0 3px">
                {review.starScore
                  ? review.starScore.toFixed(1)
                  : review.star?.toFixed(1)}
              </Text.Body5>
            </Block.RowBox>
          </Block.RowBox>
          <Block.RowBox position="relative" margin="5px 0 0 0">
            <S.ReviewMainText hasSpoiler={review.hasSpoiler}>
              {cutReviewText(review.reviewMainText)}
            </S.ReviewMainText>
            {review.hasSpoiler && (
              <S.SpoilerText>
                <Text.Body4>스포일러 포함</Text.Body4>
              </S.SpoilerText>
            )}
          </Block.RowBox>
          <Block.AbsoluteBox bottom="0">
            <Block.RowBox
              width="auto"
              justifyContent="flex-start"
              alignItems="center"
              margin="0 0 24px 0"
            >
              <Text.Body5 color="lightBlack">
                {review.createdDate.replaceAll("-", ".")}
              </Text.Body5>
              <Block.RowBox width="auto" margin="0 0 0 12px">
                <img src="/icons/heart_purple.svg" alt="하트" />
                <Text.Body5 color="lightBlack" margin="0 0 0 3px">
                  {review.reviewLikeCount}
                </Text.Body5>
              </Block.RowBox>
              <Block.RowBox width="auto" margin="0 0 0 12px">
                <img src="/icons/message_purple.svg" alt="댓글" />
                <Text.Body5 color="lightBlack" margin="0 0 0 3px">
                  {review.commentCount}
                </Text.Body5>
              </Block.RowBox>
            </Block.RowBox>
          </Block.AbsoluteBox>
        </Block.ColumnBox>
      </S.Wrapper>
    </>
  );
}

export default ReviewPreview;
