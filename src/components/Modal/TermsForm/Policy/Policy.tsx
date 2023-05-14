import { useSetRecoilState } from "recoil";
import { modalStateAtom } from "@recoil/atoms";

function Policy() {
    const setModalState = useSetRecoilState(modalStateAtom);
    const handleGoBackClick = () => setModalState(2);
    return (
        <div>
            <h1>개인정보 처리방침...</h1>
            <button onClick={handleGoBackClick}>x</button>
        </div>
    );
}
export default Policy;
