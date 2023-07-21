import { useRecoilValue, useSetRecoilState } from "recoil";
import * as S from "./style";
import { modalStateAtom } from "@recoil/modalAtom";
import { useEffect, useState } from "react";
import { Block, Button, Text } from "@styles/UI";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Search from "@components/Search/Search";
import { DefaultThemeColorKey } from "styled-components";
import { loginStateAtom } from "@recoil/loginStateAtom";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";

export default function NavigationBar() {
  const { loginState, userId, nickname, profileImg } =
    useRecoilValue(loginStateAtom);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleLoginClick = () => setModalState(1);
  const setModalState = useSetRecoilState(modalStateAtom);
  const [position, setPosition] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isSearchClick, setIsSearchClick] = useState<boolean>(false);
  const [textColor, setTextColor] = useState<DefaultThemeColorKey>("black");

  const handleSearchBtnClick = () => {
    setIsSearchClick((prev) => !prev);
  };

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
    navigate("/movieLog/" + userId);
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

  useEffect(() => {
    setTextColor(pathname === "/" && !isSearchClick ? "white" : "black");
  }, [pathname, isSearchClick]);

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
            isHome={pathname === "/"}
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
                <Text.Title3 onClick={goToFilm} color={textColor} pointer>
                  영화
                </Text.Title3>
                <Text.Title3 onClick={goToMovieTalk} color={textColor} pointer>
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
                      isSearchClick
                        ? "/icons/close.svg"
                        : `/icons/search_dark.svg`
                    }
                    onClick={handleSearchBtnClick}
                  />
                )}

                {loginState ? (
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
                      <ProfileImg
                        img={
                          profileImg
                            ? profileImg
                            : "/images/default_profile.png "
                        }
                        size="31px"
                      />
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

            <Block.RowBox>{isSearchClick && <Search />}</Block.RowBox>
          </S.Nav>
        )}
      </AnimatePresence>
    </>
  );
}
