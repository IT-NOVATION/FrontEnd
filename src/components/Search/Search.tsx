import { Block, Text } from "@styles/UI";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IMovieResult } from "@interfaces/movieResult";
import { IUserResult } from "@interfaces/userResult";
import { useQuery } from "@tanstack/react-query";
import { SearchResultApi } from "@apis/searchResultApi";
import { ChangeEvent, KeyboardEvent, useRef } from "react";
import useHovered from "@hooks/useHovered";
import { useParams } from "react-router-dom";

import queryString from "query-string";

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
    // 영화나 유저 중 선택 -> input 창에 검색어 입력
    // 검색 클릭 시 위의 내용 전달하고 그에 대한 정보 요청하기

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSelected, setIsSelected] = useState<SearchType>("MOVIE");
    const { isHovered: isUserHovered, handleHover: handleUserHover, handleLeave: handleUserLeave } = useHovered();
    const { isHovered: isMovieHovered, handleHover: handleMovieHover, handleLeave: handleMovieLeave } = useHovered();
    const handleShowDropdownMenu = () => {
        setIsOpen(prev => !prev);
    };
    const handleSelectOption = (to: SearchType) => {
        setIsSelected(to); // 영화 선택했으면 영화 보내고, 유저 선택했으면 유저 보내기
        console.log(isSelected);
    };

    const [word, setWord] = useState<string>("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value);
    };
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInputEmpty = () => {
        alert("검색어를 입력해주세요.");
    };

    // 유저 검색하고 싶을 때 함수
    const UserRequestCase = (word: string) => {
        if (word === nickname) console.log("해당 유저 있음");
        // 입력한 단어 word 가 USER 목록 안에 있다면
        // SearchResultApi.getUserResult(word);
    };

    const MovieRequestCase = (word: string) => {
        if (word === movieTitle) console.log("해당 영화 있음");
        // 입력한 단어 word 가 MOVIE 목록 안에 있다면
        // SearchResultApi.getMovieResult(word);
    };

    // 영화 검색하고 싶을 때 함수

    const handleSubmit = () => {
        navigate("/search-result");
        if (word === "") {
            handleInputEmpty();
            console.log(query);
        } else {
            if (isSelected === "USER") {
                UserRequestCase(word);
                console.log(query);
            }
            if (isSelected === "MOVIE") {
                MovieRequestCase(word);
                console.log(query);
            }
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const { nickname } = useParams();
    const { movieTitle } = useParams();

    const { data: userResult } = useQuery<IUserResult>({
        queryKey: ["userResult"],
        queryFn: async () => await SearchResultApi.getUserResult(word),
    });

    const { data: movieResult } = useQuery<IMovieResult>({
        queryKey: ["movieResult"],
        queryFn: async () => await SearchResultApi.getMovieResult(word),
    });

    const query = queryString.parse(window.location.search);

    return (
        <>
            <Block.ColumnBox width="100%" height="200px" alignItems="center">
                <S.SearchBox>
                    {/* {SelectOption 파일 가져온 부분, 여기부터} */}
                    <>
                        <S.DropdownMenuWrapper onClick={handleShowDropdownMenu}>
                            {isOpen ? (
                                <>
                                    <S.OpenDropdown>
                                        <Block.ColumnBox
                                            height="120px"
                                            justifyContent="space-evenly"
                                            alignItems="center"
                                            bgColor="white"
                                        >
                                            <S.HoverMenu
                                                isHovered={isMovieHovered}
                                                onMouseEnter={handleMovieHover}
                                                onMouseLeave={handleMovieLeave}
                                                onClick={() => handleSelectOption("MOVIE")}
                                            >
                                                <Text.Body1>영화</Text.Body1>
                                            </S.HoverMenu>
                                            <S.HoverMenu
                                                isHovered={isUserHovered}
                                                onMouseEnter={handleUserHover}
                                                onMouseLeave={handleUserLeave}
                                                onClick={() => handleSelectOption("USER")}
                                            >
                                                <Text.Body1>유저</Text.Body1>
                                            </S.HoverMenu>
                                        </Block.ColumnBox>
                                    </S.OpenDropdown>
                                </>
                            ) : (
                                <Block.RowBox justifyContent="center">
                                    <Text.Body1>{isSelected === "MOVIE" ? "영화" : "유저"}</Text.Body1>
                                </Block.RowBox>
                            )}
                            <S.DropBtn onClick={handleShowDropdownMenu}>
                                <S.DropdownImg
                                    src="/icons/dropdown-arrow.svg"
                                    alt="dropdown-icon"
                                    onClick={handleShowDropdownMenu}
                                    onMouseEnter={handleUserHover}
                                    onMouseLeave={handleUserLeave}
                                />
                            </S.DropBtn>
                        </S.DropdownMenuWrapper>
                    </>

                    {/* {SelectOption 파일 가져온 부분, 여기까지} */}

                    <S.SearchInput
                        placeholder={isSelected === "USER" ? "닉네임을 입력해보세요." : "영화 제목을 입력해보세요."}
                        onChange={onChange}
                        ref={inputRef}
                        onKeyUp={handleKeyPress}
                    />
                    <Block.RowBox width="48px" justifyContent="center" alignItems="center">
                        <S.Icons src="/icons/search_dark.svg" alt="search" onClick={handleSubmit} />
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
