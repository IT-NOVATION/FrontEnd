import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { modalStateAtom } from "@recoil/modalAtom";
import { useEffect, useState } from "react";
import { Block, Button, Text } from "@styles/UI";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Search from "@components/Search/Search";
import { DefaultThemeColorKey } from "styled-components";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import Dropdown from "./Dropdown/Dropdown";
import { useQueryClient } from "@tanstack/react-query";
import { ILoginState } from "@interfaces/loginState";

export default function NavigationBar() {
  const queryClient = useQueryClient();
  const loginState = queryClient.getQueryData<ILoginState>(["loginState"]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleLoginClick = () => setModalState(1);
  const setModalState = useSetRecoilState(modalStateAtom);
  const [position, setPosition] = useState(window.scrollY);
  const [navTheme, setNavTheme] = useState<"white" | "dark">("dark");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isSearchClick, setIsSearchClick] = useState<boolean>(false);
  const [textColor, setTextColor] = useState<DefaultThemeColorKey>("black");
  const [movieLogHovered, setMovieLogHovered] = useState(false);
  const [dropdownOn, setDropdownOn] = useState(false);

  const handleSearchBtnClick = () => {
    setIsSearchClick((prev) => !prev);
  };
  const handleMovieLogMouseEnter = () => setMovieLogHovered(true);
  const handleMovieLogMouseLeave = () => setMovieLogHovered(false);

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
    navigate("/movieLog/" + loginState?.userId);
  };
  const handleProfileClick = () => setDropdownOn(true);

  useEffect(() => {
    setNavTheme(pathname === "/home" && !isSearchClick ? "dark" : "white");
    setTextColor(pathname === "/home" && !isSearchClick ? "white" : "black");
  }, [isSearchClick, pathname]);

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
          <>
            <S.Nav
              variants={S.variants}
              initial="initial"
              exit="exit"
              animate="animate"
              key="nav"
              transition={{ type: "linear", duration: 0.5 }}
              isSearchClick={isSearchClick}
              navTheme={navTheme}
            >
              {dropdownOn && <Dropdown setDropdownOn={setDropdownOn} />}
              <Block.RowBox>
                <Block.RowBox gap="70px" alignItems="center" height="43px">
                  <S.HomeLogo
                    onClick={goToMain}
                    src="/icons/logo.svg"
                    alt="home-logo"
                  />
                  <Text.Title5 onClick={goToFilm} color={textColor} pointer>
                    무비서치
                  </Text.Title5>
                  <Text.Title5
                    onClick={goToMovieTalk}
                    color={textColor}
                    pointer
                  >
                    무비토크
                  </Text.Title5>
                </Block.RowBox>
                <Block.RowBox
                  alignItems="center"
                  justifyContent="flex-end"
                  height="43px"
                >
                  {pathname !== "/search-result" && (
                    <S.SearchLogo
                      alt="close"
                      src={
                        isSearchClick
                          ? "/icons/close.svg"
                          : navTheme === "white"
                          ? "/icons/search_dark.svg"
                          : "/icons/search_white.svg"
                      }
                      onClick={handleSearchBtnClick}
                    />
                  )}

                  {loginState?.loginState ? (
                    <>
                      <S.AlarmLogo
                        src={
                          navTheme === "white"
                            ? "/icons/alarm_dark.svg"
                            : "/icons/alarm_white.svg"
                        }
                        alt="alarm"
                      />
                      <S.MovieLogBtn
                        width="107px"
                        height="43px"
                        borderRadius="15px"
                        bgColor="white"
                        onClick={goToMovieLog}
                        margin="0 15px 0 0"
                        onMouseEnter={handleMovieLogMouseEnter}
                        onMouseLeave={handleMovieLogMouseLeave}
                        hovered={movieLogHovered}
                        navTheme={navTheme}
                      >
                        <Text.Body3 color="black" pointer>
                          무비로그
                        </Text.Body3>
                      </S.MovieLogBtn>
                      <Block.RowBox
                        width="auto"
                        pointer
                        onClick={handleProfileClick}
                      >
                        <ProfileImg
                          img={
                            loginState?.profileImg
                              ? loginState?.profileImg
                              : "/images/default_profile.png "
                          }
                          size="42px"
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
              {isSearchClick && (
                <Block.RowBox margin="40px 0 0 0">
                  <Search />
                </Block.RowBox>
              )}
            </S.Nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
