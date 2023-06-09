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
export const variants = {
  enter: ({ direction }: { direction: number }) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: ({ direction, animate }: { direction: number; animate: boolean }) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: animate ? 0.5 : 0,
      },
    };
  },
};
