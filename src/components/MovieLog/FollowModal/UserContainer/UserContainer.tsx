import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { IFollowUser } from "@interfaces/followUser";
import { Block, Text } from "@styles/UI";

function UserContainer({ user }: { user: IFollowUser }) {
  return (
    <Block.RowBox margin="0 0 16px 0" alignItems="center">
      <ProfileImg img={user.profileImg} size="45px" />
      <Text.Body4 margin="0 0 0 9px" color="lightBlack">
        {user.nickname}
      </Text.Body4>
    </Block.RowBox>
  );
}
export default UserContainer;
