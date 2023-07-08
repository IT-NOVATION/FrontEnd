import { useSetRecoilState } from "recoil";
import { ModalState, modalStateAtom } from "@recoil/atoms";

function Terms() {
  const setModalState = useSetRecoilState(modalStateAtom);
  const handleGoBackClick = () => setModalState(ModalState.TermsForm);
  return (
    <div>
      <h1>이용약관....</h1>
      <button onClick={handleGoBackClick}>x</button>
    </div>
  );
}
export default Terms;
