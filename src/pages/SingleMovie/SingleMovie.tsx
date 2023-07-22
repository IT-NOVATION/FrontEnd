import { Block, Text } from "@styles/UI";
import * as S from "./style";
import { ISingleMovie } from "@interfaces/singleMovie";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SingleMovieApi } from "@apis/singleMovieApi";
import useHovered from "@hooks/useHovered";
import StarRating from "@components/SingleMovie/StarRating/StarRating";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { modalStateAtom } from "@recoil/modalAtom";
import { useSetRecoilState } from "recoil";
import theme from "@styles/theme";
import ReviewPreview from "@components/ReviewPreviews/ReviewPreview/ReviewPreview";
import { ILoginState } from "@interfaces/loginState";
import { keywordsMap } from "./keywords";

export default function SingleMovie() {
  const infoList = ["장르", "개요", "개봉", "감독", "출연"];

  const { movieId } = useParams();
  const { data: singleMovie } = useQuery<ISingleMovie>({
    queryKey: ["movie", movieId],
    queryFn: () => SingleMovieApi.getSinglelMovie(Number(movieId)),
    suspense: true,
  });

  const {
    isHovered: isDetailHovered,
    handleHover: handleDetailHover,
    handleLeave: handleDetailLeave,
  } = useHovered();
  const {
    isHovered: isBtnHovered,
    handleHover: handleBtnHover,
    handleLeave: handleBtnLeave,
  } = useHovered();

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
              <S.AbsolutePosterImg
                src={singleMovie.movie.movieBgImg}
                alt="배경"
              />
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

                  <Block.ColumnBox
                    width="850px"
                    padding="0 0 0 30px"
                    justifyContent="space-between"
                  >
                    <S.TitleBox>
                      <Text.Title1 color="white">
                        {singleMovie.movie.title}
                      </Text.Title1>
                      <Block.RowBox
                        width="191px"
                        justifyContent="space-between"
                      >
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
                            {singleMovie.movie.avgStarScore.toFixed(1)} 점
                          </Text.Body3>
                        </Block.RowBox>
                      </Block.RowBox>
                    </S.TitleBox>

                    <S.Grid>
                      <S.GridRow>
                        <S.InfoText>장르</S.InfoText>
                        <Text.Body4 color="white">
                          {singleMovie.movie.movieGenre}
                        </Text.Body4>
                      </S.GridRow>
                      <S.GridRow>
                        <S.InfoText>개요</S.InfoText>
                        <Text.Body4 color="white">
                          {singleMovie.movie.movieRunningTime}분
                        </Text.Body4>
                      </S.GridRow>
                      <S.GridRow>
                        <S.InfoText>장르</S.InfoText>
                        <Text.Body4 color="white">
                          {singleMovie.movie.movieReleasedDate}
                        </Text.Body4>
                      </S.GridRow>
                      <S.GridRow>
                        <S.InfoText>감독</S.InfoText>
                        <Text.Body4 color="white">
                          {singleMovie.movie.movieDirector}
                        </Text.Body4>
                      </S.GridRow>
                      <S.GridRow>
                        <S.InfoText>출연</S.InfoText>
                        <Text.Body4 color="white">
                          {singleMovie.movie.movieActor}
                        </Text.Body4>
                      </S.GridRow>
                    </S.Grid>
                    <Block.RowBox>
                      {singleMovie.movie.top3HasFeature.topKeywordList.map(
                        (item, i) => (
                          <Block.RowBox width="auto" margin="0 15px 0 0">
                            <Text.Body6 color="gray">
                              # {keywordsMap.get(item)}{" "}
                            </Text.Body6>
                          </Block.RowBox>
                        )
                        // `# ${keywordsMap.get(item)}`
                      )}
                    </Block.RowBox>
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
                <Text.Body1 color="main">
                  {singleMovie.reviewAndUserInfoList.length}
                </Text.Body1>
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
              <StarRating
                avgStarScore={singleMovie.loginUserInfoDto.movieStar}
              />

              <S.Button
                isHovered={isBtnHovered}
                onMouseEnter={handleBtnHover}
                onMouseLeave={handleBtnLeave}
              >
                <img src="/icons/brush.svg" alt="연필" />

                <Block.RowBox
                  width="90px"
                  justifyContent="flex-end"
                  onClick={goToWriteReview}
                >
                  <Text.Body1 color="white">리뷰 작성</Text.Body1>
                </Block.RowBox>
              </S.Button>
            </Block.RowBox>
          </Block.ColumnBox>
          <Block.ColumnBox justifyContent="center" alignItems="center">
            <Block.ColumnBox
              width="882px"
              justifyContent="center"
              alignItems="center"
              padding="24px 0 0 0"
            >
              {singleMovie.reviewAndUserInfoList.map((item, i) => {
                return (
                  <ReviewPreview
                    review={item.review}
                    user={item.user}
                    isLast={i === singleMovie.reviewAndUserInfoList.length - 1}
                  />
                );
              })}
            </Block.ColumnBox>
          </Block.ColumnBox>
        </>
      )}
    </Block.ColumnBox>
  );
}
