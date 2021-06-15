import "styled-components";
interface IPalette {
  main: string;
  contrast: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    bg: string;
    bgAccent: string;
    navSize: string;
    speed: string;
    textColor: string;
    primary: IPalette;
    secondary: IPalette;
    common: {
      black: string;
      white: string;
    };
  }
}
