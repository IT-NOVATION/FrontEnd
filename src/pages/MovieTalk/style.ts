import { Text } from "@styles/UI";
import theme from "@styles/theme";
import styled from "styled-components";

export const PageTitle = styled.h1`
  font-size: 64px;
  font-weight: 500;
  color: #323232;
`;

export const GoWriteReviewBox = styled.div`
  width: 100vw;
  height: 85px;
  position: absolute;
  top: 305px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const RightChevronIcon = styled.img``;

export const ContentLabel = styled.div<{ selected: boolean }>`
  font-size: 20px;
  font-weight: 500px;
  color: ${(props) =>
    props.selected ? theme.colors.main : theme.colors.lightBlack};
  border-bottom: ${(props) =>
    props.selected && `1px solid ${theme.colors.main}`};
  padding-bottom: 6px;
  cursor: pointer;
`;
