import styled from "styled-components";
import { motion } from "framer-motion";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    backdrop-filter: blur(4px);
    background-color: rgba(0, 0, 0, 0.2);
`;
export const Container = styled(motion.div)`
    width: 500px;
    height: 100vh;
    position: fixed;
    right: 0;
    background-color: whitesmoke;
`;
