import Banner from "@components/Home/Banner/Banner";
import Posters from "@components/Home/Posters/Posters";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import { Block } from "@styles/UI";

function Home() {
    return (
        <>
            <Block.PageLayout>
                <Block.PageWrapper bgColor="black">
                    <NavigationBar />
                    <Banner></Banner>
                    <Posters></Posters>
                </Block.PageWrapper>
            </Block.PageLayout>
        </>
    );
}
export default Home;
