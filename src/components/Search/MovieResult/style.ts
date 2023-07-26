import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  width: 900px;
  margin-top: 33px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  gap: 55px;
  padding-bottom: 120px;
`;
