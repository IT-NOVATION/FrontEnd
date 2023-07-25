import styled from "styled-components";

export const Layout = styled.div<{ isModalOn: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isModalOn }) => isModalOn && "rgba(0,0,0,0.6)"};
  z-index: 98;
  overflow: hidden;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
`;
export const Bubble = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 126px;
  position: relative;
  padding: 0 3px;
  background: #ffffff;
  border: #7f7f7f solid 1px;
  font-size: 16px;
  text-align: left;
  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 16px 20px 17.5px;
    border-color: #7f7f7f transparent;
    display: block;
    width: 0;
    z-index: 0;
    top: -20px;
    left: 62px;
  }
  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 16px 20px 17.5px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -18.5px;
    left: 62px;
  }
`;
export const Icon = styled.img``;
export const Modal = styled.div`
  background-color: white;
  width: 543px;
  height: auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  border: 1px solid #5f5f5f;
  z-index: 100;
  position: relative;
`;
export const ServiceIntroText = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  white-space: pre-line;
  line-height: 23px;
`;
export const InquireImg = styled.div<{ img: string }>`
  width: 874px;
  height: 473px;
  z-index: 100;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  position: absolute;
`;
export const ServiceIntroImage = styled.div<{ img: string }>`
  width: 899px;
  height: 586px;
  z-index: 100;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  position: absolute;
`;
