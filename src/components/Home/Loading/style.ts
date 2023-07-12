import styled, { keyframes } from "styled-components";
const posterMove = keyframes`
    0% {
      opacity: 0.2;
      background-position: 100%;
      box-shadow: rgba(0, 0, 0, 0.2) 4px 2px 2px 2px;
    }
    25%{
      opacity: 0.5;
      background-position: 50%;
      box-shadow: rgba(0, 0, 0, 0.5) 3px 1.5px 1.5px 1.5px;
    }
    50% {
      opacity: 1;
      background-position: 0%;
      box-shadow: rgba(0, 0, 0, 0.5) 2px 1px 1px 1px;
    }
    75%{
      opacity: 0.5;
      background-position: 50%;
      box-shadow: rgba(0, 0, 0, 0.5) 3px 1.5px 1.5px 1.5px;
    }
    100%{
        opacity: 0.2;
        background-position: 100%;
        box-shadow: rgba(0, 0, 0, 0.2) 4px 2px 2px 2px;
    }
`;
export const PosterOutline = styled.div`
  width: 200px;
  height: 280px;
  border-radius: 10px;
  opacity: 0.15;
  margin: 0 10px 0 10px;
  animation: ${posterMove} 2s 0s infinite;
`;
