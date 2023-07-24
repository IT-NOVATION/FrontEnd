import * as S from "./style";
import { MovieLogApi } from "@apis/movieLogApi";
import { ILoginState } from "@interfaces/loginState";
import useLoginState from "@hooks/useLoginState";
import { useQueryClient } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { ModalState, modalStateAtom } from "@recoil/modalAtom";

type Props = {
  isFollowing: boolean;
  userId?: string;
};

export default function FollowBtn({ isFollowing, userId }: Props) {
  const queryClient = useQueryClient();
  const setModalState = useSetRecoilState(modalStateAtom);
  const { loginState, userId: loginUserId }: ILoginState = useLoginState();
  const handleNotLoggedIn = () => {
    setModalState(ModalState.LoginForm);
  };
  const handleClick = async () => {
    if (!loginState) {
      handleNotLoggedIn();
      return;
    }
    await MovieLogApi.follow({
      targetUserId: Number(userId),
    });
    await queryClient.invalidateQueries();
  };

  return (
    <S.Button isFollowing={isFollowing} onClick={handleClick}>
      <S.Text>
        {loginUserId === Number(userId)
          ? "프로필 편집"
          : isFollowing
          ? "팔로잉"
          : "+ 팔로우"}
      </S.Text>
    </S.Button>
  );
}
