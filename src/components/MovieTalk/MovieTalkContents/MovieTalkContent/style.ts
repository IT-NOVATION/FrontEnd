import { Block } from "@styles/UI";
import styled from "styled-components";

export const ContentContainer = styled(Block.RowBox)`
  padding: 40px 0;
  border-bottom: 1px solid rgba(204, 204, 204, 1);
`;
export const Poster = styled.div<{ img: string }>`
  width: 176px;
  height: 105px;
  border-radius: 10px;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
`;
