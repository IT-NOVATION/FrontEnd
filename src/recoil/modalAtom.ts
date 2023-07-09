import { atom } from "recoil";

export enum ModalState {
  "Off" = 0,
  "LoginForm",
  "TermsForm",
  "SignupForm",
  "AddProfileForm",
  "Terms",
  "Policy",
  "GetCodeForm",
  "ChangePasswordForm" = 8,
}

export const modalStateAtom = atom<ModalState>({
  key: "modalState",
  default: ModalState.Off,
});
