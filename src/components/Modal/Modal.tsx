import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { modalIsOpenAtom } from "../../recoil/atoms";
function Modal() {
  const setModalIsOpen = useSetRecoilState(modalIsOpenAtom);
  const handleXClick = () => setModalIsOpen(false);
  return (
    <S.Container>
      <button onClick={handleXClick}>X</button>
    </S.Container>
  );
}
export default Modal;
