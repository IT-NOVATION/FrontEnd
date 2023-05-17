import { useSetRecoilState } from "recoil";
import * as S from "./styled";
import { modalStateAtom } from "recoil/atoms";
import { useState } from "react";
function NaviationBar() {
  const handleLoginClick = () => setModalState(1);
  const [fixed, setFixed] = useState(false);
  const [overflow, setOverflow] = useState<number>(0);
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 150) {
      setFixed(true);
      setOverflow(window.scrollY - 150);
      console.log(overflow);
    } else {
      setFixed(false);
    }
  });
  const setModalState = useSetRecoilState(modalStateAtom);
  return (
    <>
      <S.Nav fixed={fixed} overflow={overflow}>
        <button onClick={handleLoginClick}>로그인/회원가입</button>
      </S.Nav>
    </>
  );
}
export default NaviationBar;
