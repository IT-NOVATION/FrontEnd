import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { ModalState, modalStateAtom } from "@recoil/modalAtom";

function SocialLoginRedirect() {
  const setModalState = useSetRecoilState(modalStateAtom);
  const queryClient = useQueryClient();
  const { accessToken, refreshToken } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }
    queryClient.invalidateQueries();
    setModalState(ModalState.Off);
    navigate("/");
  }, []);
  return <></>;
}
export default SocialLoginRedirect;
