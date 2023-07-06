import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { IBestReview } from "@interfaces/bestReview";
import { Block, Button, Text } from "@styles/UI";
import * as S from "./style";

function BestReview({ bestReview }: { bestReview: IBestReview }) {
  return (
    <S.BestReviewContainer>
      <ProfileImg img={bestReview.profileImg} size="118px" />
      <Block.ColumnBox width="auto" margin="0 0 0 10px">
        <Block.RowBox
          margin="5px 0 0 0"
          width="317px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text.Title4>{bestReview.nickName}</Text.Title4>
          <Button.Button
            width="94px"
            height="33px"
            border="1px solid #CCC"
            borderRadius="16.5px"
            bgColor="white"
          >
            <Text.Body4 color="lightBlack">팔로우 하기</Text.Body4>
          </Button.Button>
        </Block.RowBox>
        <Block.RowBox margin="24px 0 0 0" alignItems="center">
          <Text.Body3 lineHeight="1.2" color="lightBlack">
            {bestReview.introduction}
          </Text.Body3>
        </Block.RowBox>
      </Block.ColumnBox>
      <Block.RowBox width="auto" margin="0 0 0 48px">
        {bestReview.reviews.map((v) => (
          <Block.ColumnBox width="auto" margin="0 20px 0 0" key={v.reviewId}>
            <S.Poster img={v.movie.movieImg} />
            <Block.RowBox justifyContent="center">
              <Text.Body3 margin="10px 0 0 0" color="lightBlack">
                {v.reviewTitle}
              </Text.Body3>
            </Block.RowBox>
          </Block.ColumnBox>
        ))}
      </Block.RowBox>
    </S.BestReviewContainer>
  );
}
export default BestReview;
