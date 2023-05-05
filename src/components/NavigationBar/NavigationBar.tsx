import { useSetRecoilState } from "recoil";
import * as S from "./styled";
import { modalStateAtom } from "../../recoil/atoms";
function NaviationBar() {
  const handleLoginClick = () => setModalState(1);

  const setModalState = useSetRecoilState(modalStateAtom);
  return (
    <S.Nav>
      <button onClick={handleLoginClick}>로그인/회원가입</button>
    </S.Nav>
  );
}
export default NaviationBar;
