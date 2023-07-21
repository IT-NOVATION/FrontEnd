import { Block, Text } from "@styles/UI";
import * as S from "./style";
import { ISingleMovie } from "@interfaces/singleMovie";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SingleMovieApi } from "@apis/singleMovieApi";
import useHovered from "@hooks/useHovered";
import StarRating from "@components/SingleMovie/StarRating";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { modalStateAtom } from "@recoil/modalAtom";
import { useSetRecoilState } from "recoil";
import theme from "@styles/theme";
import ReviewPreview from "@components/ReviewPreviews/ReviewPreview/ReviewPreview";
import { ILoginState } from "@interfaces/loginState";

export default function SingleMovie() {
    const infoList = ["장르", "개요", "개봉", "감독", "출연", "줄거리"];
    const keywordsMap = new Map();
    keywordsMap.set("hasGoodStory", "스토리가 좋아요");
    keywordsMap.set("hasGoodProduction", "작품성이 높아요");
    keywordsMap.set("hasGoodScenario", "시나리오 소재가 참신해요");
    keywordsMap.set("hasGoodDirecting", "연출력이 좋아요!");
    keywordsMap.set("hasGoodOst", "OST가 좋아요");
    keywordsMap.set("hasGoodVisual", "영상미가 아름다워요");
    keywordsMap.set("hasGoodActing", "배우들의 연기가 훌륭해요");
    keywordsMap.set("hasGoodCharterCharming", "캐릭터가 매력적이에요");
    keywordsMap.set("hasGoodDiction", "대사 전달이 정확해요");

    const { movieId } = useParams();
    const { data: singleMovie } = useQuery<ISingleMovie>({
        queryKey: ["movie", movieId],
        queryFn: () => SingleMovieApi.getSinglelMovie(Number(movieId)),
        suspense: true,
    });

    const { isHovered: isDetailHovered, handleHover: handleDetailHover, handleLeave: handleDetailLeave } = useHovered();
    const { isHovered: isBtnHovered, handleHover: handleBtnHover, handleLeave: handleBtnLeave } = useHovered();

    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const loginState = queryClient.getQueryData<ILoginState>(["loginState"]);

    const setModalState = useSetRecoilState(modalStateAtom);

    const handleHeartCount = async () => {
        if (loginState?.loginState === false) {
            setModalState(1);
        } else
            try {
                await SingleMovieApi.postMovieLike(Number(movieId));
                await queryClient.invalidateQueries(["movie", movieId]);
            } catch (error) {
                console.log(error);
            }
    };

    const goToWriteReview = () => {
        if (loginState?.loginState === false) {
            setModalState(1);
        } else navigate("/write-review/" + movieId);
    };

    return (
        <Block.ColumnBox width="100vw" alignItems="center">
            {/* 영화 정보 */}

            {singleMovie && (
                <>
                    <Block.RowBox
                        width="100%"
                        height="450px"
                        margin="85px 0 0 0 "
                        bgColor="black"
                        justifyContent="center"
                        relative
                    >
                        <Block.AbsoluteBox width="1286px">
                            <S.AbsolutePosterImg src={singleMovie.movie.movieBgImg} alt="배경" />
                        </Block.AbsoluteBox>

                        <Block.RowBox width="1286px" padding="30px 0 0 70px">
                            <Block.AbsoluteBox width="100%" height="100%">
                                <Block.RowBox>
                                    <Block.ColumnBox width="272px" height="389px">
                                        <img
                                            src={singleMovie.movie.movieImg}
                                            alt="포스터"
                                            width="272px"
                                            height="389px"
                                        />
                                    </Block.ColumnBox>

                                    <Block.ColumnBox width="850px" padding="0 0 0 30px" justifyContent="space-between">
                                        <S.TitleBox>
                                            <Text.Title1 color="white">{singleMovie.movie.title}</Text.Title1>
                                            <Block.RowBox width="191px" justifyContent="space-between">
                                                <Block.RowBox
                                                    width="91px"
                                                    height="29px"
                                                    border={
                                                        singleMovie.loginUserInfoDto.pushedMovieLike
                                                            ? `1px solid ${theme.colors.main}`
                                                            : "1px solid white"
                                                    }
                                                    borderRadius="5px"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    pointer
                                                    onClick={handleHeartCount}
                                                    gap="5px"
                                                >
                                                    <img
                                                        src={
                                                            singleMovie.loginUserInfoDto.pushedMovieLike
                                                                ? "/icons/heart_purple.svg"
                                                                : "/icons/empty_heart.svg"
                                                        }
                                                        alt="하트"
                                                    />

                                                    <Text.Body3
                                                        color={
                                                            singleMovie.loginUserInfoDto.pushedMovieLike
                                                                ? "main"
                                                                : "white"
                                                        }
                                                    >
                                                        {singleMovie.movie.movieLikeCount}
                                                    </Text.Body3>
                                                </Block.RowBox>

                                                <Block.RowBox
                                                    width="91px"
                                                    height="29px"
                                                    border="1px solid #fff"
                                                    borderRadius="5px"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    gap="5px"
                                                >
                                                    <img src="/icons/empty_star.svg" alt="별" />
                                                    <Text.Body3 color="white">
                                                        {singleMovie.movie.avgStarScore} 점
                                                    </Text.Body3>
                                                </Block.RowBox>
                                            </Block.RowBox>
                                        </S.TitleBox>

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
                                                <Block.ColumnBox width="59px" justifyContent="space-between">
                                                    {infoList.map((info, index) => (
                                                        <Text.Body6 key={index} color="white">
                                                            {info}
                                                        </Text.Body6>
                                                    ))}
                                                </Block.ColumnBox>
                                                <Block.ColumnBox
                                                    width="500px"
                                                    height="107px"
                                                    padding="0 0 0 13px"
                                                    justifyContent="space-between"
                                                >
                                                    <Text.Body6 color="white">
                                                        {singleMovie.movie.movieGenre}
                                                    </Text.Body6>
                                                    <Text.Body6 color="white">
                                                        {/* {singleMovie.movie.movieAge} |{" "} 관람등급 매끄럽게 가져올 수 있을 때 추가*/}
                                                        {singleMovie.movie.movieRunningTime}분
                                                    </Text.Body6>
                                                    <Text.Body6 color="white">
                                                        {singleMovie.movie.movieReleasedDate.replaceAll("-", ".")}
                                                    </Text.Body6>
                                                    <Text.Body6 color="white">
                                                        {singleMovie.movie.movieDirector}
                                                    </Text.Body6>
                                                    <Text.Body6 color="white">
                                                        {singleMovie.movie.movieActor}
                                                    </Text.Body6>
                                                </Block.ColumnBox>
                                                {isDetailHovered && (
                                                    <Block.AbsoluteBox
                                                        width="363px"
                                                        height="136px"
                                                        borderRadius="20px"
                                                        zIndex="999"
                                                        right="0px"
                                                        border="1px solid rgba(255, 255, 255, 0.41)"
                                                        background="rgba(0, 0, 0, 0.25)"
                                                        boxShadow="4px 4px 10px 0px rgba(204, 204, 204, 0.47)"
                                                    >
                                                        <S.DetailWrapper>
                                                            <Text.Body4 color="white" lineHeight="1.5">
                                                                {singleMovie.movie.movieDetail}
                                                            </Text.Body4>
                                                        </S.DetailWrapper>
                                                    </Block.AbsoluteBox>
                                                )}
                                            </Block.RowBox>

                                            <Block.RowBox width="100%" height="30px" alignItems="center">
                                                {singleMovie.movie.top3HasFeature.topKeywordList.map(
                                                    (item, i) => (
                                                        <Block.RowBox width="auto" margin="0 15px 0 0">
                                                            <Text.Body6 color="white">
                                                                # {keywordsMap.get(item)}{" "}
                                                            </Text.Body6>
                                                        </Block.RowBox>
                                                    )
                                                    // `# ${keywordsMap.get(item)}`
                                                )}
                                            </Block.RowBox>
                                        </Block.ColumnBox>
                                    </Block.ColumnBox>
                                </Block.RowBox>
                            </Block.AbsoluteBox>
                        </Block.RowBox>
                    </Block.RowBox>

                    {/* 리뷰 정보 */}
                    <Block.ColumnBox width="882px">
                        <Block.RowBox width="100%" height="80px" padding="47px 0 0 0">
                            <Text.Body1>리뷰</Text.Body1>
                            <Block.RowBox width="100px" padding="0 0 0 10px">
                                <Text.Body1 color="main">{singleMovie.reviewAndUserInfoList.length}</Text.Body1>
                            </Block.RowBox>
                        </Block.RowBox>
                        <Block.RowBox
                            width="882px"
                            height="91px"
                            borderRadius="13px"
                            border="1px solid rgba(154, 154, 154, 0.75)"
                            padding="0 20px 0 300px"
                            alignItems="center"
                        >
                            <StarRating avgStarScore={singleMovie.loginUserInfoDto.movieStar} />

                            <S.Button
                                isHovered={isBtnHovered}
                                onMouseEnter={handleBtnHover}
                                onMouseLeave={handleBtnLeave}
                            >
                                <img src="/icons/brush.svg" alt="연필" />

                                <Block.RowBox width="90px" justifyContent="flex-end" onClick={goToWriteReview}>
                                    <Text.Body1 color="white">리뷰 작성</Text.Body1>
                                </Block.RowBox>
                            </S.Button>
                        </Block.RowBox>
                    </Block.ColumnBox>
                    <Block.ColumnBox justifyContent="center" alignItems="center">
                        <Block.ColumnBox width="882px" justifyContent="center" alignItems="center" padding="24px 0 0 0">
                            {singleMovie.reviewAndUserInfoList.map((item, i) => {
                                return <ReviewPreview review={item.review} user={item.user} />;
                            })}
                        </Block.ColumnBox>
                    </Block.ColumnBox>
                </>
            )}
        </Block.ColumnBox>
    );
}
