import { createGlobalStyle } from 'styled-components';

// global styles
// linked normalized.css v8 to html
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme: { colors } }) => colors.bodyBg};
    color: ${({ theme: { colors } }) => colors.text};
    font-family:  "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    transition: all 0.3s linear;
    overflow-x: hidden;

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
