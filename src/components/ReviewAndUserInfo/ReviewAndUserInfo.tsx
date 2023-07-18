import { IReviewAndUserInfo } from "@interfaces/singleMovie";
import { Block, Text } from "@styles/UI";

type Props = {
    reviewAndInfo: IReviewAndUserInfo;
};

export function ReviewAndUserInfo({ reviewAndInfo }: Props) {
    return (
        <>
            <Block.RowBox padding="19px">
                <Block.ColumnBox width="120px" height="173px" alignItems="center" padding="0 28px 0 11px">
                    <Block.RowBox width="85px" height="85px" borderRadius="65px" border="1px solid red">
                        <img src={reviewAndInfo.user.userProfileImg} alt="프로필" />
                    </Block.RowBox>
                    <Block.RowBox border="1px solid red" justifyContent="center" margin="5px 0 0 0">
                        <Text.Body2 color="black">{reviewAndInfo.user.nickname}</Text.Body2>
                    </Block.RowBox>
                </Block.ColumnBox>

                <Block.ColumnBox padding="0 0 23px 0" justifyContent="space-between">
                    <Block.RowBox justifyContent="space-between" alignItems="center">
                        <Block.RowBox width="500px">
                            <Text.Title5 color="black">{reviewAndInfo.review.reviewTitle}</Text.Title5>
                        </Block.RowBox>
                        <Block.RowBox
                            width="56px"
                            height="27px"
                            border="0.7px solid #CCC"
                            borderRadius="16px"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <img src="/icons/MovieLog/purple_star.svg" width={16} alt="별점" />
                            <Block.RowBox width="20px" padding="0 0 0 3px">
                                {reviewAndInfo.review.starScore}
                            </Block.RowBox>
                        </Block.RowBox>
                    </Block.RowBox>
                    <Block.RowBox width="100%" height="56px" border="1px solid red">
                        <Text.Body4>{reviewAndInfo.review.reviewMainText}</Text.Body4>
                    </Block.RowBox>

                    <Block.RowBox>
                        <Block.RowBox width="130px">
                            <Text.Body4 color="black">{reviewAndInfo.review.createdDate}</Text.Body4>
                        </Block.RowBox>
                        <Block.RowBox width="90px">
                            <img src="/icons/purple_heart.svg" alt="하트" />
                            {reviewAndInfo.review.reviewLikeCount}
                        </Block.RowBox>
                        <Block.RowBox>
                            <img src="/icons/purple_comment.svg" alt="댓글" />
                            댓글
                        </Block.RowBox>
                    </Block.RowBox>
                </Block.ColumnBox>
            </Block.RowBox>
            <Block.Bar width="100%" height="1px" bgColor="gray" />
        </>
    );
}
