import * as S from "./style";
import { useQueryClient } from "@tanstack/react-query";
import { MovieLogApi } from "@apis/movieLogApi";
import { ILoginState } from "@interfaces/loginState";

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
    await queryClient.invalidateQueries();
  };

  const loginState = queryClient.getQueryData<ILoginState>(["loginState"]);
  return (
    <S.Button isFollowing={isFollowing} onClick={handleClick}>
      <S.Text>
        {loginState?.userId === Number(userId)
          ? "프로필 편집"
          : isFollowing
          ? "팔로잉"
          : "+ 팔로우"}
      </S.Text>
    </S.Button>
  );
}
