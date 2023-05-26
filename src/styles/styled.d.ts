import "styled-components";

declare module "styled-components" {
    export type DefaultThemeColorKey = "black" | "white" | "main" | "gray" | "darkGray" | "red" | "darkWhite";

    export interface DefaultTheme {
        colors: {
            [key in DefaultThemeColorKey]: string;
        };
    }
}
