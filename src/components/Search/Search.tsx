import { Block, Text } from "@styles/UI";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import SelectOption from "./SelectOption/SelectOption";
import { useState } from "react";

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

    return (
        <>
            <Block.ColumnBox width="100%" height="200px" alignItems="center">
                <S.SearchBox width="900px" height="62px" margin="0">
                    <SelectOption word={word} setWord={setWord} />

                    <Block.RowBox width="48px" justifyContent="center" alignItems="center">
                        <S.Icons src="/icons/search.svg" alt="search" onClick={handleInputSearch} />
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
