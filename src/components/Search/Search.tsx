import { Block, Text } from "@styles/UI";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IMovieResult } from "@interfaces/movieResult";
import { IUserResult } from "@interfaces/userResult";
import { useQuery } from "@tanstack/react-query";
import { SearchResultApi } from "@apis/searchResultApi";
import { ChangeEvent, KeyboardEvent, useRef } from "react";
import SelectOption from "./SelectOption/SelectOption";

type SearchType = "USER" | "MOVIE";

const Keywords = [
    { idx: 1, title: "엘리멘탈" },
    { idx: 2, title: "범죄도시3" },
    { idx: 3, title: "인어공주" },
    { idx: 4, title: "리바운드" },
    { idx: 5, title: "스즈메의 문단속" },
    { idx: 6, title: "더 퍼스트 슬램덩크" },
];

export default function Search() {
    // user 혹은 movie 검색할 수 있는 부분

    const [word, setWord] = useState<string>("");
    const [isSelected, setIsSelected] = useState<SearchType>("MOVIE");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value);
    };
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputEmpty = () => {
        alert("검색어를 입력해주세요.");
    };

    const handleInputSearch = () => {
        navigate("/search-result");
        if (word === "") {
            handleInputEmpty();
        } else {
            if (isSelected === "USER") {
                console.log("검색기준 유저일때 검색어 넘기기");
            } else if (isSelected === "MOVIE") {
                console.log("검색기준 영화일때 검색어 넘기기");
            }
            console.log(word);
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleInputSearch();
        }
    };

    const { data: movieResult } = useQuery<IMovieResult>({
        queryKey: ["movieResult"],
        queryFn: async () => await SearchResultApi.getMovieResult(word),
    });

    const { data: userResult } = useQuery<IUserResult>({
        queryKey: ["userResult"],
        queryFn: async () => await SearchResultApi.getUserResult(word),
    });

    return (
        <>
            <Block.ColumnBox width="100%" height="200px" alignItems="center">
                <S.SearchBox>
                    <SelectOption isSelected={isSelected} setIsSelected={setIsSelected} />
                    <S.SearchInput
                        placeholder={isSelected === "USER" ? "닉네임을 입력해보세요." : "영화 제목을 입력해보세요."}
                        onChange={onChange}
                        ref={inputRef}
                        onKeyUp={handleKeyPress}
                    />
                    <Block.RowBox width="48px" justifyContent="center" alignItems="center">
                        <S.Icons src="/icons/search_dark.svg" alt="search" onClick={handleInputSearch} />
                    </Block.RowBox>
                </S.SearchBox>

                <Block.RowBox width="850px" height="148px" margin="20px 0 0 0">
                    <Block.RowBox
                        width="120px"
                        height="39px"
                        bgColor="gray"
                        borderRadius="20px"
                        justifyContent="center"
                        alignItems="center"
                    >
                        인기 검색어
                    </Block.RowBox>
                    <S.KeywordsWrapper>
                        {Keywords.map((e, idx) => {
                            return (
                                <S.Keyword>
                                    <Text.Body2 key={idx} color="darkGray">
                                        # {e.title}
                                    </Text.Body2>
                                </S.Keyword>
                            );
                        })}
                    </S.KeywordsWrapper>
                </Block.RowBox>
            </Block.ColumnBox>
        </>
    );
}
