import { useRecoilState } from "recoil";
import * as S from "./style";
import { modalIsOpenAtom } from "../../recoil/atoms";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";
import { Title3 } from "../../styles/TextStyle";
import { CgClose } from "react-icons/cg";

function Modal() {
  const [modalIsOpen, setModalIsOpen] =
    useRecoilState<boolean>(modalIsOpenAtom);
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
              <S.ExitBtn onClick={handleModalClose}>
                <CgClose size="37" />
              </S.ExitBtn>
              <Title3 margin="87px 0 0 0">
                It’s MOVIE TIME에{"\n"}오신 것을 환영합니다.
              </Title3>
              {isSigningup ? (
                <SignupForm setIsSigningup={setIsSigningup} />
              ) : (
                <>
                  <LoginForm />
                  <h3>비밀번호를 잊어버리셨나요?</h3>
                  <h3>
                    계정이 없으신가요?{" "}
                    <button onClick={handleSignupClick}>회원가입</button>
                  </h3>
                  <hr />
                  <img src={""} width="12" height="12" alt="구글" />
                  <img src={""} width="12" height="12" alt="네이버" />
                  <img src={""} width="12" height="12" alt="카카오톡" />
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
