import styled from "styled-components";

export const Nav = styled.nav<{ fixed: boolean; overflow: number }>`
  width: 100vw;
  height: ${(props) => `${props.overflow}px`};
  max-height: 70px;
  min-height: 20px;
  position: ${(props) => props.fixed && "fixed"};
  z-index: 100;
  background-color: #f8f8f8;
`;
