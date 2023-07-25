import { IMovieResult } from "@interfaces/movieResult";
import { UseQueryResult } from "@tanstack/react-query";
import { Block, Text } from "@styles/UI";
import Poster from "@components/Home/Posters/PostersContainer/Poster/Poster";
import { useState } from "react";

type Props = {
    word: string;
    result: UseQueryResult<IMovieResult, unknown>;
};

export default function MovieResult({ word, result }: Props) {
    const [isLoading, setIsLoading] = useState(Array(5).fill(true));
    const [loadingFinished, setLoadingFinished] = useState(false);

    const [resultData, setResultData] = useState(result);

    const handleLoaded = (idx: number) => {
        setIsLoading(prev => {
            const temp = [...prev];
            temp[idx] = false;
            return temp;
        });
    };
    return (
        <>
            <Block.ColumnBox alignItems="center" margin="33px 0 0 0">
                {resultData ? (
                    <>
                        <Text.Body1 color="black">
                            <Text.Body1 color="main"> ' {word} ' </Text.Body1> 에 대한 검색 결과는 총{" "}
                            {result.data?.totalSize} 건 입니다.
                        </Text.Body1>
                        {/* {result.data?.movieSearchResultList.map((item, idx) => (
                                <Poster
                                    key={item.movieId}
                                    movie={item}
                                    loadingFinished={loadingFinished}
                                    onLoad={() => handleLoaded(idx)}
                                />
                            ))} */}
                    </>
                ) : (
                    <Text.Body1 color="black">
                        <Text.Body1 color="main"> ' {word} ' </Text.Body1> 에 대한 검색 결과는 총 0 건 입니다.
                    </Text.Body1>
                )}
            </Block.ColumnBox>
        </>
    );
}
