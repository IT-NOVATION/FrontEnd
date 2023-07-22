import theme from "@styles/theme";
import styled from "styled-components";

export const CommentBox = styled.div<{ isMyComment: boolean }>`
  width: 100%;
  padding: 28px 20px;
  border-bottom: 0.5px solid #b3b3b3;
  position: relative;
  background-color: ${({ isMyComment }) => isMyComment && "#F8F8F8"};
`;
export const CommentText = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 300;
  color: ${theme.colors.lightBlack};
  line-height: 1.6;
  white-space: pre-line;
`;
export const DeleteBtn = styled.div`
  cursor: pointer;
  position: absolute;
  top: 26px;
  right: 26px;
  color: #5f5f5f;
  font-size: 12px;
  font-weight: 400;
`;
