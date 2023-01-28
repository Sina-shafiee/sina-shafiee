import { createGlobalStyle } from 'styled-components';

// global styles
// linked normalized.css v8 to html
export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    height: fill-available;
    height: -webkit-fill-available;
  }

  body {
    background-color: ${({ theme: { colors } }) => colors.bodyBg};
    color: ${({ theme: { colors } }) => colors.text};
    font-family:  "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    transition: background-color 0.1s linear;
    overflow-x: hidden;
    min-height: 100vh;
    min-height: fill-available;
    min-height: -webkit-fill-available;

    @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.md}) {
      font-size: 1.1rem;
    }
    @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.xl}) {
      font-size: 1.2rem;
    }
  }
  a, button {
    text-decoration: none;
    color: inherit;
    font: inherit;
    background: inherit;
    outline: unset;
    border: none;
    cursor: pointer;
  }
  `;
