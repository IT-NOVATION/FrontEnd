import { Block } from "@styles/UI";
import theme from "@styles/theme";
import styled from "styled-components";

export const MovieContainer = styled.div<{ img: string }>`
  width: 220px;
  height: 330px;
  margin: 0 20px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
export const MovieInfoContainer = styled(Block.ColumnBox)`
  width: 100%;
  height: 100%;
  padding: 30px 20px;
  background-color: ${theme.colors.bgColor};
  border-radius: 10px;
`;
export const MinusBtn = styled.button`
  width: 57px;
  height: 50px;
  border-radius: 15px;
  background: var(--low-op-btn, rgba(249, 249, 249, 0.2));
  backdrop-filter: blur(5px);
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 9px;
`;
export const MinusBox = styled.div`
  width: 22px;
  height: 5px;
  background-color: white;
  border-radius: 5px;
`;
