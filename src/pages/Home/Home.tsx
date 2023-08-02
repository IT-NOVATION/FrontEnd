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
        <meta name="keywords" content="나만의 영화를 기록하는 시간" />
        <meta
          name="description"
          content="It's Movie Time: 나만의 영화를 기록하는 시간"
        />
        <meta property="og:url" content="http://its-movietime.com" />
        <meta property="og:title" content="It's Movie Time" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`/icons/logo.svg`} />
        <meta property="og:description" content="나만의 영화를 기록하는 시간" />
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
