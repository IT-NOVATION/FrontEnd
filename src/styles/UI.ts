import styled, { DefaultThemeColorKey, css } from "styled-components";
import theme from "./theme";

//텍스트
type StyleText = {
    margin?: string;
    color?: DefaultThemeColorKey;
    pointer?: boolean;
    lineHeight?: string;
};

export const Text = {
    Title3: styled.div<StyleText>`
        font-weight: 500;
        font-size: 28px;
        white-space: pre-line;
        display: inline-block;
        margin: ${props => props.margin};
        color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
        line-height: ${props => props.lineHeight};
    `,

    Body1: styled.div<StyleText>`
        font-weight: 400;
        font-size: 20px;
        white-space: pre-line;
        margin: ${props => props.margin};
        color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
        display: inline-block;
        cursor: ${props => props.pointer && "pointer"};
    `,

    Body3: styled.div<StyleText>`
        font-weight: 400;
        font-size: 16px;
        white-space: pre-line;
        margin: ${props => props.margin};
        color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
        display: inline-block;
        cursor: ${props => props.pointer && "pointer"};
    `,
    Body5: styled.div<StyleText>`
        font-weight: 400;
        font-size: 12px;
        white-space: pre-line;
        margin: ${props => props.margin};
        color: ${({ color }) => (color ? theme.colors[color] : theme.colors)};
        display: inline-block;
        cursor: ${props => props.pointer && "pointer"};
    `,
};
//${({ color, theme }) => (color ? theme.colors[color] : theme.colors.black)};

//버튼
type StyleButton = {
    margin?: string;
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
        margin: ${props => props.margin};
        ${props =>
            props.disabled &&
            css`
                background-color: ${theme.colors.gray};
            `}
        cursor: pointer;
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
        width: ${props => props.width};
        height: ${props => props.height};
        font-size: ${props => props.fontSize};
        color: ${theme.colors.black};
        font-weight: 400;
        border: none;
        border-bottom: 1px solid ${props => (props.error ? `${theme.colors.red}` : `${theme.colors.gray}`)};
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
    pointer?: boolean;
    display?: string;
    direction?: string;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
    color?: DefaultThemeColorKey;
};
export const Block = {
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
        margin: ${props => props.margin};
        display: flex;
        flex-direction: ${props => props.direction};
        justify-content: ${props => props.justifyContent};
        /* align-items: ${props => props.alignItems}; */
        align-items: center;
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
    RowBox: styled.div<StyleBlock>`
        width: 100%;
        height: auto;
        cursor: ${props => props.pointer && "pointer"};
        display: flex;
        justify-content: ${props => props.justifyContent};
        align-items: ${props => props.alignItems};
    `,
    ColumnBox: styled.div<StyleBlock>`
        width: 100%;
        height: auto;
        cursor: ${props => props.pointer && "pointer"};
        display: flex;
        flex-direction: ${props => props.direction};
        justify-content: ${props => props.justifyContent};
        align-items: ${props => props.alignItems};
    `,
    Bar: styled.div<StyleBlock>`
        width: ${props => props.width};
        height: 0.5px;
        color: ${props => props.color};
    `,
};
