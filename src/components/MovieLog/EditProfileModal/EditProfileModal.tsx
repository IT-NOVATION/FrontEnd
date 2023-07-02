import { Block, Button, Input, Text } from "@styles/UI";
import * as S from "./style";
import { IUserProfile } from "@interfaces/userProfile";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { useState } from "react";
import theme from "@styles/theme";

type Props = {
  userProfile: IUserProfile;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

function EditProfileModal({ userProfile, setIsEditing }: Props) {
  const [nickname, setNickName] = useState(userProfile.nickname);
  const [nicknameErrorMsg, setNicknameErrorMsg] = useState(true);
  const [introduction, setIntroduction] = useState(userProfile.introduction);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.currentTarget.value);
  };
  const handleIntroductionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setIntroduction(e.currentTarget.value);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleProfileSubmit = () => {
    // 서버에 전송...
    // 서버에서 닉네임 중복여부 체크해야
  };
  return (
    <>
      <Block.ColumnBox
        width="530px"
        height="390px"
        borderRadius="20px"
        padding="19px"
        bgColor="white"
        zIndex="2"
      >
        <Block.Form>
          <Block.RowBox>
            <Text.Body1>프로필 편집</Text.Body1>
          </Block.RowBox>
          {/* 프로필/커버 이미지 */}
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
          <Block.RowBox margin="28px 0 0 0">
            <Text.Body4 margin="0 2px 0 0 ">닉네임</Text.Body4>
            <Text.Body1 color="main">*</Text.Body1>
          </Block.RowBox>
          <Block.FormInputSection>
            <Block.ColumnBox margin="10px 0 0 0">
              <S.Input value={nickname} onChange={handleNicknameChange} />
            </Block.ColumnBox>
            <Block.AbsoluteBox top="16px">
              <Text.Body5 color="red">
                {nicknameErrorMsg && "이미 사용중인 닉네임입니다."}
              </Text.Body5>
            </Block.AbsoluteBox>
          </Block.FormInputSection>
          <Block.RowBox margin="25px 0 0 0">
            <Text.Body4>한 줄 소개</Text.Body4>
          </Block.RowBox>
          <S.Textarea
            value={introduction}
            onChange={handleIntroductionChange}
          />
          <Block.RowBox
            width="100%"
            margin="22px 0 0 0"
            justifyContent="center"
            alignItems="center"
          >
            <Button.Button
              width="63px"
              height="21px"
              color="gray"
              border="1px solid #CCCCCC"
              borderRadius="34.5px"
              bgColor="white"
              margin="0 7px 0 0"
              onClick={handleCancelClick}
            >
              취소
            </Button.Button>
            <Button.Button
              width="63px"
              height="21px"
              color="main"
              border={`1px solid ${theme.colors.main}`}
              borderRadius="34.5px"
              bgColor="white"
              margin="0 7px 0 0"
              onClick={handleProfileSubmit}
            >
              저장
            </Button.Button>
          </Block.RowBox>
        </Block.Form>
      </Block.ColumnBox>
    </>
  );
}
export default EditProfileModal;
