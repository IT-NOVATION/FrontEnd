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
