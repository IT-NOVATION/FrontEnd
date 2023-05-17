import NaviationBar from "components/NavigationBar/NavigationBar";
import Header from "components/Header/Header";
import { Block, Poster, Text } from "styles/UI";
import ReviewEditor from "components/ReviewEditor/ReviewEditor";

const MovieTestData = {
  imageUrl: "/testImages/movieImg.png",
  title: "가디언즈 오브 갤럭시 3",
  date: "2023.05.16",
};

function WriteReview() {
  return (
    <>
      <NaviationBar />
      <Header />
      <Block.PageWrapper>
        <Block.PageLayout>
          <Block.RowBox width="887px" height="233px" margin="40px 25px 50px 0">
            <Poster.Poster src={MovieTestData.imageUrl} size="sm" />
            <Block.ColumnBox>
              <Block.ColumnBox>
                <Text.Body4>별점</Text.Body4>
              </Block.ColumnBox>
            </Block.ColumnBox>
          </Block.RowBox>
          <ReviewEditor />
        </Block.PageLayout>
      </Block.PageWrapper>
    </>
  );
}

export default WriteReview;
