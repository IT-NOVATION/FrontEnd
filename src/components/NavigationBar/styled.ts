import styled from "styled-components";

export const Nav = styled.nav<{ fixed: boolean; overflow: number }>`
  width: 100vw;
  height: ${(props) => `${props.overflow}px`};
  max-height: 70px;
  background-color: #f8f8f8;
  position: ${(props) => props.fixed && "fixed"};
  z-index: 100;
`;
