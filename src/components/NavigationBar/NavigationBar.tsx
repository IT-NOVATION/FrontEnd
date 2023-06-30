import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { modalStateAtom } from "@recoil/atoms";
import { useEffect, useState } from "react";
import { Block, Button, Text, Input } from "@styles/UI";
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
                        <Block.Bar width="100%" height="0.5px" bgColor="gray" margin="21px 0" />
                        <Block.RowBox>
                            {isSearchClick && (
                                <>
                                    <Block.ColumnBox width="100%" height="200px" alignItems="center">
                                        <Block.RowBox width="900px" height="62px">
                                            <Block.RowBox
                                                width="152px"
                                                justifyContent="space-evenly"
                                                alignItems="center"
                                                pointer
                                            >
                                                <Text.Title2 pointer>유저</Text.Title2>
                                                <S.DropdownImg src="/icons/dropdown-arrow.svg" alt="dropdown-icon" />
                                            </Block.RowBox>

                                            <Input.FormInput
                                                width="704px"
                                                height="100%"
                                                fontSize="30px"
                                                color="black"
                                                placeholder="닉네임을 입력해보세요."
                                            />

                                            <Block.RowBox width="48px" justifyContent="center" alignItems="center">
                                                <S.Icons src="/icons/search.svg" alt="search" />
                                            </Block.RowBox>
                                        </Block.RowBox>
                                        <Block.Bar width="900px" height="1px" bgColor="black" margin="0 0 33px 0" />

                                        <Block.RowBox width="900px" height="148px" justifyContent="center">
                                            <Block.RowBox
                                                width="120px"
                                                height="39px"
                                                bgColor="gray"
                                                borderRadius="20px"
                                                justifyContent="center"
                                                alignItems="center"
                                            >
                                                인기 검색어
                                            </Block.RowBox>
                                            <Block.RowBox width="450px" padding="11px 23px">
                                                결과
                                            </Block.RowBox>
                                        </Block.RowBox>
                                    </Block.ColumnBox>
                                </>
                            )}
                        </Block.RowBox>
                    </S.Nav>
                )}
            </AnimatePresence>
        </>
    );
}
