import styled from "styled-components";

export const PosterContainer = styled.div<{ img: string }>`
  width: 108px;
  height: 132px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  margin-right: 23px;
`;
