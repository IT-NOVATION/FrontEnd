import { ILoginState } from "@interfaces/loginState";
import { useQueryClient } from "@tanstack/react-query";

export default function useLoginState() {
  const queryClient = useQueryClient();
  const loginState = queryClient.getQueryData<ILoginState>(["loginState"]);

  return loginState?.loginState
    ? {
        loginState: loginState.loginState,
        userId: loginState.userId,
        nickname: loginState.nickname,
        profileImg: loginState.profileImg,
      }
    : {
        loginState: false,
        userId: null,
        nickname: null,
        profileImg: null,
      };
}
