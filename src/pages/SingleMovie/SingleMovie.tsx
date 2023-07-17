import { Block, Text } from "@styles/UI";
import * as S from "./style";
import { IReviewAndUserInfoList, IReviewCount, ISingleMovie, ITop3HasFeature } from "@interfaces/singleMovie";
import { useQuery } from "@tanstack/react-query";
import { SingleMovieApi } from "@apis/singleMovieApi";
import useHovered from "@hooks/useHovered";
import StarRating from "@components/WriteReview/StarRating/StarRating";
import { useState } from "react";
import { Review } from "@components/Review.tsx/Review";

// type Props = {
//     reviewList: IReviewAndUserInfoList[];
// };

export default function SingleMovie() {
    const [score, setScore] = useState<number>(0);

    const { data: singleMovie } = useQuery<ISingleMovie, IReviewAndUserInfoList>({
        queryKey: ["movie", "reviewAndUserInfoList"],
        queryFn: SingleMovieApi.getSinglelMovie,
    });

    const { data: reviewCount } = useQuery<IReviewCount>({
        queryKey: ["reviewCount"],
        queryFn: SingleMovieApi.getReviewCount,
    });

    const { data: top3HasFeature } = useQuery<ITop3HasFeature>({
        queryKey: ["top3HasFeature"],
        queryFn: SingleMovieApi.getTop3HasFeature,
    });

    const infoList = ["장르", "개요", "개봉", "감독", "출연", "줄거리"];

    const { isHovered: isDetailHovered, handleHover: handleDetailHover, handleLeave: handleDetailLeave } = useHovered();
    const { isHovered: isBtnHovered, handleHover: handleBtnHover, handleLeave: handleBtnLeave } = useHovered();

    return (
        // 만약 /singleMovie/:movieId 에서
        <Block.ColumnBox width="100vw" alignItems="center">
            {/* 영화 정보 */}

            {singleMovie && (
                <>
                    <Block.RowBox width="100%" padding="85px 0 0 0 " bgColor="gray" justifyContent="center">
                        <Block.RowBox width="882px" padding="30px 0">
                            <Block.ColumnBox width="272px" height="389px">
                                <img src={singleMovie.movieImg} alt="포스터" width="272px" height="389px" />
                            </Block.ColumnBox>

                            <Block.ColumnBox padding="0 0 0 30px" justifyContent="space-between">
                                <Block.ColumnBox width="100%" height="90px" justifyContent="space-between">
                                    <Text.Title1 color="white">{singleMovie.title}</Text.Title1>
                                    <Block.RowBox width="191px" justifyContent="space-between">
                                        <Block.RowBox
                                            width="91px"
                                            height="29px"
                                            border="1px solid #fff"
                                            borderRadius="5px"
                                            padding="0 16px"
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <img src="/icons/empty_heart.svg" alt="하트" />
                                            <Text.Body3 color="white"> 1.9K</Text.Body3>
                                        </Block.RowBox>
                                        <Block.RowBox
                                            width="91px"
                                            height="29px"
                                            border="1px solid #fff"
                                            borderRadius="5px"
                                            padding="0 16px"
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <img src="/icons/empty_star.svg" alt="별" />
                                            <Text.Body3 color="white"> {singleMovie.avgStarScore}점</Text.Body3>
                                        </Block.RowBox>
                                    </Block.RowBox>
                                </Block.ColumnBox>

                                <Block.ColumnBox
                                    width="100%"
                                    height="200px"
                                    justifyContent="space-between"
                                    onMouseEnter={handleDetailHover}
                                    onMouseLeave={handleDetailLeave}
                                >
                                    <Block.RowBox width="100%" height="133px" relative>
                                        <Block.ColumnBox
                                            width="1px"
                                            height="100%"
                                            bgColor="white"
                                            margin="0 13px 0 0"
                                        />
                                        <Block.ColumnBox width="39px" justifyContent="space-between">
                                            {infoList.map((info, index) => (
                                                <Text.Body6 key={index} color="white">
                                                    {info}
                                                </Text.Body6>
                                            ))}
                                        </Block.ColumnBox>
                                        <Block.ColumnBox
                                            width="100%"
                                            height="107px"
                                            padding="0 0 0 13px"
                                            justifyContent="space-between"
                                        >
                                            <Text.Body6 color="white">{singleMovie.movieGenre}</Text.Body6>
                                            <Text.Body6 color="white">개요</Text.Body6>
                                            <Text.Body6 color="white"> {singleMovie.movieReleasedate}</Text.Body6>
                                            <Text.Body6 color="white">{singleMovie.movieDirector}</Text.Body6>
                                            <Text.Body6 color="white"> {singleMovie.movieActor}</Text.Body6>
                                        </Block.ColumnBox>
                                        {isDetailHovered && (
                                            <Block.AbsoluteBox
                                                width="363px"
                                                height="136px"
                                                borderRadius="20px"
                                                zIndex="999999999"
                                                left="50%"
                                                border="10px solid black"
                                            >
                                                {singleMovie.movieDetail}
                                            </Block.AbsoluteBox>
                                        )}
                                    </Block.RowBox>

                                    <Block.RowBox width="100%" height="30px" alignItems="center">
                                        <Text.Body3 color="gray">
                                            # {singleMovie.top3HasFeature?.top1feature}
                                        </Text.Body3>
                                        <Text.Body3 color="gray">
                                            # {singleMovie.top3HasFeature?.top2feature}
                                        </Text.Body3>
                                        <Text.Body3 color="gray">
                                            # {singleMovie.top3HasFeature?.top3feature}
                                        </Text.Body3>
                                    </Block.RowBox>
                                </Block.ColumnBox>
                            </Block.ColumnBox>
                        </Block.RowBox>
                    </Block.RowBox>

                    {/* 리뷰 정보 */}
                    <Block.ColumnBox width="882px">
                        <Block.RowBox width="100%" height="80px" padding="47px 0 0 0">
                            <Text.Body1>
                                리뷰
                                <Text.Body1 color="main">{reviewCount!.toLocaleString()}</Text.Body1>
                            </Text.Body1>
                        </Block.RowBox>
                        <Block.RowBox
                            width="882px"
                            height="91px"
                            borderRadius="13px"
                            border="1px solid rgba(154, 154, 154, 0.75)"
                            padding="0 0 0 304px"
                            alignItems="center"
                        >
                            <StarRating setParentScore={setScore} />

                            <S.Button
                                isHovered={isBtnHovered}
                                onMouseEnter={handleBtnHover}
                                onMouseLeave={handleBtnLeave}
                            >
                                <img src="/icons/brush.svg" alt="연필" />
                                <Text.Body1 color="white">리뷰작성</Text.Body1>
                            </S.Button>
                        </Block.RowBox>
                        {/* {reviewList.length === 0 ? (
                            <>리뷰가 없어요</>
                        ) : (
                            <>
                                {reviewList.map(review => {
                                    <Review key={review.reviewId} />;
                                })}
                            </>
                        )} */}

                        <Review />
                    </Block.ColumnBox>
                </>
            )}
        </Block.ColumnBox>
    );
}
