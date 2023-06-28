import { useSetRecoilState } from "recoil";
import * as S from "./styled";
import { modalStateAtom } from "@recoil/atoms";
import { useEffect, useState } from "react";
import { Block, Button, Text } from "@styles/UI";

type Props = {
    isMain: boolean;
};

function NaviationBar({ isMain }: Props) {
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

    const [isLogin, setIsLogin] = useState(false); // 로그인 됐을 때만 알람 표시 보이도록

    return (
        <>
            <S.Nav fixed={fixed} overflow={overflow} isMain>
                <Block.RowBox width="426px" justifyContent="space-between" alignItems="center">
                    <img src="/icons/logo.svg" alt="logo" width={185} />
                    <Text.Body1 color={isMain ? "white" : "black"} pointer>
                        영화
                    </Text.Body1>
                    <Text.Body1 color={isMain ? "white" : "black"} pointer>
                        무비토크
                    </Text.Body1>
                </Block.RowBox>
                <Block.RowBox width="228px" justifyContent="space-between" alignItems="center">
                    <S.Icons src="/icons/search.svg" alt="search" color="white" />

                    {isLogin ? (
                        <>
                            <S.Icons src="/icons/alarm.svg" alt="alarm" color="white" />
                            <Block.RowBox
                                width="122px"
                                height="43px"
                                borderRadius="15px"
                                border="1px solid black"
                                bgColor="white"
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <Text.Body3 color="black">무비로그</Text.Body3>
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
export default NaviationBar;
