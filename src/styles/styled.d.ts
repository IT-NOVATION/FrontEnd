import "styled-components";

declare module "styled-components" {
  export type DefaultThemeColorKey =
    | "black"
    | "white"
    | "main"
    | "gray"
    | "lightBlack"
    | "lightGray"
    | "darkGray"
    | "red"
    | "darkWhite"
    | "bgColor";

  export interface DefaultTheme {
    colors: {
      [key in DefaultThemeColorKey]: string;
    };
  }
}
