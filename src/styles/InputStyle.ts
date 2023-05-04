import styled from "styled-components";
import theme from "./theme";

interface IFormInputStyle {
  width?: string;
  height?: string;
  fontSize?: string;
  error?: boolean;
  margin?: string;
}

export const FormInputSection = styled.section<IFormInputStyle>`
  position: relative;
  margin: ${(props) => props.margin};
  display: flex;
  align-items: center;
`;

export const FormInput = styled.input<IFormInputStyle>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  color: ${theme.colors.black};
  font-weight: 400;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.error ? `${theme.colors.red}` : `${theme.colors.gray}`)};
  outline: none;
  background: inherit;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  margin-bottom: 29px;
`;

export const ErrorMessage = styled.span`
  font-weight: 400;
  font-size: 12px;
  height: 17px;
  width: 100%;
  color: ${theme.colors.red};
  position: absolute;
  top: 37px;
`;
export const EyeIcon = styled.div`
  color: ${theme.colors.gray};
  position: absolute;
  top: 5px;
  right: 0;
  cursor: pointer;
`;

export const CheckBoxInput = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 11px;
`;
