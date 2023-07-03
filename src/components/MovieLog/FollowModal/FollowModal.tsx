import * as S from "./style";
import { IFollowUser } from "@interfaces/followUser";
import { FollowModalType } from "@pages/MovieLog/MovieLog";
import { Block, Text } from "@styles/UI";
import { useState } from "react";
import UserContainer from "./UserContainer/UserContainer";

type Props = {
  initialState: FollowModalType;
  followers: IFollowUser[];
  following: IFollowUser[];
  setFollowModal: React.Dispatch<React.SetStateAction<FollowModalType>>;
};

function FollowModal({
  initialState,
  followers,
  following,
  setFollowModal,
}: Props) {
  const [selected, setSelected] = useState<FollowModalType>(initialState);
  const setColor = (clicked: FollowModalType) => {
    if (selected === clicked) {
      return "lightBlack";
    } else {
      return "lightGray";
    }
  };
  const handleExitClick = () => {
    setFollowModal(null);
  };
  const handleFollowersClick = () => {
    setSelected(followers);
  };
  const handleFollowingClick = () => {
    setSelected(following);
  };
  return (
    <Block.ColumnBox
      width="355px"
      height="478px"
      alignItems="center"
      zIndex="2"
      border="1px solid #F8F8F8"
      bgColor="white"
      borderRadius="20px"
      boxShadow=" 4px 4px 10px 0px rgba(204, 204, 204, 0.47)"
      padding="10px 0"
    >
      <Block.RowBox justifyContent="flex-end" margin="0 18px 0 0">
        <S.ExitIcon onClick={handleExitClick} src="/icons/exit.svg" />
      </Block.RowBox>

      {/* 팔로워/팔로잉 */}
      <Block.RowBox margin="18px 0 0 0">
        <S.Label
          onClick={handleFollowersClick}
          selected={selected === followers}
        >
          <Text.Body4 margin="0 7px 0 0 " color={setColor(followers)}>
            팔로워
          </Text.Body4>
          <Text.Body4 color={setColor(followers)}>
            {followers.length}
          </Text.Body4>
        </S.Label>
        <S.Label
          onClick={handleFollowingClick}
          selected={selected === following}
        >
          <Text.Body4 margin="0 7px 0 0 " color={setColor(following)}>
            팔로잉
          </Text.Body4>
          <Text.Body4 color={setColor(following)}>
            {following.length}
          </Text.Body4>
        </S.Label>
      </Block.RowBox>

      {/* 유저 나열 */}
      <S.UserLayout>
        {selected?.map((v) => (
          <UserContainer key={v.userId} user={v} />
        ))}
      </S.UserLayout>
    </Block.ColumnBox>
  );
}
export default FollowModal;
