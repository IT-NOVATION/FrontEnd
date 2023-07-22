import { IMovieLogReviewPreview, IReviewPreview } from "@interfaces/review";
import { Block } from "@styles/UI";
import ReviewPreview from "./ReviewPreview/ReviewPreview";

function ReviewPreviews({
  reviews,
  width,
}: {
  reviews: IReviewPreview[] | IMovieLogReviewPreview[];
  width: string;
}) {
  return (
    <Block.ColumnBox width={width} margin="0 0 34px 0">
      {reviews.map((v, i) => (
        <ReviewPreview
          review={v}
          key={v.reviewId}
          isLast={i === reviews.length - 1}
        />
      ))}
    </Block.ColumnBox>
  );
}
export default ReviewPreviews;
