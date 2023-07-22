import { useQueryClient } from "@tanstack/react-query";
import * as S from "./style";
import { Block, Text } from "@styles/UI";
import { useState } from "react";
import { AccountApi } from "@apis/accountApi";

export default function Dropdown({
  setDropdownOn,
}: {
  setDropdownOn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [modalContent, setModalContent] = useState<
    null | "serviceIntro" | "inquire"
  >(null);
  const queryClient = useQueryClient();
  const handleBackgroundClick = () => setDropdownOn(false);
  const handleLogout = async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    await AccountApi.logout();
    await queryClient.invalidateQueries();
    window.location.reload();
    setDropdownOn(false);
  };
  const handleServiceIntroClick = () => setModalContent("serviceIntro");
  const handleInquireClick = () => setModalContent("inquire");
  const handleExitClick = () => setModalContent(null);
  return (
    <S.Layout>
      <S.Background onClick={handleBackgroundClick} />
      <Block.AbsoluteBox width="auto" right="25px" top="85px" zIndex="100">
        <S.Bubble>
          <Block.RowBox
            justifyContent="flex-start"
            padding="0 0 0 9px"
            alignItems="center"
            height="31px"
            pointer
            onClick={handleLogout}
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
            onClick={handleServiceIntroClick}
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
            onClickCapture={handleInquireClick}
          >
            <S.Icon src="/icons/NavigationBar/inquire.svg" />
            <Text.Body4 margin="0 0 0 14px">문의하기</Text.Body4>
          </Block.RowBox>
        </S.Bubble>
      </Block.AbsoluteBox>
      {modalContent === "inquire" && (
        <S.Modal>
          <Block.AbsoluteBox
            onClick={handleExitClick}
            width="auto"
            zIndex="101"
            top="25px"
            right="25px"
            pointer
          >
            <S.Icon src="/icons/exit.svg" />
          </Block.AbsoluteBox>
          <Block.RowBox margin="0 0 25px 0" justifyContent="center">
            <Text.Title5>문의하기</Text.Title5>
          </Block.RowBox>
          <Block.RowBox justifyContent="center" zIndex="100">
            <S.ServiceIntroText>
              It’s Movie Time을 이용해주시는 사용자님, 반갑습니다.{"\n\n"} It’s
              Movie Time은{"\n"} 영화를 사랑하는 사람들에게 즐거움과 유익함을
              선사하는 것을 목표로 대학생 연합 개발 동아리 It’s Time의
              ‘IT노베이션’ 팀에서 출시한 서비스입니다.{"\n\n"}사용하시며 느꼈던
              불편한 점은 아래 메일주소로 남겨주시면{"\n"} 빠른 답변과 함께 더
              나은 서비스를 제공드리기 위하여 적극 반영하겠습니다.{"\n\n"}
              itsmovietime@gmail.com{"\n\n"} 감사합니다.
            </S.ServiceIntroText>
          </Block.RowBox>
        </S.Modal>
      )}
    </S.Layout>
  );
}
