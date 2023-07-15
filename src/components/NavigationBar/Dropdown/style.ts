import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 99;
  position: fixed;
`;
export const Bubble = styled.div`
  /* border: 1px solid #5f5f5f; */
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
