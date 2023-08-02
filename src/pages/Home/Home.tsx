import { MainPageApi } from "@apis/mainPageApi";
import Footer from "@components/Footer/Footer";
import Banner from "@components/Home/Banner/Banner";
import Posters from "@components/Home/Posters/Posters";
import ReviewTime from "@components/Home/ReviewTime/ReviewTime";
import { Block } from "@styles/UI";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>It's Movie Time</title>
      </Helmet>
      <Block.PageLayout>
        <Block.PageWrapper>
          <Block.RowBox>
            <Banner />
          </Block.RowBox>
          <Block.RowBox>
            <Posters />
          </Block.RowBox>
          <Block.RowBox>
            <ReviewTime />
          </Block.RowBox>
        </Block.PageWrapper>
        <Footer />
      </Block.PageLayout>
    </>
  );
}
export default Home;
