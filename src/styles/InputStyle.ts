import styled from "styled-components";

interface InputStyle {
  width: string;
  height: string;
  fontSize: string;
  color: string;
  error: boolean;
}

export const Input = styled.input<InputStyle>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;
