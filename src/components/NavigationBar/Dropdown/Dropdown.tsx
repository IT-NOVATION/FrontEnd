import * as S from "./style";
import { Block, Text } from "@styles/UI";

export default function Dropdown({
  setDropdownOn,
}: {
  setDropdownOn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleBackgroundClick = () => setDropdownOn(false);
  return (
    <>
      <S.Background onClick={handleBackgroundClick} />
      <Block.AbsoluteBox width="auto" right="25px" top="85px" zIndex="100">
        <S.Bubble>
          <Block.RowBox
            justifyContent="flex-start"
            padding="0 0 0 9px"
            alignItems="center"
            height="31px"
            pointer
          >
            <S.Icon src="/icons/NavigationBar/logout.svg" />
            <Text.Body4 margin="0 0 0 6px">로그아웃</Text.Body4>
          </Block.RowBox>
          <Block.RowBox
            justifyContent="center"
            margin="7px 0 0 0"
            alignItems="center"
            height="31px"
            pointer
          >
            <S.Icon src="/icons/NavigationBar/serviceIntro.svg" />
            <Text.Body4 margin="0 0 0 11px">서비스 소개</Text.Body4>
          </Block.RowBox>
          <Block.RowBox
            justifyContent="flex-start"
            margin="11px 0 0 0"
            alignItems="center"
            padding="0 0 0 9px"
            height="31px"
            pointer
          >
            <S.Icon src="/icons/NavigationBar/inquire.svg" />
            <Text.Body4 margin="0 0 0 14px">문의하기</Text.Body4>
          </Block.RowBox>
        </S.Bubble>
      </Block.AbsoluteBox>
    </>
  );
}
