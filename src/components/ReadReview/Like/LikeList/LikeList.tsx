import { Block } from "@styles/UI";
import * as S from "./style";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ReadReviewApi } from "@apis/readReviewApi";
import { ILikeListUser } from "@interfaces/user";
import UserBox from "./UserBox/UserBox";
type Props = {
  setIsLikeListModalOn: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function LikeList({ setIsLikeListModalOn }: Props) {
  const { reviewId } = useParams();
  const { data: likeList } = useQuery<ILikeListUser[]>({
    queryKey: ["likeList", reviewId],
    queryFn: () => ReadReviewApi.getLikeList(Number(reviewId)),
  });
  const handleBgClick = () => {
    setIsLikeListModalOn(false);
  };
  return (
    <Block.ModalLayout>
      <Block.ModalBg onClick={handleBgClick} />
      <S.Modal>
        <S.ContentsBox>
          {likeList?.map((v) => (
            <UserBox key={v.userId} user={v} />
          ))}
        </S.ContentsBox>
      </S.Modal>
    </Block.ModalLayout>
  );
}
