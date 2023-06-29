import Banner from "@components/Home/Banner/Banner";
import Posters from "@components/Home/Posters/Posters";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import { Block } from "@styles/UI";

function Home() {
  return (
    <>
      <Block.PageLayout>
        <Block.PageWrapper>
          <NavigationBar />
          <Banner />
          <Posters></Posters>
          {/* 스크롤 확인용 */}
        </Block.PageWrapper>
        <div style={{ height: "1000vh" }}></div>
      </Block.PageLayout>
    </>
  );
}
export default Home;
