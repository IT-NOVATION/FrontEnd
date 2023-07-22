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

export const Grid = styled.div`
  width: 337px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  border-left: 1px solid white;
  padding-left: 13px;
  gap: 10px;
`;
export const GridRow = styled.div`
  display: grid;
  grid-template-columns: 26px 272px;
  align-items: center;
  justify-items: flex-start;
  gap: 25px;
`;
export const InfoText = styled.div`
  color: white;
  font-size: 15px;
  font-weight: 600;
`;
