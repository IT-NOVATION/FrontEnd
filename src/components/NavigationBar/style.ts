import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.div)<{ isMain: boolean }>`
    width: 100vw;
    min-width: 900px;
    height: 85px;
    z-index: 100;
    padding: 20px 50px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    background-color: ${({ isMain }) => (isMain ? "rgba(154, 154, 154, 0.40)" : "white")};
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
    animate: { y: 0, opacity: 1 },
    initial: { y: -80, opacity: 0.5 },
    exit: { y: -80, opacity: 0.5 },
};
