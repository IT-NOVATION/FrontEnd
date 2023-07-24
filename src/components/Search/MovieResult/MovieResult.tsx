import { SearchResultApi } from "@apis/searchResultApi";
import { IMovieResult } from "@interfaces/movieResult";
import { useQuery } from "@tanstack/react-query";
import { Block, Text } from "@styles/UI";

type Props = {
    word: string;
};

export default function MovieResult({ word }: Props) {
    const { data: movieResult } = useQuery<IMovieResult>({
        queryKey: ["movieResult"],
        queryFn: async () => await SearchResultApi.getMovieResult(word),
    });
    return (
        <>
            <Block.ColumnBox alignItems="center" margin="33px 0 0 0">
                <Text.Body1 color="black">
                    <Text.Body1 color="main"> ' {word} ' </Text.Body1> 에 대한 검색 결과는 총 건 입니다.
                </Text.Body1>
            </Block.ColumnBox>
        </>
    );
}
