import { IMovieResult } from "@interfaces/movieResult";
import { UseQueryResult } from "@tanstack/react-query";
import { Block, Text } from "@styles/UI";

type Props = {
    word: string;
    movieResult: UseQueryResult<IMovieResult, unknown>;
};

export default function MovieResult({ word, movieResult }: Props) {
    return (
        <>
            <Block.ColumnBox alignItems="center" margin="33px 0 0 0">
                <Text.Body1 color="black">
                    <Text.Body1 color="main"> ' {word} ' </Text.Body1> 에 대한 검색 결과는 총{" "}
                    {movieResult.data?.totalSize ? movieResult.data?.totalSize : 0}건 입니다.
                </Text.Body1>
            </Block.ColumnBox>
        </>
    );
}
