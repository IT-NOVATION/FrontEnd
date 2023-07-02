import { Block, Text } from "@styles/UI";
import * as S from "./style";
import { IUserProfile } from "@interfaces/userProfile";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
function EditProfileModal({
  setIsEditing,
  userProfile,
}: {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  userProfile: IUserProfile;
}) {
  const handleBgClick = () => {
    setIsEditing(false);
  };
  return (
    <S.Background onClick={handleBgClick}>
      <Block.ColumnBox
        width="530px"
        height="370px"
        borderRadius="20px"
        padding="19px"
        bgColor="white"
      >
        <Block.RowBox>
          <Text.Body1>프로필 편집</Text.Body1>
        </Block.RowBox>
        <Block.RowBox
          margin="13px 0 0 0"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Block.ColumnBox
            width="50%"
            justifyContent="center"
            alignItems="center"
          >
            <Text.Body4 margin="0 0 6px 0">프로필</Text.Body4>
            <ProfileImg img={userProfile.profileImg} size="70px" />
          </Block.ColumnBox>
          <Block.ColumnBox
            width="50%"
            justifyContent="center"
            alignItems="center"
          >
            <Text.Body4 margin="0 0 6px 0">커버</Text.Body4>
            <ProfileImg img={userProfile.background} size="70px" />
          </Block.ColumnBox>
        </Block.RowBox>
      </Block.ColumnBox>
    </S.Background>
  );
}
export default EditProfileModal;
