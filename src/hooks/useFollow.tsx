import { ModalState, modalStateAtom } from "@recoil/modalAtom";
import { useSetRecoilState } from "recoil";
import useLoginState from "./useLoginState";

export default function useFollow(mutateFn: () => void) {
  const setModalState = useSetRecoilState(modalStateAtom);
  const { loginState } = useLoginState();
  const handleNotLoggedIn = () => {
    setModalState(ModalState.LoginForm);
  };
  const handleFollowClick = async () => {
    if (!loginState) {
      handleNotLoggedIn();
      return;
    }
    mutateFn();
  };
  return handleFollowClick;
}
