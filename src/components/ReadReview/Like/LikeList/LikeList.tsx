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
      <Block.ColumnBox
        width="355px"
        height="440px"
        padding="20px 20px 20px 20px"
        border="1px solid #F8F8F8"
        boxShadow="4px 4px 10px 0px rgba(204, 204, 204, 0.47)"
        bgColor="white"
        borderRadius="20px"
        zIndex="2"
        alignItems="flex-start"
      >
        {likeList?.map((v) => (
          <UserBox key={v.userId} user={v} />
        ))}
      </Block.ColumnBox>
    </Block.ModalLayout>
  );
}
