import Badge from "@components/Profile/Badge/Badge";
import { Block, Text, Button } from "@styles/UI";

const User = {
  userId: "1",
  background:
    "https://cdn.pixabay.com/photo/2015/09/21/14/46/banner-949931_1280.jpg",
  nickname: "삼동맘",
  introduction: "퇴근 후 삼동이랑 영화보는 일상",
  grade: "VIP",
  profileImg:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
  followers: 231,
  following: 111,
  reviews: [{}],
};
function MovieLog() {
  // parameter에 담긴 유저 아이디를 통해 유저의 무비로그 서버에 요청..

  return (
    <>
      <Block.ColumnBox
        background={`url(${User.background})`}
        width="100vw"
        height="196px"
      ></Block.ColumnBox>
      <Block.PageWrapper>
        <Block.PageLayout>
          <Block.ProfileImg
            width="208px"
            height="208px"
            background={`url(${User.profileImg})`}
          />
          <Block.RowBox width="900px" margin="85px 0 0 0" alignItems="flex-end">
            <Text.Title3 margin="0 16px 0 0">{User.nickname}</Text.Title3>
            <Text.Body1 margin="0 410px 0 0">{User.introduction}</Text.Body1>
            <Button.Button
              width="94px"
              height="33px"
              border=" 1px solid #CCC"
              borderRadius="16.5px"
              bgColor="white"
            >
              프로필 수정
            </Button.Button>
          </Block.RowBox>
          <Block.RowBox width="100%" margin="30px 0 0 0" alignItems="center">
            <Badge grade="VIP" />
            <Block.RowBox width="auto" margin="0 0 0 12px" alignItems="center">
              <Text.Body4 margin="0 4px 0 0">팔로워</Text.Body4>
              <Text.Body1 margin="0 4px 0 0">{User.followers}</Text.Body1>
            </Block.RowBox>
            <Block.RowBox width="auto" margin="0 0 0 25px" alignItems="center">
              <Text.Body4 margin="0 4px 0 0">팔로잉</Text.Body4>
              <Text.Body1 margin="0 4px 0 0">{User.following}</Text.Body1>
            </Block.RowBox>
          </Block.RowBox>
        </Block.PageLayout>
      </Block.PageWrapper>
    </>
  );
}
export default MovieLog;
