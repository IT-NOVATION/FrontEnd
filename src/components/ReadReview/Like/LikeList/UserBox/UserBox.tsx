import FollowBtn from "@components/FollowBtn/FollowBtn";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import useLoginState from "@hooks/useLoginState";
import { ILikeListUser } from "@interfaces/user";
import { Block, Text } from "@styles/UI";
import { useNavigate } from "react-router-dom";

type Props = {
  user: ILikeListUser;
};

export default function UserBox({ user }: Props) {
  const navigate = useNavigate();
  const handleNicknameClick = () => {
    navigate(`/movieLog/${user.userId}`);
  };
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
        <FollowBtn
          isFollowing={user.isLoginUserFollowed}
          userId={String(user.userId)}
        />
      )}
    </Block.RowBox>
  );
}
