import theme from "@styles/theme";
import styled, { keyframes } from "styled-components";
export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  row-gap: 35px;
  column-gap: 22px;
`;
const ani = keyframes`
    0% {
        background-color: rgba(165, 165, 165, 0.01);
    }

    50% {
        background-color: rgba(165, 165, 165, 0.1);
    }

    100% {
        background-color: rgba(165, 165, 165, 0.01);
    }
`;
export const Poster = styled.div`
  width: 205.436px;
  height: 292.28px;
  border-radius: 10px;
  background-color: rgba(165, 165, 165, 0.1);
  border: 0.05px solid ${theme.colors.lightGray};
  box-shadow: 10px 10px 50px 0px rgba(204, 204, 204, 0.39);
  animation: ${ani} 2.5s infinite ease-in-out;
`;
