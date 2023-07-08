import theme from "@styles/theme";
import styled from "styled-components";

export const MovieTimeTitle = styled.div`
  font-size: 50px;
  font-weight: 400;
  color: ${theme.colors.lightBlack};
  text-shadow: rgba(0, 0, 0, 0.25) 2px 2px 4px;
  z-index: 1;
`;

export const Ellipse = styled.img`
  position: absolute;
  top: -63px;
  right: -80px;
`;
export const Icon = styled.img`
  cursor: pointer;
`;
