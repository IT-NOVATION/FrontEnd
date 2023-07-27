import styled, { DefaultThemeColorKey, css } from "styled-components";
import theme from "./theme";
import { motion } from "framer-motion";

//텍스트
type StyleText = {
  margin?: string;
  color?: DefaultThemeColorKey;
  pointer?: boolean;
  lineHeight?: string;
  borderBottom?: string;
};

export const Text = {
  Title1: styled.div<StyleText>`
    font-weight: 350;
    font-size: 50px;
    white-space: pre-line;
    display: inline-block;
    margin: ${(props) => props.margin};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    line-height: ${(props) => props.lineHeight};
    cursor: ${(props) => props.pointer && "pointer"};
  `,
  Title2: styled.div<StyleText>`
    font-weight: 400;
    font-size: 30px;
    white-space: pre-line;
    display: inline-block;
    margin: ${(props) => props.margin};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    line-height: ${(props) => props.lineHeight};
    cursor: ${(props) => props.pointer && "pointer"};
  `,
  Title3: styled.div<StyleText>`
    font-weight: 500;
    font-size: 28px;
    white-space: pre-line;
    display: inline-block;
    margin: ${(props) => props.margin};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    line-height: ${(props) => props.lineHeight};
  `,
  Title4: styled.div<StyleText>`
    font-weight: 500;
    font-size: 24px;
    white-space: pre-line;
    display: inline-block;
    margin: ${(props) => props.margin};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    line-height: ${(props) => props.lineHeight};
    cursor: ${(props) => props.pointer && "pointer"};
  `,
  Title5: styled.div<StyleText>`
    font-weight: 500;
    font-size: 20px;
    white-space: pre-line;
    display: inline-block;
    margin: ${(props) => props.margin};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    line-height: ${(props) => props.lineHeight};
    cursor: ${(props) => props.pointer && "pointer"};
  `,
  Body1: styled.div<StyleText>`
    font-weight: 400;
    font-size: 20px;
    white-space: pre-line;
    margin: ${(props) => props.margin};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    display: inline-block;
    border-bottom: ${(props) => props.borderBottom};
    cursor: ${(props) => props.pointer && "pointer"};
  `,
  Body2: styled.div<StyleText>`
    font-weight: 350;
    font-size: 20px;
    white-space: pre-line;
    margin: ${(props) => props.margin};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    display: inline-block;
    cursor: ${(props) => props.pointer && "pointer"};
  `,

  Body3: styled.div<StyleText>`
    font-weight: 400;
    font-size: 16px;
    white-space: pre-line;
    margin: ${(props) => props.margin};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    display: inline-block;
    line-height: ${(props) => props.lineHeight};
    cursor: ${(props) => props.pointer && "pointer"};
  `,
  Body4: styled.div<StyleText>`
    font-weight: 400;
    font-size: 15px;
    white-space: pre-line;
    margin: ${(props) => props.margin};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    display: inline-block;
    line-height: ${(props) => props.lineHeight};
    cursor: ${(props) => props.pointer && "pointer"};
  `,
  Body5: styled.div<StyleText>`
    font-weight: 400;
    font-size: 12px;
    white-space: pre-line;
    margin: ${(props) => props.margin};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    display: inline-block;
    line-height: ${(props) => props.lineHeight};
    cursor: ${(props) => props.pointer && "pointer"};
  `,
  Body6: styled.div<StyleText>`
    font-weight: 350;
    font-size: 13px;
    white-space: pre-line;
    margin: ${(props) => props.margin};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    display: inline-block;
    line-height: ${(props) => props.lineHeight};
    cursor: ${(props) => props.pointer && "pointer"};
  `,
  Body7: styled.div<StyleText>`
    font-weight: 500;
    font-size: 14px;
    white-space: pre-line;
    margin: ${(props) => props.margin};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    display: inline-block;
    line-height: ${(props) => props.lineHeight};
    cursor: ${(props) => props.pointer && "pointer"};
  `,
};
//${({ color, theme }) => (color ? theme.colors[color] : theme.colors.black)};

//버튼
type StyleButton = {
  width?: string;
  height?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  color?: DefaultThemeColorKey;
  bgColor?: DefaultThemeColorKey;
  opacity?: string;
  backdropFilter?: string;
  filter?: string;
  boxShadow?: string;
};

