import styled, { css, keyframes } from "styled-components";
const LikeClick = keyframes`
0%{
    scale:1;
}
50%{
    scale: 1.6;
}
100%{
    scale:1;
}
`;
export const Icon = styled.img``;
export const AnimateHeart = styled.img<{ activate: boolean }>`
  ${({ activate }) =>
    activate &&
    css`
      animation: ${LikeClick} 0.5s 0s linear;
    `}
`;
