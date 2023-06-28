import { useSetRecoilState } from "recoil";
import * as S from "./styled";
import { modalStateAtom } from "@recoil/atoms";
import { useEffect, useState } from "react";
import { Block, Button, Text } from "@styles/UI";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
    const handleLoginClick = () => setModalState(1);
    const [fixed, setFixed] = useState(false);
    const [overflow, setOverflow] = useState<number>(0);
    window.addEventListener("scroll", e => {
        if (window.scrollY > 0) {
            setFixed(true);
            setOverflow(window.scrollY - 150);
        } else {
            setFixed(false);
        }
    });

    const setModalState = useSetRecoilState(modalStateAtom);

    //

    const [isLogin, setIsLogin] = useState(true); // 로그인 됐을 때만 알람 표시 보이도록

    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/");
    };

    const goToFilm = () => {
        navigate("/Film");
    };

    const goToMovieTalk = () => {
        navigate("/MovieTalk");
    };

    const goToMovieLog = () => {
        navigate("/MovieLog");
    };

    return (
        <>
            <S.Nav fixed={fixed} overflow={overflow} isMain>
                <Block.RowBox width="426px" justifyContent="space-between" alignItems="center">
                    <S.HomeLogo onClick={goToMain} src="/icons/logo.svg" alt="home-logo" />
                    <Text.Body1 onClick={goToFilm} color="white" pointer>
                        영화
                    </Text.Body1>
                    <Text.Body1 onClick={goToMovieTalk} color="white" pointer>
                        무비토크
                    </Text.Body1>
                </Block.RowBox>
                <Block.RowBox width="228px" justifyContent="space-between" alignItems="center">
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
                            <Button.Button onClick={handleLoginClick} width="170px" height="43px" borderRadius="15px">
                                <Text.Body3 color="black">로그인/회원가입</Text.Body3>
                            </Button.Button>
                        </>
                    )}
                </Block.RowBox>
            </S.Nav>
        </>
    );
}
export default NavigationBar;
