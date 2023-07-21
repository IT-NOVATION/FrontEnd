import { Block } from "@styles/UI";
import styled from "styled-components";

export const Button = styled.div<{ isHovered: boolean }>`
    width: 168px;
    height: 45px;
    border-radius: 14px;
    background: ${({ isHovered }) => (isHovered ? "#af35fe" : "#5F5F5F")};
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 0 26px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export const DetailWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    padding: 14px 20px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.41);
    background: rgba(0, 0, 0, 0.25);
    /* box-shadow: 4px 4px 10px 0px rgba(204, 204, 204, 0.47); */
`;

export const AbsolutePosterImg = styled.img`
    width: 1286px;
    height: 450px;
    opacity: 0.3;
`;

export const TitleBox = styled(Block.ColumnBox)`
    width: 100%;
    height: 90px;
    justify-content: space-between;
    min-width: 850px;
`;

export const MovieInfoBox = styled(Block.RowBox)`
    width: 800px;
    height: 110px;
    display: grid;
    grid-template-columns: 13px 39px 500px;
    border-left: 2px solid white;
`;

export const InfoWrapper = styled(Block.RowBox)`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(5, minmax(24px, auto));
`;

export const DetailInfoWrapper = styled(Block.ColumnBox)`
    width: 100%;
    height: 100%;
    display: grid;
`;

export const MovieDetailBox = styled(Block.AbsoluteBox)`
    width: 363px;
    height: 136px;
    border-radius: 20px 0 0 20px;
    flex-wrap: wrap;
    overflow: scroll;
    padding: 14px 20px;
    z-index: 999;
    bottom: 0px;
    right: 0px;
    border: 1px solid rgba(255, 255, 255, 0.41);
    background: rgba(0, 0, 0, 0.25);
    box-shadow: 4px 4px 10px 0px rgba(204, 204, 204, 0.47);
    display: flex;
`;
