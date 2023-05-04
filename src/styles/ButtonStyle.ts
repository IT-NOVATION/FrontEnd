import styled, { css } from "styled-components";
import theme from "./theme";

interface IFormButtonStyle {
  margin?: string;
}

export const FormButton = styled.button<IFormButtonStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 406px;
  height: 48px;
  background-color: ${theme.colors.main};
  color: ${theme.colors.white};
  border: none;
  border-radius: 25.5px;
  margin: ${(props) => props.margin};
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${theme.colors.gray};
    `}
  cursor: pointer;
`;
