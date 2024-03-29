import theme from "@styles/theme";
import styled, { keyframes } from "styled-components";
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
export const PosterOutline = styled.div`
  width: 200px;
  height: 280px;
  border-radius: 10px;
  margin: 0 10px 0 10px;
  background-color: rgba(165, 165, 165, 0.1);
  border: 0.05px solid ${theme.colors.lightGray};
  box-shadow: 10px 10px 50px 0px rgba(204, 204, 204, 0.39);
  animation: ${ani} 2.5s infinite ease-in-out;
`;
