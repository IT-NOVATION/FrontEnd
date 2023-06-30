import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { modalStateAtom } from "@recoil/atoms";
import { useEffect, useState } from "react";
import { Block, Button, Text } from "@styles/UI";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function NavigationBar() {
    const navigate = useNavigate();
    const handleLoginClick = () => setModalState(1);
    const setModalState = useSetRecoilState(modalStateAtom);
    const [position, setPosition] = useState(window.scrollY);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [isSearchClick, setIsSearchClick] = useState<boolean>(false);

    const handleSearchBtnClick = () => {
        setIsSearchClick(prev => !prev);
        console.log(isSearchClick);
    };

    const [isLogin, setIsLogin] = useState(true); // 로그인 됐을 때만 알람 표시 보이도록 => 추후에 데이터 받아올 수 있을 때 수정

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
                    >
                        <Block.RowBox width="426px" justifyContent="space-between" alignItems="center">
                            <S.HomeLogo onClick={goToMain} src="/icons/logo.svg" alt="home-logo" />
                            <Text.Title3 onClick={goToFilm} color="black" pointer>
                                영화
                            </Text.Title3>
                            <Text.Title3 onClick={goToMovieTalk} color="black" pointer>
                                무비토크
                            </Text.Title3>
                        </Block.RowBox>
                        <Block.RowBox width="228px" justifyContent="space-between" alignItems="center">
                            {isSearchClick ? (
                                <>
                                    <S.Icons src="/icons/close.svg" alt="close" onClick={handleSearchBtnClick} />
                                </>
                            ) : (
                                <>
                                    <S.Icons src="/icons/search.svg" alt="search" onClick={handleSearchBtnClick} />
                                </>
                            )}

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
                                        <Text.Body3 color="black">로그인 / 회원가입</Text.Body3>
                                    </Button.Button>
                                </>
                            )}
                        </Block.RowBox>
                    </S.Nav>
                )}
            </AnimatePresence>
        </>
    );
}
