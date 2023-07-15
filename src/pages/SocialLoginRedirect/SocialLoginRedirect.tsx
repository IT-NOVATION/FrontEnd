import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

function SocialLoginRedirect() {
  const queryClient = useQueryClient();
  const { accessToken, refreshToken } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }
    queryClient.invalidateQueries();
    navigate("/");
  }, []);
  return <></>;
}
export default SocialLoginRedirect;
