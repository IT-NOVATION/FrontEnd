import styled, { css } from "styled-components";
export const BgImgContainer = styled.div<{ img: string }>`
  width: 70px;
  height: 73px;
  border: 0.3px solid gray;
  border-radius: 9px;
  ${({ img }) =>
    img
      ? css`
          background-image: url(${img});
          background-size: cover;
        `
      : css`
          background-color: "gray";
        `};
`;
