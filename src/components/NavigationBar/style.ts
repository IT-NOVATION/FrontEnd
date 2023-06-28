import styled from "styled-components";

export const Nav = styled.div<{ isVisible: boolean; isMain: boolean }>`
  width: 100vw;
  /* height: 85px; */
  height: 85px;
  z-index: 100;
  padding: 20px 50px;
  position: ${({ isVisible }) => isVisible && "fixed"};

  /* position: fixed;
    transform: translate(-50%);
    transition: all 0s; */

  display: flex;
  justify-content: space-between;
  background-color: ${({ isMain }) => (isMain ? "transparent" : "white")};
`;

export const HomeLogo = styled.img`
  width: 185px;
  cursor: pointer;
`;

export const Profile = styled.img`
  width: 31px;
  border-radius: 100px;
  cursor: pointer;
`;

export const Icons = styled.img`
  width: 31px;
  border-radius: 100px;
  color: aqua;
  cursor: pointer;
`;
