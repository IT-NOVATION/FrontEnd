import styled, { css } from "styled-components";

export const Button = styled.div<{ isFollowing: boolean }>`
  outline: none;
  width: 58px;
  height: 28px;
  border-radius: 10px;
  border: 0.3px solid #ccc;
  ${({ isFollowing }) =>
    isFollowing
      ? css`
          background-color: rgba(179, 179, 179, 0.2);
        `
      : css`
          background-color: white;
        `}
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.09);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Text = styled.div`
  display: inline-block;
  font-size: 11px;
  font-weight: 300;
`;
