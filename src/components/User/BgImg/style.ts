import styled from "styled-components";
export const BgImgContainer = styled.div<{ img: string }>`
  width: 70px;
  height: 73px;
  border-radius: 9px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
`;
