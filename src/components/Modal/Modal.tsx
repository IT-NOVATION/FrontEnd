import { useRecoilState } from "recoil";
import * as S from "./style";
import { modalIsOpenAtom } from "../../recoil/atoms";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";
import { Margin, Text } from "../../components/ui";

function Modal() {
    const [modalIsOpen, setModalIsOpen] = useRecoilState<boolean>(modalIsOpenAtom);
    const [isSigningup, setIsSigningup] = useState<boolean>(false);
    const handleModalClose = () => {
        setModalIsOpen(false);
        setIsSigningup(false);
    };
    const handleSignupClick = () => setIsSigningup(true);
    return (
        <>
            <AnimatePresence>
                {modalIsOpen && (
                    <>
                        <S.Background onClick={handleModalClose}></S.Background>
                        <S.Container
                            initial={{ opacity: 0.2, x: 500 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0.2, x: 500 }}
                        >
                            <button onClick={handleModalClose}>X</button>
                            {isSigningup ? (
                                <SignupForm setIsSigningup={setIsSigningup} />
                            ) : (
                                <>
                                    <LoginForm />
                                    <Margin direction="column" size={21} />
                                    <Text.Body3>비밀번호를 잊어버리셨나요?</Text.Body3>
                                    <Margin direction="column" size={12} />
                                    <Text.Body3>
                                        계정이 없으신가요? <Text.Body3 onClick={handleSignupClick}>회원가입</Text.Body3>
                                    </Text.Body3>
                                    <hr />
                                    <Margin direction="column" size={22} />
                                    <Text.Body3>간편하게 SNS 로그인</Text.Body3>
                                    <Margin direction="column" size={24} />

                                    <S.SnsBox>
                                        <>
                                            <img src={"google.png"} width="68" height="68" alt="구글" />
                                            <Text.Body3>구글</Text.Body3>
                                        </>
                                        <>
                                            <Margin direction="column" size={37} />
                                            <img src={"naver.png"} width="68" height="68" alt="네이버" />
                                            <Text.Body3>네이버</Text.Body3>
                                        </>
                                        <>
                                            <Margin direction="column" size={37} />
                                            <img src={"kakao.png"} width="68" height="68" alt="카카오톡" />
                                            <Text.Body3>카카오</Text.Body3>
                                        </>
                                    </S.SnsBox>
                                </>
                            )}
                        </S.Container>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
export default Modal;
