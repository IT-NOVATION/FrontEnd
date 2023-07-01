import Badge from "@components/User/Badge/Badge";
import ProfileImg from "@components/User/ProfileImg/ProfileImg";
import { Block, Text, Button } from "@styles/UI";
import { useState } from "react";
import * as S from "./style";
import Reviews from "./Reviews/Reviews";
import Movies from "./Movies/Movies";

const User = {
  userId: 1,
  background:
    "https://cdn.pixabay.com/photo/2015/09/21/14/46/banner-949931_1280.jpg",
  nickname: "삼동맘",
  introduction: "퇴근 후 삼동이랑 영화보는 일상",
  grade: "VIP",
  profileImg:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU",
  followers: 231,
  following: 111,
  reviews: [
    {
      reviewId: 1,
      title: "기쁨은 공포보다 강하다",
      star: 4.5,
      text: `<p><img src="https://itsmovietime.s3.ap-northeast-2.amazonaws.com/reviewImgs/1688122269834"></p><p>화를 10분 분량으로 요약해 유튜브에 게시한 이른바 '패스트 영화'와 관련해 최근 일본 도쿄지방재판소에서 벌어진 소송에서는 '배상액 산정 기준'이 핵심 쟁점이 됐다.원고인 13개 영화사들은 유튜브에 배포된 영화의 가격이 보통 400엔(한화 약 3800원) 이상임을 근거로, 패스트영화의 1회 시청 시마다 200엔(한화 약 1900원)의 피해가 발생했다고 주장했다. 재판소는 이같은 산정 방식이 타당하다며 원고들의 손을 들어줬다.</p>`,
      date: "2023.03.15",
      likes: 12,
      comments: 10,
      movie: {
        movieId: 1,
        movieImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
      },
    },
    {
      reviewId: 1,
      title: "기쁨은 공포보다 강하다",
      star: 4.5,
      text: `<p><img src="https://itsmovietime.s3.ap-northeast-2.amazonaws.com/reviewImgs/1688122269834"></p><p>안녕하세요!</p><p>이번 영화는...</p>`,
      date: "2023.03.15",
      likes: 12,
      comments: 10,
      movie: {
        movieId: 1,
        movieImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJLtBFePzhjLi7WrGTU61siaVQ6TsbWxVJA&usqp=CAU",
      },
    },
  ],
};

function MovieLog() {
  // parameter에 담긴 유저 아이디를 통해 유저의 무비로그 서버에 요청..

  const [contents, setContents] = useState<"Reviews" | "InterestedMovies">(
    "Reviews"
  );

  const handleChangeContent = (to: "Reviews" | "InterestedMovies") => {
    setContents(to);
  };

  return (
    <>
      {/* 커버 */}
      <Block.ColumnBox
        background={`url(${User.background})`}
        width="100vw"
        height="196px"
      ></Block.ColumnBox>

      <Block.PageWrapper>
        <Block.PageLayout>
          <Block.AbsoluteBox top="50px">
            <ProfileImg size="208px" img={User.profileImg} />
          </Block.AbsoluteBox>
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
            <Badge grade="VIP" size="29px" />
            {/* <Badge grade="VIP" /> */}
            <Block.RowBox width="auto" margin="0 0 0 12px" alignItems="center">
              <Text.Body4 margin="0 4px 0 0">팔로워</Text.Body4>
              <Text.Body1 margin="0 4px 0 0">{User.followers}</Text.Body1>
            </Block.RowBox>
            <Block.RowBox width="auto" margin="0 0 0 25px" alignItems="center">
              <Text.Body4 margin="0 4px 0 0">팔로잉</Text.Body4>
              <Text.Body1 margin="0 4px 0 0">{User.following}</Text.Body1>
            </Block.RowBox>
          </Block.RowBox>

          {/* 리뷰 or 관심영화 */}
          <Block.RowBox width="900px" margin="70px 0 0 0">
            <S.ContentLabel
              onClick={() => handleChangeContent("Reviews")}
              selected={contents === "Reviews"}
            >
              <Text.Body1>리뷰</Text.Body1>
              <Text.Body1 margin="4px">17</Text.Body1>
            </S.ContentLabel>
            <S.ContentLabel
              onClick={() => handleChangeContent("InterestedMovies")}
              selected={contents === "InterestedMovies"}
            >
              <Text.Body1>관심영화</Text.Body1>
              <Text.Body1 margin="4px">30</Text.Body1>
            </S.ContentLabel>
          </Block.RowBox>
          {contents === "Reviews" ? (
            <Reviews reviews={User.reviews} />
          ) : (
            <Movies />
          )}
        </Block.PageLayout>
      </Block.PageWrapper>
    </>
  );
}
export default MovieLog;
