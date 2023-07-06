import theme from "@styles/theme";
import styled from "styled-components";

export const Input = styled.input<{ error?: boolean }>`
  font-weight: 400;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.error ? `${theme.colors.red}` : `${theme.colors.gray}`)};
  outline: none;
  background: inherit;
  display: flex;
  justify-content: flex-end;
  padding-left: 1px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 58px;
  margin-top: 15px;
  border: 0.7px solid ${theme.colors.gray};
  padding: 5px;
  resize: none;
`;
