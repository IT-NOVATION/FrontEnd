import MovieTalkContent from "@components/MovieTalk/MovieTalkContents/MovieTalkContent/MovieTalkContent";
import { IUserResult } from "@interfaces/userResult";
import { Block, Text } from "@styles/UI";
import { UseQueryResult } from "@tanstack/react-query";

type Props = {
  result: IUserResult;
};

export default function UserResult({ result }: Props) {
  return (
    <Block.ColumnBox alignItems="center" margin="33px 0 0 0">
      {result.userSearchResponseDtoList.map((v) => (
        <MovieTalkContent content={v} />
      ))}
    </Block.ColumnBox>
  );
}
