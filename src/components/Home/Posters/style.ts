import styled from "styled-components";
import { Block, Text } from "@styles/UI";

export const PosterTitle = styled(Text.Body1)<{ selected: boolean }>`
  border-bottom: ${(props) => props.selected && "1px solid white"};
  padding: 10px;
`;
export const Icon = styled.img``;
