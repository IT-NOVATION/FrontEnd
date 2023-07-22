import theme from "@styles/theme";
import styled from "styled-components";

export const PrevCommentsBox = styled.div`
  margin-top: 14px;
  border-top: 1px solid #5f5f5f;
  border-bottom: 0.5px solid #5f5f5f;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PrevCommentsText = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${theme.colors.lightBlack};
  cursor: pointer;
`;
