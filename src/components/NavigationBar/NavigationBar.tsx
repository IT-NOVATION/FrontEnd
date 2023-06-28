import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { modalStateAtom } from "@recoil/atoms";
import { useEffect, useState } from "react";
import { Block, Button, Text } from "@styles/UI";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const [isMain, setIsMain] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/") {
      setIsMain(false);
    }
  }, []);

  const navigate = useNavigate();
  const handleLoginClick = () => setModalState(1);
  const setModalState = useSetRecoilState(modalStateAtom);

  const [isLogin, setIsLogin] = useState(false); // 로그인 됐을 때만 알람 표시 보이도록 => 추후에 데이터 받아올 수 있을 때 수정

  const [position, setPosition] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const goToMain = () => {
    navigate("/");
  };

  const goToFilm = async () => {
    navigate("/film");
  };

  const goToMovieTalk = () => {
    navigate("/movieTalk");
  };

  const goToMovieLog = () => {
    navigate("/movieLog");
  };

  useEffect(() => {
    const prev = position;
    window.addEventListener("scroll", () => {
      setPosition(window.scrollY);
      console.log(prev, window.scrollY);
      if (prev > window.scrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [position]);

  return (
    <>
      <S.Nav isVisible={isVisible} isMain={isMain}>
        <Block.RowBox
          width="426px"
          justifyContent="space-between"
          alignItems="center"
        >
          <S.HomeLogo
            onClick={goToMain}
            src="/icons/logo.svg"
            alt="home-logo"
          />
          <Text.Body1
            onClick={goToFilm}
            color={isMain ? "white" : "black"}
            pointer
          >
            영화
          </Text.Body1>
          <Text.Body1
            onClick={goToMovieTalk}
            color={isMain ? "white" : "black"}
            pointer
          >
            무비토크
          </Text.Body1>
        </Block.RowBox>
        <Block.RowBox
          width="228px"
          justifyContent="space-between"
          alignItems="center"
        >
          <S.Icons src="/icons/search.svg" alt="search" />

          {isLogin ? (
            <>
              <S.Icons src="/icons/alarm.svg" alt="alarm" />
              <Block.RowBox
                width="122px"
                height="43px"
                borderRadius="15px"
                border="1px solid black"
                bgColor="white"
                justifyContent="space-evenly"
                alignItems="center"
                pointer
                onClick={goToMovieLog}
              >
                <Text.Body3 color="black" pointer>
                  무비로그
                </Text.Body3>
                <S.Profile src="/icons/default-profile.svg" alt="logo" />
              </Block.RowBox>
            </>
          ) : (
            <>
              <Button.Button
                onClick={handleLoginClick}
                width="170px"
                height="43px"
                borderRadius="15px"
              >
                <Text.Body3 color="black">로그인/회원가입</Text.Body3>
              </Button.Button>
            </>
          )}
        </Block.RowBox>
      </S.Nav>
    </>
  );
}

// 10 만큼 아래로 내리면 네비바 사라짐
// 올리면 바로 나타남
// 다시 10만큼 내리면 사라짐
// ...
