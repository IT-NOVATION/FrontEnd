import styled from "styled-components";

export const Poster = styled.div<{ img: string; isHovered: boolean }>`
  width: 255px;
  height: 375px;
  border-radius: 10px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  position: relative;
`;
export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 255px;
  height: 375px;
  border-radius: 10px;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 42px;
`;
export const DetailBtn = styled.button`
  outline: none;
  width: 135px;
  height: 55px;
  margin-top: 170px;
  border: none;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  background: var(--low-op-btn, rgba(249, 249, 249, 0.2));
  cursor: pointer;
`;
