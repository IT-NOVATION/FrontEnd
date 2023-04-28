import { useSetRecoilState } from "recoil";
import * as S from "./styled";
import { modalIsOpenAtom } from "../../recoil/atoms";
function NaviationBar() {
  const handleLoginClick = () => {
    setModalIsOpen((prev) => !prev);
  };
  const setModalIsOpen = useSetRecoilState(modalIsOpenAtom);
  return (
    <S.Nav>
      <button onClick={handleLoginClick}>로그인/회원가입</button>
    </S.Nav>
  );
}
export default NaviationBar;
