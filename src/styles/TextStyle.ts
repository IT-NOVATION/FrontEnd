import styled from "styled-components";

interface ITextStyle {
  margin?: string;
  color?: string;
  pointer?: boolean;
}

export const Title3 = styled.div<ITextStyle>`
  font-weight: 500;
  font-size: 28px;
  white-space: pre-line;
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;

export const Body1 = styled.div<ITextStyle>`
  font-weight: 400;
  font-size: 20px;
  white-space: pre-line;
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  display: inline-block;
  cursor: ${(props) => props.pointer && "pointer"};
`;

export const Body3 = styled.div<ITextStyle>`
  font-weight: 400;
  font-size: 16px;
  white-space: pre-line;
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  display: inline-block;
  cursor: ${(props) => props.pointer && "pointer"};
`;
