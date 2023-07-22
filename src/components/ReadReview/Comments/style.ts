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
export const CommentInput = styled.textarea`
  width: 100%;
  height: 182px;
  border: none;
  background-color: white;
  resize: none;
  outline: none;
  font-size: 16px;
  font-weight: 300;
  color: ${theme.colors.lightBlack};
  line-height: 1.6;
  ::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: #5f5f5f;
  }
`;
export const Icon = styled.img`
  cursor: pointer;
`;
