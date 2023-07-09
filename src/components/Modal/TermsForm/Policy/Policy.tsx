import { useSetRecoilState } from "recoil";
import { ModalState, modalStateAtom } from "@recoil/modalAtom";

function Policy() {
  const setModalState = useSetRecoilState(modalStateAtom);
  const handleGoBackClick = () => setModalState(ModalState.TermsForm);
  return (
    <div>
      <h1>개인정보 처리방침...</h1>
      <button onClick={handleGoBackClick}>x</button>
    </div>
  );
}
export default Policy;
