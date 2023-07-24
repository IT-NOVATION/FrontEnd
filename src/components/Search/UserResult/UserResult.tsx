import { SearchResultApi } from "@apis/searchResultApi";
import { IUserResult } from "@interfaces/userResult";
import { Block, Text } from "@styles/UI";
import { useQuery } from "@tanstack/react-query";

type Props = {
    word: string;
};

export default function UserResult({ word }: Props) {
    const { data: userResult } = useQuery<IUserResult>({
        queryKey: ["userResult"],
        queryFn: async () => await SearchResultApi.getUserResult(word),
    });
    return (
        <>
            <Block.ColumnBox alignItems="center" margin="33px 0 0 0">
                <Text.Body1 color="black">
                    <Text.Body1 color="main"> ' {word} ' </Text.Body1> 에 대한 검색 결과는 총 {}? 건 입니다.
                </Text.Body1>
            </Block.ColumnBox>
        </>
    );
}
