import { url } from "inspector";
import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  margin-top: 130px;
`;

export const Banner = styled.div<{ img?: string }>`
  width: 100vw;
  height: 225px;
  background-image: ${(props) => props.img && `url(${props.img})`};
  background-color: ${(props) => !props.img && "#F8F8F8"};
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
