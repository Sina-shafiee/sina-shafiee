import { ThemeProvider } from 'styled-components';

// light mode theme
export const lightTheme = {
  bodyBg: '#FEFEFE',
  text: '#363537',
  primary: '#8E05C2'
};

// dark mode theme
export const darkTheme = {
  bodyBg: '#191919',
  text: '#FAFAFA',
  primary: '#1182FF'
};

// theme provider
const Theme = ({ children, colors }) => {
  const theme = {
    breakPoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
