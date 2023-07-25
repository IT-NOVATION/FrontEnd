import { MainPageApi } from "@apis/mainPageApi";
import Banner from "@components/Home/Banner/Banner";
import Posters from "@components/Home/Posters/Posters";
import ReviewTime from "@components/Home/ReviewTime/ReviewTime";
import { Block } from "@styles/UI";
import { Suspense } from "react";

function Home() {
  return (
    <>
      <Suspense>
        <Block.PageLayout>
          <Block.PageWrapper>
            <Block.RowBox>
              <Banner />
            </Block.RowBox>
            <Block.RowBox>{/* <Posters /> */}</Block.RowBox>
            <Block.RowBox>
              <ReviewTime />
            </Block.RowBox>
          </Block.PageWrapper>
        </Block.PageLayout>
      </Suspense>
    </>
  );
}
export default Home;