export const Button = {
  FormButton: styled.button<StyleButton>`
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
  `,
  Button: styled.button<StyleButton>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${({ bgColor }) =>
      bgColor ? theme.colors[bgColor] : theme.colors};
    color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
    border: ${(props) => (props.border ? props.border : "none")};
    border-radius: ${(props) => props.borderRadius};
    margin: ${(props) => props.margin};
    backdrop-filter: ${(props) => props.backdropFilter};
    box-shadow: ${(props) => props.boxShadow};
    cursor: pointer;
    &:active {
      transform: scale(1.09);
    }
  `,
};

//인풋
type StyleInput = {
  width?: string;
  height?: string;
  fontSize?: string;
  error?: boolean;
  margin?: string;
};

export const Input = {
  FormInput: styled.input<StyleInput>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize};
    color: ${theme.colors.black};
    font-weight: 400;
    border: none;
    border-bottom: 1px solid
      ${(props) =>
        props.error ? `${theme.colors.red}` : `${theme.colors.gray}`};
    outline: none;
    background: inherit;
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin-bottom: 29px;
  `,
  CheckBoxInput: styled.input<StyleInput>`
    width: 16px;
    height: 16px;
    margin-right: 11px;
  `,
};

//기타 재사용되는 블록들
type StyleBlock = {
  margin?: string;
  padding?: string;
  pointer?: boolean;
  display?: string;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  color?: DefaultThemeColorKey | string;
  bgColor?: DefaultThemeColorKey;
  border?: string;
  borderRadius?: string;
  bgImg?: string;
  bgSize?: string;
  gap?: string;
  position?: string;
  background?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  relative?: boolean;
  zIndex?: string;
  boxShadow?: string;
};
export const Block = {
  AppWrapper: styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  `,
  PageWrapper: styled.div<StyleBlock>`
    width: 100vw;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.bgColor};
    position: ${(props) => props.position};
  `,
  PageLayout: styled.div<StyleBlock>`
    width: 900px;
    height: auto;
  `,
  FormWrapper: styled.div<StyleBlock>`
    width: 400px;
    height: auto;
  `,
  Form: styled.form`
    width: 100%;
    height: auto;
  `,
  FormInputSection: styled.section<StyleBlock>`
    position: relative;
    margin: ${(props) => props.margin};
  `,
  ErrorMessage: styled.div<StyleBlock>`
    width: 100%;
    position: absolute;
    top: 35px;
    display: inline-block;
  `,
  EyeIcon: styled.div`
    color: ${theme.colors.gray};
    position: absolute;
    top: 5px;
    right: 0;
    cursor: pointer;
  `,
  RowBox: styled(motion.div)<StyleBlock>`
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.width ? props.height : "auto")};
    cursor: ${(props) => props.pointer && "pointer"};
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    background-color: ${({ bgColor }) =>
      bgColor ? theme.colors[bgColor] : theme.colors};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    position: ${(props) => props.relative && "relative"};
    z-index: ${(props) => props.zIndex};
    position: ${(props) => props.position};
    padding: ${(props) => props.padding};
    box-shadow: ${(props) => props.boxShadow};
    gap: ${(props) => props.gap};
  `,
  ColumnBox: styled(motion.div)<StyleBlock>`
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.width ? props.height : "auto")};
    cursor: ${(props) => props.pointer && "pointer"};
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    background-color: ${({ bgColor }) =>
      bgColor ? theme.colors[bgColor] : theme.colors};
    margin: ${(props) => props.margin};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    background-image: ${(props) => props.bgImg};
    background-size: ${(props) => props.bgSize};
    position: ${(props) => props.position};
    background: ${(props) => props.background};
    background-size: cover;
    background-position: center;
    z-index: ${(props) => props.zIndex};
    position: ${(props) => props.position};
    box-shadow: ${(props) => props.boxShadow};
    padding: ${(props) => props.padding};
    gap: ${(props) => props.gap};
  `,
  AbsoluteBox: styled.div<StyleBlock>`
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.width ? props.height : "auto")};
    cursor: ${(props) => props.pointer && "pointer"};
    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    z-index: ${(props) => props.zIndex};
    background-color: ${(props) => props.bgColor};
    border-radius: ${(props) => props.borderRadius};
    border: ${(props) => props.border};
  `,
  Bar: styled.div<StyleBlock>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${({ bgColor }) =>
      bgColor ? theme.colors[bgColor] : theme.colors};
    margin: ${(props) => props.margin};
  `,
  ModalBox: styled.div<StyleBlock>`
    width: ${(props) => (props.width ? props.width : "420px")};
    height: ${(props) => (props.height ? props.height : "168px")};
    background-color: white;
    z-index: 100;
    border-radius: 20px;
    border: 0.7px solid #ccc;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 33px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ModalLayout: styled.div<StyleBlock>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `,
  ModalBg: styled.div<StyleBlock>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
  `,
};

//영화 포스터
type StylePoster = {
  margin?: string;
  size?: string;
};

export const Poster = {
  Poster: styled.img<StylePoster>`
    ${(props) =>
      props.size === "sm" &&
      css`
        width: 160px;
        height: 233px;
      `}
    margin: ${(props) => props.margin};
  `,
};
