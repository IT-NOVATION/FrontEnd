import Movie from "@components/MovieLog/Movies/Movie/Movie";
import Search from "@components/Search/Search";
import MovieResult from "@components/Search/MovieResult/MovieResult";
import UserResult from "@components/Search/UserResult/UserResult";
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

                    <MovieResult />
                    <UserResult />
                </Block.RowBox>
            </Block.ColumnBox>
        </>
    );
}

// 영화결과, 유저결과 가져와서 뿌려주기만 하는 곳
