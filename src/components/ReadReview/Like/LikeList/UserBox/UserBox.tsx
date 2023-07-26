import { MovieLogApi } from "@apis/movieLogApi";
import FollowBtn from "@components/FollowBtn/FollowBtn";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import useFollow from "@hooks/useFollow";
import { ILikeListUser } from "@interfaces/user";
import { Block, Text } from "@styles/UI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
type Props = {
  user: ILikeListUser;
};

export default function UserBox({ user }: Props) {
  const { reviewId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const handleNicknameClick = () => {
    navigate(`/movieLog/${user.userId}`);
  };
  const { mutate: mutateFollow } = useMutation({
    mutationFn: () => MovieLogApi.follow({ targetUserId: user.userId }),
    onMutate: () => {
      const prevReviewTime: ILikeListUser[] = queryClient.getQueryData([
        "likeList",
        `${reviewId}`,
      ]) as ILikeListUser[];
      const updateData = () => {
        const temp = [...prevReviewTime];
        let targetUser: ILikeListUser = prevReviewTime?.filter(
          (v) => v.userId === user.userId
        )[0];
        let targetIndex = prevReviewTime.findIndex(
          (v) => v.userId === user.userId
        );
        if (targetUser?.isLoginUserFollowed) {
          // 이미 팔로우중인 경우
          targetUser = {
            ...targetUser,
            isLoginUserFollowed: false,
          };
        } else {
          targetUser = {
            ...targetUser,
            isLoginUserFollowed: true,
          };
        }
        temp[targetIndex] = targetUser;
        return temp;
      };
      queryClient.setQueryData(["likeList", `${reviewId}`], updateData());
    },
  });
  const handleFollowClick = useFollow(mutateFollow);
  return (
    <Block.RowBox
      margin="0 0 15px 0"
      justifyContent="space-between"
      alignItems="center"
    >
      <Block.RowBox alignItems="center">
        <ProfileImg img={user.profileImg} size="45px" />
        <Text.Body4 pointer onClick={handleNicknameClick} margin="0 0 0 9px">
          {user.nickname}
        </Text.Body4>
      </Block.RowBox>
      {!user.isMyProfile && (
        <Block.RowBox onClick={handleFollowClick} width="auto">
          <FollowBtn
            isFollowing={user.isLoginUserFollowed}
            userId={String(user.userId)}
          />
        </Block.RowBox>
      )}
    </Block.RowBox>
  );
}
