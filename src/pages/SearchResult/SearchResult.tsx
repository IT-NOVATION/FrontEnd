import Search from "@components/Search/Search";
import { Block } from "@styles/UI";

import { IMovieResult } from "@interfaces/movieResult";
import { IUserResult } from "@interfaces/userResult";
import { useParams } from "react-router-dom";

export default function SearchResult() {
    // const { nickname } = useParams();
    // const { movieTitle } = useParams();

    return (
        <>
            <Block.ColumnBox width="100vw" alignItems="center">
                <Block.RowBox height="100%" padding="120px 0 0 0">
                    <Search />
                </Block.RowBox>

                <Block.RowBox
                    width="900px"
                    height="30vw"
                    bgColor="white"
                    justifyContent="center"
                    alignItems="center"
                ></Block.RowBox>
            </Block.ColumnBox>
        </>
    );
}

// 영화결과, 유저결과 가져와서 뿌려주기만 하는 곳
