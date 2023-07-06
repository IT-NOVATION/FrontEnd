import Banner from "@components/Home/Banner/Banner";
import Posters from "@components/Home/Posters/Posters";
import { Block } from "@styles/UI";

function Home() {
    return (
        <>
            <Block.PageLayout>
                <Block.PageWrapper>
                    <Banner />
                    <Posters></Posters>
                </Block.PageWrapper>
            </Block.PageLayout>
        </>
    );
}
export default Home;
