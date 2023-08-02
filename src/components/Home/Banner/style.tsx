import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideImg = styled(motion.div)<{ img: string }>`
  width: 1920px;
  height: 480px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: 1920px 480px;
`;

export const variants = {
  initial: (direction: number) => {
    return { x: direction > 0 ? "100%" : "-100%" };
  },
  animate: { x: 0, opacity: 1 },
  exit: (direction: number) => {
    return { x: direction > 0 ? "-100%" : "100%" };
  },
};

export const Indicators = styled.span`
  display: flex;
  position: absolute;
  bottom: 1rem;
`;

export const IndicatorOn = styled.button<{ isAnimating: boolean }>`
  background-color: white;
  width: 0.5rem;
  height: 0.7rem;
  border-radius: 100%;
  border: none;
  outline: none;
  margin: 0 0.2rem;
  cursor: pointer;
`;

export const IndicatorOff = styled.button<{ isAnimating: boolean }>`
  background-color: gray;
  width: 0.5rem;
  height: 0.7rem;
  border-radius: 100%;
  border: none;
  outline: none;
  margin: 0 0.2rem;
  cursor: pointer;
`;
