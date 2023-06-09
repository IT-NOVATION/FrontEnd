import { Block, Input } from "@styles/UI";
import styled from "styled-components";

export const Icons = styled.img`
    width: 28px;
    border-radius: 100px;
    cursor: pointer;
    filter: invert(60%);
`;

export const DropBtn = styled.div`
    position: absolute;
    top: 16px;
    right: 17px;
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
    padding-left: 23px;
`;

export const DropdownMenuWrapper = styled.div`
    display: flex;
    width: 137px;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    position: relative;
`;

export const OpenDropdown = styled.div`
    display: flex;
    justify-content: space-between;
    width: 137px;
    height: 133px;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: white;
    box-shadow: 4px 4px 4px 0px #ccc;
`;

export const HoverMenu = styled.div<{ isHovered: boolean }>`
    width: 100%;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 0 0;
    background-color: ${({ isHovered }) => (isHovered ? "#f5f5f7" : "#fff")};
`;
