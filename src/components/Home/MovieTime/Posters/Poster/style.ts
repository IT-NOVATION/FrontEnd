import styled from "styled-components";
import { Block } from "@styles/UI";

export const PosterContainer = styled.div`
  margin: 0 10px 0 10px;
  width: 200px;
  height: 280px;
  border-radius: 10px;
  position: relative;
`;

export const HoveredPoster = styled(Block.ColumnBox)`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  width: 200px;
  height: 280px;
  border-radius: 10px;
  z-index: 2;
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
export const Image = styled.img`
  position: absolute;
  width: 200px;
  height: 280px;
  top: 0;
  left: 0;
  border-radius: 10px;
`;
export const DetailBtn = styled.button`
  outline: none;
  width: 135px;
  height: 55px;
  margin-top: 90px;
  border: none;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  background: var(--low-op-btn, rgba(249, 249, 249, 0.2));
  cursor: pointer;
`;
