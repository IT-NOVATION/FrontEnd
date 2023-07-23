import FollowBtn from "@components/FollowBtn/FollowBtn";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import useLoginState from "@hooks/useLoginState";
import { ILikeListUser } from "@interfaces/user";
import { Block, Text } from "@styles/UI";

type Props = {
  user: ILikeListUser;
};

export default function UserBox({ user }: Props) {
  const { loginState, userId } = useLoginState();
  return (
    <Block.RowBox
      margin="0 0 15px 0"
      justifyContent="space-between"
      alignItems="center"
    >
      <Block.RowBox alignItems="center">
        <ProfileImg img={user.profileImg} size="45px" />
        <Text.Body4 margin="0 0 0 9px">{user.nickname}</Text.Body4>
      </Block.RowBox>
      {userId !== user.userId && (
        <FollowBtn
          isFollowing={user.isLoginUserFollowed}
          userId={String(user.userId)}
        />
      )}
    </Block.RowBox>
  );
}
