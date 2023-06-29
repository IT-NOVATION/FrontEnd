import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.div)<{ isVisible: boolean; isMain: boolean; isScrollDown: boolean }>`
    width: 100vw;
    min-width: 900px;
    height: 85px;
    z-index: 100;
    padding: 20px 50px;
    position: ${({ isVisible }) => isVisible && "fixed"};
    display: flex;
    justify-content: space-between;
    background-color: ${({ isMain }) => (isMain ? "rgba(154, 154, 154, 0.40)" : "white")};
    /* animation: ${({ isScrollDown }) => (isScrollDown ? "normal" : "reverse")}; */
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

export const Icons = styled.img<{ isMain: boolean }>`
    width: 31px;
    border-radius: 100px;
    cursor: pointer;
    filter: ${({ isMain }) => (isMain ? "invert(0%)" : "invert(60%)")};
`;

export const variants = {
    // animate: { y: [100, 0] },
    // animate: { y: [0, -100] },
};
