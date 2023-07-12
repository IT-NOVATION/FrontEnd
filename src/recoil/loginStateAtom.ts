import { ILoginState } from "@interfaces/loginState";
import { atom } from "recoil";

export const loginStateAtom = atom<ILoginState>({
  key: "loginState",
  default: {
    loginState: false,
    userId: null,
    nickname: null,
    profileImg: null,
  },
});
