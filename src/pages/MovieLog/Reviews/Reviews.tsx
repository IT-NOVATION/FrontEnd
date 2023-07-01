import { IReview } from "@interfaces/review";
import Review from "./Review/Review";
import { Block } from "@styles/UI";

function Reviews({ reviews }: { reviews: IReview[] }) {
  return (
    <Block.ColumnBox margin="30px 0 34px 0">
      {reviews.map((v) => (
        <Review review={v} key={v.reviewId} />
      ))}
    </Block.ColumnBox>
  );
}
export default Reviews;
