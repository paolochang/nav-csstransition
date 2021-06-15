import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const defaultTheme: DefaultTheme = {
  bg: "#242526",
  bgAccent: "#484a4d",
  textColor: "#dadce1",
  navSize: "60px",
  speed: "500ms",
  common: {
    black: "black",
    white: "white",
  },
  primary: {
    main: "blue",
    contrast: "orange",
  },
  secondary: {
    main: "green",
    contrast: "brown",
  },
};

export const lightTheme = {
  bg: "gray",
  bgAccent: "lightgray",
  textColor: "black",
  navSize: "60px",
  speed: "500ms",
  common: {
    black: "black",
    white: "white",
  },
  primary: {
    main: "blue",
    contrast: "orange",
  },
  secondary: {
    main: "green",
    contrast: "brown",
  },
};

export const darkTheme = {
  bg: "#242526",
  bgAccent: "#484a4d",
  textColor: "#dadce1",
  navSize: "60px",
  speed: "500ms",
  common: {
    black: "black",
    white: "white",
  },
  primary: {
    main: "lightblue",
    contrast: "orange",
  },
  secondary: {
    main: "lightgreen",
    contrast: "brown",
  },
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    html {
        margin: 0px !important;
    }
    body {
        background-color: ${(props) => props.theme.bg};
        color: ${(props) => props.theme.textColor};
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
        margin: 0px 0px;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        color: ${(props) => props.theme.textColor};
        text-decoration: none;
    }
`;
