

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: any
  }
}

import { DefaultTheme } from 'styled-components/native';

declare module "styled-components" {
  export interface Theme {
    backgroundColor: string;
    primary: string;
    text: string;
    error: string;
    fonts: {
      regular: string;
      medium: string;
      bold: string;
    }
  }
}

export const lightTheme: DefaultTheme = {
  backgroundColor: "#FFFFFF",
  primary: "#512DA8",
  text: "#121212",
  error: "#D32F2F"
};

export const darkTheme: DefaultTheme = {
  backgroundColor: "#121212",
  primary: "#B39DDB",
  text: "#FFFFFF",
  error: "#EF9A9A"
};