import * as S from "./style";
import { IReviewPreview } from "@interfaces/review";
import { Block, Text } from "@styles/UI";
import theme from "@styles/theme";
import cutReviewText from "@utils/cutReviewText";
import { cutDateString } from "../../../utils/cutDateString";
import { useLocation, useNavigate } from "react-router-dom";
import { IReviewAndUserInfo, IUser } from "@interfaces/singleMovie";

type Props = {
    review: IReviewPreview;
    user?: IUser;
};

function ReviewPreview({ review, user }: Props) {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleTitleClick = (reviewId: number) => {
        navigate(`/review/${reviewId}`);
    };

    const singleMovie = pathname.includes("/single");

    return (
        <>
            <Block.RowBox relative margin="0 0 23px 0">
                {singleMovie ? <>리뷰</> : <S.PosterContainer img={review?.movie?.movieImg as string} />}

                <Block.ColumnBox onClick={() => handleTitleClick(review.reviewId)} pointer>
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
                        <Block.RowBox width="auto" justifyContent="flex-start" alignItems="center">
                            <Text.Body5 color="lightBlack">{cutDateString(review.createdDate)}</Text.Body5>
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
        </>
    );
}

export default ReviewPreview;
