import { ThemeProvider, createTheme } from '@mui/material/styles';

interface CustomTheme {
  osprey: {
    colors: {
      bgDark: string;
      bgLight: string;
      borderLight: string;
      primaryLight: string;
      secondaryLight: string;
      inputBg: string;
      fontRed: string;
      footerBg: string;
      fontWhite: string;
    };
  };
}

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends CustomTheme {}
}

export const theme = createTheme({
  osprey: {
    colors: {
      bgDark: '#010a1f',
      bgLight: '#00112b',
      borderLight: '#014d6a',
      primaryLight: '#00d9c5',
      secondaryLight: '#35f2e1',
      inputBg: '#102437',
      fontRed: '#ec0d3e',
      footerBg: '#010718',
      fontWhite: '#fefeff'
    },
  },
});
