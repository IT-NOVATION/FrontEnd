import { useRecoilState } from "recoil";
import * as S from "./style";
import { modalIsOpenAtom } from "../../recoil/atoms";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import SignupForm from "./SignupForm/SignupForm";
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
              <button onClick={handleModalClose}>X</button>
              {isSigningup ? (
                <SignupForm setIsSigningup={setIsSigningup} />
              ) : (
                //로그인 폼
                <button onClick={handleSignupClick}>회원가입</button>
              )}
            </S.Container>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
export default Modal;
