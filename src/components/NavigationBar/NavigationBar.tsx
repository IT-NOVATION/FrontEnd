import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { modalStateAtom } from "@recoil/atoms";
import { useEffect, useState } from "react";
import { Block, Button, Text } from "@styles/UI";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Search from "@components/Search/Search";

export default function NavigationBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleLoginClick = () => setModalState(1);
  const setModalState = useSetRecoilState(modalStateAtom);
  const [position, setPosition] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isSearchClick, setIsSearchClick] = useState<boolean>(false);

  const handleSearchBtnClick = () => {
    setIsSearchClick((prev) => !prev);
  };

  const [isLogin, setIsLogin] = useState(false); // 로그인 됐을 때만 알람 표시 보이도록 => 추후에 데이터 받아올 수 있을 때 수정

  const goToMain = () => {
    navigate("/home");
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
      <AnimatePresence initial={false}>
        {isVisible && (
          <S.Nav
            variants={S.variants}
            initial="initial"
            exit="exit"
            animate="animate"
            key="nav"
            transition={{ type: "linear", duration: 0.5 }}
            isSearchClick={isSearchClick}
          >
            <Block.RowBox justifyContent="space-between">
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
                <Text.Title3 onClick={goToFilm} color="black" pointer>
                  영화
                </Text.Title3>
                <Text.Title3 onClick={goToMovieTalk} color="black" pointer>
                  무비토크
                </Text.Title3>
              </Block.RowBox>

              <Block.RowBox
                width="228px"
                justifyContent="flex-end"
                alignItems="center"
              >
                {pathname !== "/search-result" && (
                  <S.Icons
                    alt="close"
                    src={
                      isSearchClick ? "/icons/close.svg" : "/icons/search.svg"
                    }
                    onClick={handleSearchBtnClick}
                  />
                )}

                {isLogin ? (
                  <>
                    <S.Icons src="/icons/alarm.svg" alt="alarm" />
                    <Block.RowBox
                      width="122px"
                      height="43px"
                      borderRadius="15px"
                      border=" 1px solid rgba(0, 0, 0, 0.61)"
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
                      <Text.Body3 color="black">로그인 / 회원가입</Text.Body3>
                    </Button.Button>
                  </>
                )}
              </Block.RowBox>
            </Block.RowBox>

            <Block.Bar
              width="100%"
              height="0.5px"
              bgColor="gray"
              margin="21px 0"
            />
            <Block.RowBox>{isSearchClick && <Search />}</Block.RowBox>
          </S.Nav>
        )}
      </AnimatePresence>
    </>
  );
}
