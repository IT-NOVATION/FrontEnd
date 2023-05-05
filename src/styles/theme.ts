import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    color: {
        black: "#000000",
        white: "#ffffff",
        deepGray: "#5f5f5f",
        lightGray: "#cccccc",
        purple: "#af35fe",
        red: "#ff5047",
    },
    boxShadow: {
        normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
        purple: "0 3px 8px 0 #d6c9ff",
        blue: "0 3px 8px 0 #b3e2e6",
    },
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
    custom: customMediaQuery,
    pc: customMediaQuery(1920),
    tablet: customMediaQuery(768),
    mobile: customMediaQuery(576),
};
