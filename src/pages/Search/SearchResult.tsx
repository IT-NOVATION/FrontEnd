import Search from "@components/Search/Search";
import { Block } from "@styles/UI";

export default function SearchResult() {
    return (
        <>
            <Block.ColumnBox width="100vw" height="100vh" bgColor="white" alignItems="center">
                <Block.RowBox width="900px" height="300px" padding="106px 0" bgColor="white">
                    {/* <Search /> */}
                </Block.RowBox>

                <Block.RowBox>
                    <div> 검색 결과 나오는 부분</div>
                </Block.RowBox>
            </Block.ColumnBox>
        </>
    );
}
