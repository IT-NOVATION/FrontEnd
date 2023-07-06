import Search from "@components/Search/Search";
import { Block } from "@styles/UI";

export default function SearchResult() {
    return (
        <>
            <Block.ColumnBox width="100vw" alignItems="center">
                <Block.RowBox height="100%" padding="120px 0 0 0">
                    <Search />
                </Block.RowBox>
                <Block.Bar width="900px" height="1px" bgColor="gray" />
                <Block.RowBox width="900px" height="30vw" bgColor="white" justifyContent="center" alignItems="center">
                    <div> 검색 결과 나오는 부분</div>
                </Block.RowBox>
            </Block.ColumnBox>
        </>
    );
}
