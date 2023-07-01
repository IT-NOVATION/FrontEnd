import useCutReviewText from "@hooks/useCutReviewText";
import * as S from "./style";
import { IReview } from "@interfaces/review";
import { Block, Text } from "@styles/UI";
import theme from "@styles/theme";
function Review({ review }: { review: IReview }) {
  return (
    <Block.RowBox relative width="900px" margin="0 0 23px 0">
      <S.PosterContainer img={review.movie.movieImg} />
      <Block.ColumnBox>
        <Block.RowBox>
          <Text.Title5 margin="0 20px 0 0">{review.title}</Text.Title5>
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
        <Block.RowBox margin="10px 0 0 0">
          <Text.Body4 lineHeight="1.3" margin="0 20px 0 0">
            {useCutReviewText(review.text)}
          </Text.Body4>
        </Block.RowBox>
        <Block.AbsoluteBox bottom="0">
          <Block.RowBox justifyContent="flex-start" alignItems="center">
            <Text.Body5>{review.date}</Text.Body5>
            <Block.RowBox width="auto" margin="0 0 0 12px">
              <img src="/icons/heart_purple.svg" />
              <Text.Body5 margin="0 0 0 3px">{review.likes}</Text.Body5>
            </Block.RowBox>
            <Block.RowBox width="auto" margin="0 0 0 12px">
              <img src="/icons/message_purple.svg" />
              <Text.Body5 margin="0 0 0 3px">{review.comments}</Text.Body5>
            </Block.RowBox>
          </Block.RowBox>
        </Block.AbsoluteBox>
      </Block.ColumnBox>
    </Block.RowBox>
  );
}

export default Review;
