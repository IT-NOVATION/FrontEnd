import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { IFollowUser } from "@interfaces/followUser";
import { FollowModalType } from "@pages/MovieLog/MovieLog";
import { Block, Text } from "@styles/UI";
import { useNavigate } from "react-router-dom";

type Props = {
  user: IFollowUser;
  setFollowModal: React.Dispatch<React.SetStateAction<FollowModalType>>;
};

function UserContainer({ user, setFollowModal }: Props) {
  const navigate = useNavigate();
  const handleNicknameClick = () => {
    setFollowModal(null);
    navigate(`/movieLog/${user.userId}`);
  };
  return (
    <Block.RowBox margin="0 0 16px 0" alignItems="center">
      <ProfileImg img={user.profileImg} size="45px" />
      <Text.Body4
        margin="0 0 0 9px"
        color="lightBlack"
        onClick={handleNicknameClick}
        pointer
      >
        {user.nickname}
      </Text.Body4>
    </Block.RowBox>
  );
}
export default UserContainer;
