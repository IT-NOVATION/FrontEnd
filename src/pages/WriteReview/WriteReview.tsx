import * as S from "./style";
import NaviationBar from "components/NavigationBar/NavigationBar";
import { Block, Poster, Text } from "styles/UI";
import ReviewEditor from "components/ReviewEditor/ReviewEditor";
import { useState } from "react";
import { createPost } from "apis/test";
import { useNavigate } from "react-router-dom";
import StarRating from "components/StarRating/StarRating";

const MovieTestData = {
  imageUrl: "/testImages/movieImg.png",
  title: "가디언즈 오브 갤럭시 3",
  date: "2023.05.16",
};

function WriteReview() {
  const navigate = useNavigate();

  const [title, setTitle] = useState(""); //제목
  const [score, setScore] = useState(0);
  const [content, setContent] = useState(""); //내용
  const [date, setDate] = useState(""); //관람일
  console.log(score);
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);

  const handleSubmit = async () => {
    //제출
    const date = new Date();
    try {
      await createPost({
        title,
        content,
        date,
      }).then((res) => console.log(res));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NaviationBar />

      {/* 헤더 */}
      <Block.ColumnBox
        width="100vw"
        height="200px"
        bgColor="#F8F8F8"
        alignItems="center"
      >
        <Block.ColumnBox width="887px" margin="70px 0 0 0">
          <Text.Title1 color="darkGray">
            <S.TitleInput
              onChange={handleTitleChange}
              type="text"
              placeholder="리뷰 제목"
            />
          </Text.Title1>
          <Block.RowBox margin="22px 0 0 0">
            <Text.Body3 color="darkGray" margin="0 27px 0 0 ">
              {MovieTestData.title}
            </Text.Body3>
            <Text.Body3 color="darkGray">{MovieTestData.date}</Text.Body3>
          </Block.RowBox>
        </Block.ColumnBox>
      </Block.ColumnBox>

      <Block.PageWrapper>
        <Block.PageLayout>
          <Block.RowBox width="887px" height="233px" margin="40px 25px 50px 0">
            <Poster.Poster src={MovieTestData.imageUrl} size="sm" />
            <Block.ColumnBox>
              <Block.ColumnBox>
                <Text.Body4>별점</Text.Body4>
                <StarRating setParentScore={setScore} />
              </Block.ColumnBox>
            </Block.ColumnBox>
          </Block.RowBox>

          {/* 에디터 */}
          <ReviewEditor setContent={setContent} />
        </Block.PageLayout>
      </Block.PageWrapper>
    </>
  );
}

export default WriteReview;
