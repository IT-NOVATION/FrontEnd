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
  const handleModalBackgroundClick = () => {
    setModalContent(null);
    setDropdownOn(false);
  };
  const handleBackgroundClick = () => {
    setDropdownOn(false);
    setModalContent(null);
  };
  const handleLogout = async () => {
    await AccountApi.logout();
    await queryClient.invalidateQueries();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
    setDropdownOn(false);
  };
  const handleServiceIntroClick = () => setModalContent("serviceIntro");
  const handleInquireClick = () => setModalContent("inquire");
  const handleExitClick = () => {
    setModalContent(null);
    setDropdownOn(false);
  };
  return (
    <>
      <S.Layout isModalOn={!!modalContent}>
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
      </S.Layout>
      {modalContent === "inquire" && (
        <Block.ModalLayout>
          <S.ModalBg onClick={handleModalBackgroundClick} />
          <S.InquireImg img="/images/inquire.png">
            {" "}
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
          </S.InquireImg>
        </Block.ModalLayout>
      )}
      {modalContent === "serviceIntro" && (
        <Block.ModalLayout>
          <S.ModalBg onClick={handleModalBackgroundClick} />
          <S.ServiceIntroImage img="/images/service_intro.png">
            {" "}
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
          </S.ServiceIntroImage>
        </Block.ModalLayout>
      )}
    </>
  );
}
