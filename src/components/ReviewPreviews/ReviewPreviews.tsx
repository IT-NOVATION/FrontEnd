import { IReviewPreview } from "@interfaces/review";
import { Block } from "@styles/UI";
import ReviewPreview from "./ReviewPreview/ReviewPreview";

function ReviewPreviews({ reviews, width }: { reviews: IReviewPreview[]; width: string }) {
    return (
        <Block.ColumnBox width={width} margin="30px 0 34px 0">
            {reviews.map(v => (
                <ReviewPreview review={v} key={v.reviewId} />
            ))}
        </Block.ColumnBox>
    );
}
export default ReviewPreviews;
