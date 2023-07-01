import { atom } from "recoil";

export const modalStateAtom = atom<number>({
  key: "modalState",
  default: 0,
});

{
  /* 
모달state
0 : 모달 꺼진 상태
1 : 로그인 화면
2 : 회원가입 약관 동의
3 : 회원가입 (이메일, 비밀번호)
4 : 프로필 정보 등록 (닉네임, 한줄 소개)
5 : 이용약관 
6 : 개인정보 처리 방침 
7 : 비밀번호 찾기 페이지 - 인증번호 받기
*/
}
