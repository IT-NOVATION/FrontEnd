import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SlideImg = styled(motion.img)`
    width: 100vw;
    height: 526px;
`;

export const Indicators = styled.span`
    display: flex;
    position: absolute;
    bottom: 1rem;
`;

export const IndicatorOn = styled.button`
    background-color: white;
    width: 0.5rem;
    height: 0.7rem;
    border-radius: 100%;
    border: none;
    outline: none;
    margin: 0 0.2rem;
    cursor: pointer;
`;

export const IndicatorOff = styled.button`
    background-color: gray;
    width: 0.5rem;
    height: 0.7rem;
    border-radius: 100%;
    border: none;
    outline: none;
    margin: 0 0.2rem;
    cursor: pointer;
`;
