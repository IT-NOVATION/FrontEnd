import { Block, Text } from "@styles/UI";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

type Props = {
    setWord: React.Dispatch<React.SetStateAction<string>>;
    word: string;
};

type SearchType = "USER" | "MOVIE";

export default function SelectOption({ word, setWord }: Props) {
    const navigate = useNavigate();
    const [isUserHovered, setIsUserHovered] = useState(false);
    const handleUserHover = () => {
        setIsUserHovered(true);
    };
    const handleUserLeave = () => {
        setIsUserHovered(false);
    };

    const [isMovieHovered, setIsMovieHovered] = useState(false);
    const handleMovieHover = () => {
        setIsMovieHovered(true);
    };
    const handleMovieLeave = () => {
        setIsMovieHovered(false);
    };

    const [isSelected, setIsSelected] = useState<SearchType>("USER");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleShowDropdownMenu = () => {
        console.log(isOpen);
        setIsOpen(prev => !prev);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputSearch = () => {
        navigate("/search-result");
        if (word === "") {
            console.log(word);
            return alert("검색어를 입력해주세요.");
        } else {
            console.log(word);
        }
        // 검색 word 넘기기
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleInputSearch();
        }
    };

    // 선택된 검색 기준 주고받기

    const handleOptionClick = (to: SearchType) => {
        setIsSelected(to);
        if (isSelected === "USER") {
            console.log("유저 클릭함에 따른 정보 보여주기 함수 추가");
        } else if (isSelected === "MOVIE") {
            console.log("영화 클릭함에 따른 정보 보여주기 함수 추가");
        }
    };

    return (
        <>
            <Block.RowBox pointer>
                <S.DropdownMenuWrapper onClick={handleShowDropdownMenu}>
                    {isOpen ? (
                        <>
                            <S.OpenDropdown>
                                <Block.RowBox alignItems="flex-start">
                                    <Block.ColumnBox
                                        height="120px"
                                        justifyContent="space-evenly"
                                        alignItems="center"
                                        bgColor="white"
                                    >
                                        <S.HoverMenu
                                            isHovered={isUserHovered}
                                            onMouseEnter={handleUserHover}
                                            onMouseLeave={handleUserLeave}
                                            onClick={() => handleOptionClick("USER")}
                                        >
                                            <Text.Body1>유저</Text.Body1>
                                        </S.HoverMenu>
                                        <S.HoverMenu
                                            isHovered={isMovieHovered}
                                            onMouseEnter={handleMovieHover}
                                            onMouseLeave={handleMovieLeave}
                                            onClick={() => handleOptionClick("MOVIE")}
                                        >
                                            <Text.Body1>영화</Text.Body1>
                                        </S.HoverMenu>
                                    </Block.ColumnBox>
                                </Block.RowBox>
                            </S.OpenDropdown>
                        </>
                    ) : (
                        <Block.RowBox justifyContent="center">
                            <Text.Body1>{isSelected === "USER" ? "유저" : "영화"}</Text.Body1>
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

                <S.SearchInput
                    width="704px"
                    height="100%"
                    fontSize="30px"
                    color="black"
                    placeholder={isSelected === "USER" ? "닉네임을 입력해보세요." : "영화 제목을 입력해보세요."}
                    onChange={onChange}
                    ref={inputRef}
                    onKeyUp={handleKeyPress}
                />
            </Block.RowBox>
        </>
    );
}
