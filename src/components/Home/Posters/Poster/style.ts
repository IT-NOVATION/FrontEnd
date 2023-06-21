import styled, { css } from "styled-components";
import { Block } from "@styles/UI";

export const HoveredPoster = styled(Block.ColumnBox)`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  width: 200px;
  height: 280px;
  border-radius: 10px;
  z-index: 99;
`;

export const Rank = styled(Block.ColumnBox)`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  color: white;
  border-radius: 10px 0 0 0;
`;
