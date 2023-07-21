import { loginStateAtom } from "@recoil/loginStateAtom";
import { useRecoilValue } from "recoil";
import * as S from "./style";
import { Button } from "@styles/UI";
import { useQueryClient } from "@tanstack/react-query";
import { MovieLogApi } from "@apis/movieLogApi";

type Props = {
  isFollowing: boolean;
  userId?: string;
};

export default function FollowBtn({ isFollowing, userId }: Props) {
  const queryClient = useQueryClient();
  const handleClick = async () => {
    await MovieLogApi.follow({
      targetUserId: Number(userId),
    });
    await queryClient.invalidateQueries(["movieLog"]);
  };

  const { loginState, userId: loginUserId } = useRecoilValue(loginStateAtom);
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
