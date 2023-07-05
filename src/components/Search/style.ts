import { Block, Input } from "@styles/UI";
import styled from "styled-components";

export const Icons = styled.img`
    width: 28px;
    border-radius: 100px;
    cursor: pointer;
    filter: invert(60%);
`;

export const DropdownImg = styled.img`
    width: 28px;
    cursor: pointer;
`;

export const KeywordsWrapper = styled.div`
    width: 850px;
    padding: 11px 35px;
    display: flex;
    flex-wrap: wrap;
`;

export const Keyword = styled.span`
    width: auto;
    height: auto;
    margin-right: 43px;
`;

export const SearchBox = styled(Block.RowBox)`
    border-bottom: 2px solid black;
`;

export const SearchInput = styled(Input.FormInput)`
    border-bottom: 0px;
`;
