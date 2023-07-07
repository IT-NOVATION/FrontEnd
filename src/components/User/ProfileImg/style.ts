import styled from "styled-components";
import { Props } from "./ProfileImg";
export const ProfileImgContainer = styled.div<Props>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
`;
