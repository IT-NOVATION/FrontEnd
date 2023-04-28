import { atom } from "recoil";

export const modalIsOpenAtom = atom<boolean>({
  key: "modalIsOpen",
  default: false,
});
