import type { DefaultTheme } from 'styled-components'
import { dimensions, height, width } from 'src/assets/styles/dimensions'

export const appTheme: DefaultTheme = {
  background: '#222',
  primary: '#2C2F55',
  secondary: '#CCC',
  highlight: '#FF3377',
  white: '#FFF',
  dimensions,
  windowHeight: `${height}px`,
  windowWidth: `${width}px`,
  fonts:{
    regular: 'helvetica',
    bold: 'helveticaBold',
    black: 'helveticaBlack',
  }
}

export const navTheme = {
  dark: false,
  colors: {
    background: appTheme.background,
    border: appTheme.secondary,
    card: appTheme.background,
    notification: appTheme.highlight,
    primary: appTheme.primary,
    text: appTheme.primary
  }
}

export const darkTheme: DefaultTheme = {
  ...appTheme,
  background: '#2C2F55',
  primary: '#ffffff',
  secondary: '#b5b5b5',
  highlight: '#FF3372',
  darkTheme: '#ffffff',
};

export const lightTheme: DefaultTheme = {
  ...appTheme,
  background: '#ffffff',
  primary: '#2C2F55',
  secondary: '#b5b5b5',
  highlight: '#FF3377',
  darkTheme: '#0e0f0f',
};

