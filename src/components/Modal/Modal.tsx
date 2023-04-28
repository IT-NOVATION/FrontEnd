import { useRecoilState } from "recoil";
import * as S from "./style";
import { modalIsOpenAtom } from "../../recoil/atoms";
import { AnimatePresence } from "framer-motion";
function Modal() {
  const [modalIsOpen, setModalIsOpen] = useRecoilState(modalIsOpenAtom);
  const handleModalClose = () => setModalIsOpen(false);
  return (
    <>
      <AnimatePresence>
        {modalIsOpen && (
          <>
            <S.Background onClick={handleModalClose}></S.Background>
            <S.Container
              initial={{ opacity: 0.2, x: 500 }}
              transition={{ ease: "linear", duration: 0.3 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.2, x: 500 }}
            >
              <button onClick={handleModalClose}>X</button>
            </S.Container>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
export default Modal;
