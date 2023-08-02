import Search, { SearchType } from "@components/Search/Search";
import { Block, Text } from "@styles/UI";

import { IMovieResult } from "@interfaces/movieResult";
import { IUserResult } from "@interfaces/userResult";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { SearchResultApi } from "@apis/searchResultApi";
import MovieResult from "@components/Search/MovieResult/MovieResult";
import UserResult from "@components/Search/UserResult/UserResult";
import { Helmet } from "react-helmet";

type Params = {
  type: SearchType;
  searchValue: string;
};

export default function SearchResult() {
  const { type, searchValue } = useParams() as Params;
  const { data: movieSearchResult } = useQuery<IMovieResult>({
    queryKey: ["movieSearchResult", `${searchValue}`],
    queryFn: () => SearchResultApi.getMovieResult(searchValue),
    enabled: type === "MOVIE",
  });
  const { data: userSearchResult } = useQuery<IUserResult>({
    queryKey: ["userSearchResult", `${searchValue}`],
    queryFn: () => SearchResultApi.getUserResult(searchValue),
    enabled: type === "USER",
  });
  return (
    <>
      <Helmet>
        <title>검색결과: {searchValue}</title>
      </Helmet>
      <Block.ColumnBox width="100vw" alignItems="center">
        <Block.RowBox height="100%" padding="120px 0 0 0">
          <Search initialType={type} />
        </Block.RowBox>
        <Block.Bar
          margin="20px 0 0 0"
          width="900px"
          height="1px"
          bgColor="gray"
        />
        <Block.RowBox justifyContent="center" margin="54px 0 20px 0">
          <Text.Title5>
            '<Text.Title5 color="main">{searchValue}</Text.Title5>'에 대한검색
            결과는 총{" "}
            <Text.Title5 color="main">
              {type === "MOVIE"
                ? movieSearchResult?.totalSize
                : userSearchResult?.totalSize}
              건 입니다.
            </Text.Title5>
          </Text.Title5>
        </Block.RowBox>
        <Block.RowBox width="900px" justifyContent="center" alignItems="center">
          {type === "MOVIE" && movieSearchResult && (
            <MovieResult result={movieSearchResult} />
          )}
          {type === "USER" && userSearchResult && (
            <UserResult result={userSearchResult} />
          )}
        </Block.RowBox>
      </Block.ColumnBox>
    </>
  );
}
