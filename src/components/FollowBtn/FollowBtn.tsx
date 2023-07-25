import * as S from "./style";
import { ILoginState } from "@interfaces/loginState";
import useLoginState from "@hooks/useLoginState";

type Props = {
  isFollowing: boolean;
  userId?: string;
};

export default function FollowBtn({ isFollowing, userId }: Props) {
  const { userId: loginUserId }: ILoginState = useLoginState();

  return (
    <S.Button isFollowing={isFollowing}>
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
