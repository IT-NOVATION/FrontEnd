import theme from "@styles/theme";
import styled from "styled-components";

export const CommentBox = styled.div`
  width: 100%;
  padding: 28px 20px;
  border-bottom: 0.5px solid #b3b3b3;
`;
export const CommentText = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 300;
  color: ${theme.colors.lightBlack};
  line-height: 1.6;
`;
