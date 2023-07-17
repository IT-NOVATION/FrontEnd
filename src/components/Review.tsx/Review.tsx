import { SingleMovieApi } from "@apis/singleMovieApi";
import { IReviewAndUserInfoList } from "@interfaces/singleMovie";
import { Block, Text } from "@styles/UI";
import { useQuery } from "@tanstack/react-query";

export function Review() {
    const { data: reviewAndUserInfoList } = useQuery<IReviewAndUserInfoList>({
        queryKey: ["reviewAndUserInfoList"],
        queryFn: SingleMovieApi.getSinglelMovie,
    });
    return (
        <>
            {reviewAndUserInfoList && (
                <>
                    <Block.RowBox padding="19px">
                        <Block.ColumnBox width="120px" height="173px" alignItems="center" padding="0 28px 0 11px">
                            <Block.RowBox width="85px" height="85px" borderRadius="65px" border="1px solid red">
                                <img src={reviewAndUserInfoList.userProfileImg} alt="프로필" />
                            </Block.RowBox>
                            <Block.RowBox border="1px solid red" justifyContent="center" margin="5px 0 0 0">
                                <Text.Body2 color="black">{reviewAndUserInfoList.nickname}닉네임</Text.Body2>
                            </Block.RowBox>
                        </Block.ColumnBox>

                        <Block.ColumnBox padding="0 0 23px 0" justifyContent="space-between">
                            <Block.RowBox justifyContent="space-between" alignItems="center">
                                <Block.RowBox width="500px">
                                    <Text.Title5 color="black">{reviewAndUserInfoList.reviewTitle}제목</Text.Title5>
                                </Block.RowBox>
                                <Block.RowBox
                                    width="56px"
                                    height="27px"
                                    border="0.7px solid #CCC"
                                    borderRadius="16px"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <img src="/icons/MovieLog/purple_star.svg" width={15} alt="별점" /> 4.5
                                    {reviewAndUserInfoList.starScore}
                                </Block.RowBox>
                            </Block.RowBox>
                            <Block.RowBox width="100%" height="56px" border="1px solid red">
                                <Text.Body4>{reviewAndUserInfoList.reviewMainText}본문본문</Text.Body4>
                            </Block.RowBox>

                            <Block.RowBox>
                                <Block.RowBox width="130px">
                                    <Text.Body4 color="black">2023.03.16</Text.Body4>
                                </Block.RowBox>
                                <Block.RowBox width="90px">
                                    <img src="/icons/purple_heart.svg" alt="하트" />
                                    302
                                    {reviewAndUserInfoList.reviewLikeCount}
                                </Block.RowBox>
                                <Block.RowBox>
                                    <img src="/icons/purple_comment.svg" alt="댓글" />
                                    15
                                </Block.RowBox>
                            </Block.RowBox>
                        </Block.ColumnBox>
                    </Block.RowBox>
                    <Block.Bar width="100%" height="1px" bgColor="gray" />
                </>
            )}
        </>
    );
}
