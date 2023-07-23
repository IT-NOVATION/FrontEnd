import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 355px;
  height: 440px;
  padding: 10px 0;
  border: 1px solid #f8f8f8;
  box-shadow: 4px 4px 10px 0px rgba(204, 204, 204, 0.47);
  background-color: white;
  border-radius: 20px;
  z-index: 2;
`;
export const ContentsBox = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  margin-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  padding-top: 20px;
  background-attachment: fixed;
  overflow-y: auto;
`;
