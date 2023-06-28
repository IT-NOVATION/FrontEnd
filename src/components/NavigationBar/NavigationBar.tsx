import { useSetRecoilState } from "recoil";
import * as S from "./styled";
import { modalStateAtom } from "@recoil/atoms";
import { useEffect, useState } from "react";
import { Block, Button, Text } from "@styles/UI";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
    const navigate = useNavigate();
    const handleLoginClick = () => setModalState(1);
    const setModalState = useSetRecoilState(modalStateAtom);

    const [isLogin, setIsLogin] = useState(true); // 로그인 됐을 때만 알람 표시 보이도록 => 추후에 데이터 받아올 수 있을 때 수정

    const [isMain, setIsMain] = useState(false);
    const [position, setPosition] = useState(window.scrollY);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const goToMain = () => {
        setIsMain(true); // 기본 false라서 홈 눌렀을때 바로 투명배경 적용 안됨 -> 수정해야함
        navigate("/");
    };

    const goToFilm = async () => {
        navigate("/Film");
    };

    const goToMovieTalk = () => {
        navigate("/MovieTalk");
    };

    const goToMovieLog = () => {
        navigate("/MovieLog");
    };

    useEffect(() => {
        const handleScroll = () => {
            const moving = window.scrollY;
            setIsVisible(position > moving);
            setPosition(moving);

            console.log("scroll");
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [position]);

    return (
        <>
            <S.Nav isVisible={isVisible} isMain={isMain}>
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
