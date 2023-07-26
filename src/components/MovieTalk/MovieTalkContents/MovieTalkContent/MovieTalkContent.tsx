import * as S from "./style";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { Block, Button, Text } from "@styles/UI";
import { IMovieTalkUser } from "@interfaces/user";
import FollowBtn from "@components/FollowBtn/FollowBtn";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MovieLogApi } from "@apis/movieLogApi";
import { ContentsType } from "@pages/MovieTalk/MovieTalk";
import useFollow from "@hooks/useFollow";
import { IUserResult } from "@interfaces/userResult";

type Props = {
  content: IMovieTalkUser;
  type?: ContentsType;
};

function MovieTalkContent({ content, type }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { searchValue } = useParams();

  const handleReviewClick = (reviewId: number) => {
    navigate(`/review/${reviewId}`);
  };
  const handleUserClick = (userId: number) => {
    navigate(`/movieLog/${userId}`);
  };
  const queryClient = useQueryClient();
  const { mutate: mutateFollow } = useMutation({
    mutationFn: () => MovieLogApi.follow({ targetUserId: content.userId }),
    onMutate: async () => {
      if (pathname.includes("/movieTalk")) {
        const prevContentData = queryClient.getQueryData([
          `${type}`,
        ]) as IMovieTalkUser[];
        const updateData = () => {
          const temp = [...prevContentData];
          let targetUser: IMovieTalkUser = prevContentData?.filter(
            (v) => v.userId === content.userId
          )[0];
          let targetIndex = prevContentData.findIndex(
            (v) => v.userId === content.userId
          );
          if (targetUser?.isNowUserFollowThisUser) {
            // 이미 팔로우중인 경우
            targetUser = {
              ...targetUser,
              isNowUserFollowThisUser: false,
            };
          } else {
            targetUser = {
              ...targetUser,
              isNowUserFollowThisUser: true,
            };
          }
          temp[targetIndex] = targetUser;
          return temp;
        };
        queryClient.setQueryData([`${type}`], updateData());
      } else {
        const prevUserResult = queryClient.getQueryData([
          "userSearchResult",
          `${searchValue}`,
        ]) as IUserResult;
        const userResultInfo = prevUserResult.userSearchResponseDtoList;
        const updateData = () => {
          const temp = [...userResultInfo];
          let targetUser: IMovieTalkUser = userResultInfo?.filter(
            (v) => v.userId === content.userId
          )[0];
          let targetIndex = userResultInfo.findIndex(
            (v) => v.userId === content.userId
          );
          if (targetUser?.isNowUserFollowThisUser) {
            // 이미 팔로우중인 경우
            targetUser = {
              ...targetUser,
              isNowUserFollowThisUser: false,
            };
          } else {
            targetUser = {
              ...targetUser,
              isNowUserFollowThisUser: true,
            };
          }
          temp[targetIndex] = targetUser;
          return {
            totalSize: prevUserResult.totalSize,
            userSearchResponseDtoList: temp,
          };
        };
        queryClient.setQueryData(
          ["userSearchResult", `${searchValue}`],
          updateData()
        );
      }
    },
  });
  const handleFollowClick = useFollow(mutateFollow);
  return (
    <S.ContentContainer>
      <ProfileImg img={content.profileImg} size="118px" />
      <Block.ColumnBox width="auto" margin="0 0 0 10px">
        <Block.RowBox
          margin="5px 0 0 0"
          width="317px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text.Title4 pointer onClick={() => handleUserClick(content.userId)}>
            {content.nickName}
          </Text.Title4>
          {!content.isMyProfile && (
            <Block.RowBox onClick={handleFollowClick} width="auto">
              <FollowBtn
                isFollowing={content.isNowUserFollowThisUser}
                userId={String(content.userId)}
              />
            </Block.RowBox>
          )}
        </Block.RowBox>
        <Block.RowBox margin="24px 0 0 0" alignItems="center">
          <Text.Body3 lineHeight="1.2" color="lightBlack">
            {content.introduction}
          </Text.Body3>
        </Block.RowBox>
      </Block.ColumnBox>
      <Block.RowBox width="auto" margin="0 0 0 48px">
        {content.reviews.slice(0, 2).map((v) => (
          <Block.ColumnBox
            width="auto"
            margin="0 20px 0 0"
            key={v.reviewId}
            onClick={() => handleReviewClick(v.reviewId)}
            pointer
          >
            <S.Poster
              img={
                v.movieImg
                  ? (v.movieImg as string)
                  : (v.movie?.movieImg as string)
              }
            />
            <Block.RowBox justifyContent="center">
              <Text.Body3 margin="10px 0 0 0" color="lightBlack">
                {v.reviewTitle}
              </Text.Body3>
            </Block.RowBox>
          </Block.ColumnBox>
        ))}
      </Block.RowBox>
    </S.ContentContainer>
  );
}
export default MovieTalkContent;
