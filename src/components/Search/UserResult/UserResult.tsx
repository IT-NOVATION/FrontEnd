import { IUserResult } from "@interfaces/userResult";
import { Block, Text } from "@styles/UI";
import { UseQueryResult } from "@tanstack/react-query";

type Props = {
    word: string;
    userResult: UseQueryResult<IUserResult, unknown>;
};

export default function UserResult({ word, userResult }: Props) {
    return (
        <>
            <Block.ColumnBox alignItems="center" margin="33px 0 0 0">
                <Text.Body1 color="black">
                    <Text.Body1 color="main"> ' {word} ' </Text.Body1> 에 대한 검색 결과는 총{" "}
                    {userResult.data?.totalSize ? userResult.data?.totalSize : 0}건 입니다.
                </Text.Body1>
            </Block.ColumnBox>
        </>
    );
}
