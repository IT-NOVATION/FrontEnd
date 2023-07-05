import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { modalStateAtom } from "@recoil/atoms";
import { useEffect, useState } from "react";
import { Block, Button, Text } from "@styles/UI";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotificationModal from "./NotificationModal/NotificationModal";

export default function NavigationBar() {
    const navigate = useNavigate();
    const handleLoginClick = () => setModalState(1);
    const setModalState = useSetRecoilState(modalStateAtom);
    const [isMain, setIsMain] = useState(false);
    const { pathname } = useLocation();
    const [position, setPosition] = useState(window.scrollY);
    const [isVisible, setIsVisible] = useState<boolean>(true);

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

    const [isNotiClicked, setIsNotiClicked] = useState(false);

    const handleBgClick = () => {
        setIsNotiClicked(false);
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
        if (pathname === "/home") {
            setIsMain(true);
        }
    }, []);

    return (
        <>
            <AnimatePresence initial={false}>
                {isVisible && (
                    <S.Nav
                        isMain={isMain}
                        variants={S.variants}
                        initial="initial"
                        exit="exit"
                        animate="animate"
                        key="nav"
                        transition={{ type: "linear", duration: 0.5 }}
                    >
                        <Block.RowBox width="426px" justifyContent="space-between" alignItems="center">
                            <S.HomeLogo onClick={goToMain} src="/icons/logo.svg" alt="home-logo" />
                            <Text.Body1 onClick={goToFilm} color={isMain ? "white" : "black"} pointer>
                                영화
                            </Text.Body1>
                            <Text.Body1 onClick={goToMovieTalk} color={isMain ? "white" : "black"} pointer>
                                무비토크
                            </Text.Body1>
                        </Block.RowBox>
                        <Block.RowBox width="228px" justifyContent="space-between" alignItems="center">
                            <S.Icons src="/icons/search.svg" alt="search" isMain={isMain} />

                            {isLogin ? (
                                <>
                                    <S.Icons src="/icons/alarm.svg" alt="alarm" isMain={isMain} />
                                    <S.Background onClick={handleBgClick} />
                                    <S.NotificationWrapper>
                                        <NotificationModal />
                                    </S.NotificationWrapper>
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
