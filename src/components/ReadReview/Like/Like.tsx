import * as S from "./style";
import { Block, Button, Text } from "@styles/UI";

export default function Like({ reviewId }: { reviewId: number }) {
  const handleLikeClick = () => {
    //좋아요 누르기 처리..
  };
  return (
    <Block.RowBox margin="0 0 15px 0" justifyContent="center" gap="13px">
      <Button.Button
        width="131px"
        height="45px"
        borderRadius="80px"
        bgColor="main"
        onClick={handleLikeClick}
      >
        <S.Icon src="/icons/ReadReview/heart_white.svg" />
        <Text.Body4 margin="0 0 0 8px" color="white">
          Like
        </Text.Body4>
      </Button.Button>
      <Button.Button
        width="45px"
        height="45px"
        borderRadius="80px"
        border="0.7px solid #B3B3B3"
        bgColor="white"
      >
        <S.Icon src="/icons/ReadReview/more.svg" />
      </Button.Button>
    </Block.RowBox>
  );
}
