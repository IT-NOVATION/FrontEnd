import { IUserResult } from "@interfaces/userResult";
import { Block, Text } from "@styles/UI";
import { UseQueryResult } from "@tanstack/react-query";

type Props = {
    word: string;
    result: UseQueryResult<IUserResult, unknown>;
};

export default function UserResult({ word, result }: Props) {
    return (
        <>
            <Block.ColumnBox alignItems="center" margin="33px 0 0 0">
                <Text.Body1 color="black">
                    <Text.Body1 color="main"> ' {word} ' </Text.Body1> 에 대한 검색 결과는 총{" "}
                    {result.data?.totalSize ? result.data?.totalSize : 0}건 입니다.
                    {/* 데이터 있을 때 데이터 보여주고, 없으면 검색결과 없음 보여주기 */}
                </Text.Body1>
            </Block.ColumnBox>
        </>
    );
}
