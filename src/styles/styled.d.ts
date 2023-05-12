import "styled-components";

declare module "styled-components" {
    export type DefaultThemeColorKey = "black" | "white" | "main" | "gray" | "darkGray" | "red";

    export interface DefaultTheme {
        colors: {
            [key in DefaultThemeColorKey]: string;
        };
    }
}
