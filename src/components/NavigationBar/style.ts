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
    navTheme === "dark" ? "rgba(255,255,255, 0.40)" : "white"};
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
  width: auto;
`;
export const AlarmLogo = styled.img`
  cursor: pointer;
  margin-right: 24px;
`;

export const MovieLogBtn = styled(Button.Button)<{
  hovered: boolean;
}>`
  box-shadow: 3px 4px 2px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px #f6f6f6 inset;
  background: rgba(255, 255, 255, 0.01);
`;

export const variants = {
  animate: { y: 0, opacity: 1 },
  initial: { y: -80, opacity: 0.5 },
  exit: { y: -80, opacity: 0.5 },
};

export const LoginBtn = styled(Button.Button)`
  background-color: rgba(255, 255, 255, 0.01);
  box-shadow: 3px 4px 2px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px #f6f6f6 inset;
`;
