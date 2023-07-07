import Banner from "@components/Home/Banner/Banner";
import Posters from "@components/Home/Posters/Posters";
import { Block } from "@styles/UI";

function Home() {
  return (
    <>
      <Block.PageLayout>
        <Block.PageWrapper>
          <Block.RowBox>
            <Banner />
          </Block.RowBox>
          <Block.RowBox>
            <Posters></Posters>
          </Block.RowBox>
        </Block.PageWrapper>
      </Block.PageLayout>
    </>
  );
}
export default Home;
