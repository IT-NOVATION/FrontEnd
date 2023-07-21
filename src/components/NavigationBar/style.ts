import { Button } from "@styles/UI";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.nav)<{
  isSearchClick: boolean;
  navTheme: "white" | "dark";
}>`
  width: 100vw;
  min-width: 1100px;
  height: ${({ isSearchClick }) => (isSearchClick ? "351px" : "85px")};
  z-index: 90;
  padding: 20px 50px;
  position: fixed;
  background-color: ${({ navTheme }) =>
    navTheme === "dark" ? "rgba(154, 154, 154, 0.40)" : "white"};
  display: flex;
  flex-direction: column;
`;

export const HomeLogo = styled.img`
  width: 185px;
  cursor: pointer;
`;
export const SearchLogo = styled.img`
  cursor: pointer;
  margin-right: 32px;
`;
export const AlarmLogo = styled.img`
  cursor: pointer;
  margin-right: 24px;
`;

export const MovieLogBtn = styled(Button.Button)<{
  hovered: boolean;
  navTheme: "white" | "dark";
}>`
  box-shadow: ${({ hovered }) =>
    hovered && "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"};
  border: ${({ navTheme }) => navTheme === "white" && "1px solid #5f5f5f"};
`;

export const variants = {
  animate: { y: 0, opacity: 1 },
  initial: { y: -80, opacity: 0.5 },
  exit: { y: -80, opacity: 0.5 },
};
