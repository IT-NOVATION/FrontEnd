import { IReview } from "@interfaces/review";
import Review from "./Review/Review";
import { Block } from "@styles/UI";

function Reviews({ reviews }: { reviews: IReview[] }) {
  return (
    <Block.ColumnBox margin="30px 0 34px 0">
      <Review review={reviews[0]} />
      <Review review={reviews[1]} />
    </Block.ColumnBox>
  );
}
export default Reviews;
