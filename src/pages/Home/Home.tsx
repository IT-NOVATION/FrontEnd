import Banner from "@components/Home/Banner/Banner";
import Posters from "@components/Home/Posters/Posters";
import NaviationBar from "@components/NavigationBar/NavigationBar";
import { Block } from "@styles/UI";
import { useState } from "react";

function Home() {
    const [isMain, setIsMain] = useState(true); // 메인 페이지일때만 nav 색상 투명에 글꼴 흰색 (아닐때는 nav 흰색에 글꼴 검정색 처리)

    return (
        <>
            <Block.PageLayout>
                <Block.PageWrapper bgColor="black">
                    <NaviationBar isMain />
                    <Banner></Banner>
                    <Posters></Posters>
                </Block.PageWrapper>
            </Block.PageLayout>
        </>
    );
}
export default Home;
