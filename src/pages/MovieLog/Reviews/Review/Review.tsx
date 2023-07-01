import useCutReviewText from "@hooks/useCutReviewText";
import * as S from "./style";
import { IReview } from "@interfaces/review";
import { Block, Text } from "@styles/UI";
import { useEffect } from "react";

function Review({ review }: { review: IReview }) {
  return (
    <Block.RowBox width="900px" margin="0 0 23px 0">
      <S.PosterContainer img={review.movie.movieImg} />
      <Block.ColumnBox>
        <Block.RowBox>
          <Text.Title5 margin="0 20px 0 0">{review.title}</Text.Title5>
          <Block.RowBox
            width="56px"
            height="27px"
            borderRadius="15px"
            border="1px solid gray"
            justifyContent="center"
            alignItems="center"
          >
            <Text.Body5>4.5</Text.Body5>
          </Block.RowBox>
        </Block.RowBox>
        <Block.RowBox margin="11px 0 0 0">
          <Text.Body4 margin="0 20px 0 0">
            {useCutReviewText(review.text)}
          </Text.Body4>
        </Block.RowBox>
      </Block.ColumnBox>
    </Block.RowBox>
  );
}

export default Review;
