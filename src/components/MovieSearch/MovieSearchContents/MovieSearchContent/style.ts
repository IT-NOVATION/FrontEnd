import { Block } from "@styles/UI";
import styled from "styled-components";

export const MovieContainer = styled.div`
  height: auto;
  width: auto;
  justify-content: center;
`;

export const Poster = styled.div<{ img: string }>`
  width: 205.436px;
  height: 292.28px;
  border-radius: 10px;
  background-image: ${({ img }) => `url(${img})`};
  box-shadow: 2px 6px 30px 0px #ccc;
  background-size: cover;
  position: relative;
  cursor: pointer;
`;

export const RankBadge = styled.div`
  width: 23.345px;
  height: 23.345px;
  position: absolute;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.61);
  border-radius: 10px 0 0 0;
  top: 0;
  left: 0;
`;
export const RankText = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: white;
`;

export const Icon = styled.img``;
