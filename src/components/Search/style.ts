import { Block, Input } from "@styles/UI";
import styled from "styled-components";

export const Icons = styled.img`
    cursor: pointer;
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
    width: 900px;
    height: 62px;
    margin: 0;
`;

export const DropdownMenuWrapper = styled.div`
    width: 100%;
    height: 67px;
    display: flex;
    width: 137px;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    position: relative;
    cursor: pointer;
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

export const SearchInput = styled(Input.FormInput)`
    width: 80%;
    height: 100%;
    font-size: 30px;
    color: black;
    border-bottom: 0px;
    padding-left: 35px;
`;
