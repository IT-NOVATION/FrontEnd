import * as S from "./style";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { Block, Button, Text } from "@styles/UI";
import { IMovieTalkUser } from "@interfaces/user";

function MovieTalkContent({ content }: { content: IMovieTalkUser }) {
  const handleReviewClick = (reviewId: number) => {
    window.location.href = `/review/${reviewId}`;
  };
  const handleUserClick = (userId: number) => {
    window.location.href = `/movieLog/${userId}`;
  };
  return (
    <S.ContentContainer>
      <ProfileImg img={content.profileImg} size="118px" />
      <Block.ColumnBox width="auto" margin="0 0 0 10px">
        <Block.RowBox
          margin="5px 0 0 0"
          width="317px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text.Title4 pointer onClick={() => handleUserClick(content.userId)}>
            {content.nickName}
          </Text.Title4>
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
            {content.introduction}
          </Text.Body3>
        </Block.RowBox>
      </Block.ColumnBox>
      <Block.RowBox width="auto" margin="0 0 0 48px">
        {content.reviews.slice(0, 2).map((v) => (
          <Block.ColumnBox
            width="auto"
            margin="0 20px 0 0"
            key={v.reviewId}
            onClick={() => handleReviewClick(v.reviewId)}
            pointer
          >
            <S.Poster img={v.movie.movieImg} />
            <Block.RowBox justifyContent="center">
              <Text.Body3 margin="10px 0 0 0" color="lightBlack">
                {v.reviewTitle}
              </Text.Body3>
            </Block.RowBox>
          </Block.ColumnBox>
        ))}
      </Block.RowBox>
    </S.ContentContainer>
  );
}
export default MovieTalkContent;
