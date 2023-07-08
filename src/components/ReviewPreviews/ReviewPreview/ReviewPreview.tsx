import * as S from "./style";
import { IReviewPreview } from "@interfaces/review";
import { Block, Text } from "@styles/UI";
import theme from "@styles/theme";
import cutReviewText from "@utils/cutReviewText";
import { cutDateString } from "../../../utils/cutDateString";
function ReviewPreview({ review }: { review: IReviewPreview }) {
  return (
    <Block.RowBox relative margin="0 0 23px 0">
      <S.PosterContainer img={review.movie.movieImg} />
      <Block.ColumnBox>
        <Block.RowBox>
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
            <img src="/icons/star_purple.svg" />
            <Text.Body5 margin="0 0 0 3px">4.5</Text.Body5>
          </Block.RowBox>
        </Block.RowBox>
        <Block.RowBox margin="5px 0 0 0">
          <Text.Body4 color="lightBlack" lineHeight="1.3" margin="0 20px 0 0">
            {cutReviewText(review.reviewMainText)}
          </Text.Body4>
        </Block.RowBox>
        <Block.AbsoluteBox bottom="0">
          <Block.RowBox
            width="auto"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Text.Body5 color="lightBlack">
              {cutDateString(review.createdDate)}
            </Text.Body5>
            <Block.RowBox width="auto" margin="0 0 0 12px">
              <img src="/icons/heart_purple.svg" />
              <Text.Body5 color="lightBlack" margin="0 0 0 3px">
                {review.reviewLikeCount}
              </Text.Body5>
            </Block.RowBox>
            <Block.RowBox width="auto" margin="0 0 0 12px">
              <img src="/icons/message_purple.svg" />
              <Text.Body5 color="lightBlack" margin="0 0 0 3px">
                0
              </Text.Body5>
            </Block.RowBox>
          </Block.RowBox>
        </Block.AbsoluteBox>
      </Block.ColumnBox>
    </Block.RowBox>
  );
}

export default ReviewPreview;
