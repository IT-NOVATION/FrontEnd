import styled from "styled-components";

export const MoviesLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  position: relative;
  width: 100%;
`;
export const ArrowBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
