import { ThemeProvider } from 'styled-components';

// light mode theme
export const lightTheme = {
  bodyBg: '#EFFFFD',
  text: '#363537',
  primary: '#8E05C2'
};

// dark mode theme
export const darkTheme = {
  bodyBg: '#180A0A',
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
  return (
    <ThemeProvider theme={theme}>
      {children}
      {console.log(theme)}
    </ThemeProvider>
  );
};

export default Theme;
