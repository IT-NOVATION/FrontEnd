import { Block, Text } from "@styles/UI";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";

const Keywords = [
    { idx: 1, title: "엘리멘탈" },
    { idx: 2, title: "범죄도시3" },
    { idx: 3, title: "인어공주" },
    { idx: 4, title: "리바운드" },
    { idx: 5, title: "스즈메의 문단속" },
    { idx: 6, title: "더 퍼스트 슬램덩크" },
];

export default function Search() {
    const navigate = useNavigate();
    const [word, setWord] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value);
    };

    const handleSearch = () => {
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
            handleSearch();
        }
    };

    return (
        <>
            <Block.ColumnBox width="100%" height="200px" alignItems="center">
                <S.SearchBox width="900px" height="62px" margin="0">
                    <Block.RowBox width="152px" justifyContent="space-evenly" alignItems="center" pointer>
                        <Text.Title2 pointer>유저</Text.Title2>
                        <S.DropdownImg src="/icons/dropdown-arrow.svg" alt="dropdown-icon" />
                    </Block.RowBox>
                    <S.SearchInput
                        width="704px"
                        height="100%"
                        fontSize="30px"
                        color="black"
                        placeholder="닉네임을 입력해보세요."
                        onChange={onChange}
                        ref={inputRef}
                        onKeyPress={handleKeyPress}
                    />

                    <Block.RowBox width="48px" justifyContent="center" alignItems="center">
                        <S.Icons src="/icons/search.svg" alt="search" onClick={handleSearch} />
                    </Block.RowBox>
                </S.SearchBox>

                {/* 수정 */}
                <Block.Bar width="900px" height="0px" bgColor="black" margin="0 0 33px 0" />
                {/* 길게 할까 말까 */}

                <Block.RowBox width="850px" height="148px">
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
