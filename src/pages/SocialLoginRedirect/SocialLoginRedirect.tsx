import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SocialLoginRedirect() {
  const { accessToken, refreshToken } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }
    navigate("/");
  }, []);
  return <></>;
}
export default SocialLoginRedirect;
