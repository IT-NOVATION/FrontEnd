import theme from "@styles/theme";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.div)<{
  isSearchClick: boolean;
  isHome: boolean;
}>`
  width: 100vw;
  min-width: 900px;
  height: ${({ isSearchClick }) => (isSearchClick ? "351px" : "85px")};
  z-index: 90;
  padding: 20px 50px;
  position: fixed;
  background-color: ${({ isHome, isSearchClick }) =>
    isHome && !isSearchClick ? theme.colors.bgColor : "white"};
`;

export const HomeLogo = styled.img`
  width: 185px;
  cursor: pointer;
`;
export const Icons = styled.img`
  width: 28px;
  border-radius: 100px;
  cursor: pointer;
  filter: invert(60%);
  margin-right: 20px;
`;

export const variants = {
  animate: { y: 0, opacity: 1 },
  initial: { y: -80, opacity: 0.5 },
  exit: { y: -80, opacity: 0.5 },
};
