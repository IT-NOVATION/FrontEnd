import { Block } from "@styles/UI";
import theme from "@styles/theme";
import styled from "styled-components";

export const ContentLabel = styled.div<{ selected: boolean }>`
  padding: 8px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid
    ${({ selected }) => (selected ? theme.colors.gray : "#F5F5F7")};
  cursor: pointer;
`;
export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(50, 50, 50, 0.56);
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
