import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { Block, Text, Button } from "@styles/UI";
import { useState } from "react";
import * as S from "./style";
import Movies from "@components/MovieLog/Movies/Movies";
import EditProfileModal from "@components/MovieLog/EditProfileModal/EditProfileModal";
import FollowModal from "@components/MovieLog/FollowModal/FollowModal";
import { IFollowUser } from "@interfaces/followUser";
import { MovieLogApi } from "@apis/movieLogApi";
import { useParams } from "react-router-dom";
import ReviewPreviews from "@components/ReviewPreviews/ReviewPreviews";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IMovieLogData } from "@interfaces/movieLog";
import { loginStateAtom } from "@recoil/loginStateAtom";
import { useRecoilValue } from "recoil";
import Badge from "@components/User/Badge/Badge";

type ContentType = "Reviews" | "InterestedMovies";
export type FollowModalType = null | IFollowUser[];

function MovieLog() {
  const { userId } = useParams();
  const queryClient = useQueryClient();
  const { data: movieLogData } = useQuery<IMovieLogData>({
    queryKey: ["movieLog", userId],
    queryFn: async () => {
      const response: IMovieLogData = await MovieLogApi.getMovieLog(
        Number(userId)
      );
      const temp = response.reviews.map((v) => {
        return { ...v, movie: { ...v.movieofReview } };
      });
      return { ...response, reviews: temp };
    },
    suspense: true,
  });
  const { loginState, userId: loginUserId } = useRecoilValue(loginStateAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [followModal, setFollowModal] = useState<FollowModalType>(null);
  const [contents, setContents] = useState<ContentType>("Reviews");

  const handleChangeContent = (to: ContentType) => {
    setContents(to);
  };
  const handleBgClick = () => {
    setIsEditing(false);
    setFollowModal(null);
  };
  const handleFollow = async () => {
    await MovieLogApi.follow({
      targetUserId: Number(userId),
    });
    await queryClient.invalidateQueries(["movieLog"]);
  };
  const handleButtonClick = async () => {
    loginUserId === Number(userId) ? setIsEditing(true) : await handleFollow();
  };
  const handleFollowersClick = () =>
    setFollowModal(movieLogData?.followers as IFollowUser[]);
  const handleFollowingClick = () =>
    setFollowModal(movieLogData?.followings as IFollowUser[]);

  return (
    <>
      {movieLogData && (
        <>
          {/* 팔로우/팔로잉 모달 */}
          {followModal && (
            <Block.ColumnBox
              width="100vw"
              height="100vh"
              position="fixed"
              justifyContent="center"
              alignItems="center"
              zIndex="99"
            >
              <S.Background onClick={handleBgClick}></S.Background>
              <FollowModal
                initialState={followModal}
                setFollowModal={setFollowModal}
                followers={movieLogData.followers}
                following={movieLogData.followings}
              />
            </Block.ColumnBox>
          )}
          {/* 프로필 편집 모달 */}
          {isEditing && (
            <Block.ColumnBox
              width="100vw"
              height="100vh"
              position="fixed"
              justifyContent="center"
              alignItems="center"
              bgColor="bgColor"
              zIndex="99"
            >
              <S.Background onClick={handleBgClick}></S.Background>
              <EditProfileModal
                setIsEditing={setIsEditing}
                userProfile={movieLogData.nowUser}
              />
            </Block.ColumnBox>
          )}
          <Block.ColumnBox
            bgColor="white"
            width="100vw"
            height="85px"
          ></Block.ColumnBox>
          {/* 커버 */}

          {movieLogData.nowUser.bgImg ? (
            <Block.ColumnBox
              background={`url(${movieLogData.nowUser.bgImg})`}
              width="100vw"
              height="196px"
            ></Block.ColumnBox>
          ) : (
            <Block.ColumnBox
              bgColor="gray"
              width="100vw"
              height="196px"
            ></Block.ColumnBox>
          )}
          <Block.PageWrapper>
            <Block.PageLayout>
              <Block.AbsoluteBox top="135px">
                <ProfileImg
                  size="208px"
                  img={movieLogData.nowUser.profileImg}
                />
              </Block.AbsoluteBox>
              <Block.RowBox
                width="900px"
                margin="85px 0 0 0"
                alignItems="center"
                position="relative"
              >
                <Text.Title3 color="lightBlack" margin="0 16px 0 0">
                  {movieLogData.nowUser.nickname}
                </Text.Title3>
                <Text.Body1 color="lightBlack" margin="0 410px 0 0">
                  {movieLogData.nowUser.introduction}
                </Text.Body1>
                <Block.AbsoluteBox width="auto" top="-5px" right="0">
                  <Button.Button
                    width="94px"
                    height="33px"
                    border=" 1px solid #CCC"
                    borderRadius="16.5px"
                    bgColor="white"
                    onClick={handleFollow}
                  >
                    {loginUserId === Number(userId)
                      ? "프로필 편집"
                      : movieLogData.isLoginedUserFollowsNowUser
                      ? "팔로잉"
                      : "팔로우"}
                  </Button.Button>
                </Block.AbsoluteBox>
              </Block.RowBox>
              <Block.RowBox
                width="100%"
                margin="30px 0 0 0"
                alignItems="center"
              >
                <Badge grade={movieLogData.nowUser.grade} />
                <Block.RowBox
                  width="auto"
                  margin="0 0 0 12px"
                  alignItems="center"
                  pointer
                  onClick={handleFollowersClick}
                >
                  <Text.Body4 color="lightBlack" margin="0 4px 0 0">
                    팔로워
                  </Text.Body4>
                  <Text.Body1 color="lightBlack" margin="0 4px 0 0">
                    {movieLogData.followers.length}
                  </Text.Body1>
                </Block.RowBox>
                <Block.RowBox
                  width="auto"
                  margin="0 0 0 25px"
                  alignItems="center"
                  pointer
                  onClick={handleFollowingClick}
                >
                  <Text.Body4 color="lightBlack" margin="0 4px 0 0">
                    팔로잉
                  </Text.Body4>
                  <Text.Body1 color="lightBlack" margin="0 4px 0 0">
                    {movieLogData.followings.length}
                  </Text.Body1>
                </Block.RowBox>
              </Block.RowBox>
              {/* 리뷰 or 관심영화 */}
              <Block.RowBox width="900px" margin="70px 0 0 0">
                <S.ContentLabel
                  onClick={() => handleChangeContent("Reviews")}
                  selected={contents === "Reviews"}
                >
                  <Text.Body1 color="lightBlack">리뷰</Text.Body1>
                  <Text.Body1 color="lightBlack" margin="4px">
                    {movieLogData.reviews.length}
                  </Text.Body1>
                </S.ContentLabel>
                <S.ContentLabel
                  onClick={() => handleChangeContent("InterestedMovies")}
                  selected={contents === "InterestedMovies"}
                >
                  <Text.Body1 color="lightBlack">관심영화</Text.Body1>
                  <Text.Body1 color="lightBlack" margin="4px">
                    {movieLogData.interestedMovie.length}
                  </Text.Body1>
                </S.ContentLabel>
              </Block.RowBox>
              {contents === "Reviews" ? (
                <ReviewPreviews reviews={movieLogData.reviews} width="900px" />
              ) : (
                <Block.RowBox
                  margin="35px 0 70px 0"
                  justifyContent="center"
                  alignItems="center"
                >
                  {movieLogData.interestedMovie.length ? (
                    <Movies movies={movieLogData.interestedMovie} />
                  ) : (
                    <></>
                  )}
                </Block.RowBox>
              )}
            </Block.PageLayout>
          </Block.PageWrapper>
        </>
      )}
    </>
  );
}
export default MovieLog;
