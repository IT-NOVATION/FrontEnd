import { useRecoilState } from "recoil";
import * as S from "./style";
import { modalStateAtom } from "../../recoil/atoms";
import { AnimatePresence } from "framer-motion";
import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";
import { CgClose } from "react-icons/cg";
import TermsForm from "./TermsForm/TermsForm";
import AddProfileForm from "./AddProfileForm/AddProfileForm";
import Terms from "./TermsForm/Terms/Terms";
import Policy from "./TermsForm/Policy/Policy";
import { Text } from "../../styles/UI";

function Modal() {
  const [modalState, setModalState] = useRecoilState<number>(modalStateAtom);
  const handleModalClose = () => setModalState(0);

  const handleSignupClick = () => setModalState(2);
  return (
    <>
      <AnimatePresence>
        {modalState && (
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
              <Text.Title3 lineHeight="41px" margin="87px 0 0 0">
                It’s MOVIE TIME에{"\n"}오신 것을 환영합니다.
              </Text.Title3>
              {modalState === 1 ? (
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
              ) : modalState === 2 ? (
                <TermsForm />
              ) : modalState === 3 ? (
                <SignupForm />
              ) : modalState === 4 ? (
                <AddProfileForm />
              ) : modalState === 5 ? (
                <Terms />
              ) : (
                modalState === 6 && <Policy />
              )}
            </S.Container>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
export default Modal;
