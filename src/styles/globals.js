import { createGlobalStyle } from 'styled-components';

import bodyBg from '../assets/images/body-bg.png';

// global styles
// linked normalized.css v8 to html
export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme: { colors } }) => colors.bodyBg};
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
