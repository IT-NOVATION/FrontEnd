import "styled-components";

declare module "styled-components" {
    export type DefaultShadowKey = "normal" | "purple" | "blue";
    export type DefaultThemeColorKey = "black" | "white" | "deepGray" | "lightGray" | "purple" | "red";

    export interface DefaultTheme {
        color: {
            [key in DefaultThemeColorKey]: string;
        };
        boxShadow: {
            [key in DefaultShadowKey]: string;
        };
    }
}
