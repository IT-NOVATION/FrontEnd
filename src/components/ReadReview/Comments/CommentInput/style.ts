import theme from "@styles/theme";
import styled from "styled-components";

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
  margin-top: 10px;
`;
export const Icon = styled.img<{ disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};
`;
