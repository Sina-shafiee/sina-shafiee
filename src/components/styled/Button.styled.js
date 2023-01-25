import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 10px 24px;
  font-size: inherit;
  border-radius: 8px;
  transition: color 0.1s linear, background-color 0.2s linear,
    border 0.1s linear, box-shadow 0.1s linear;
  border: 1px solid transparent;

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.md}) {
    padding: 10px 30px;
  }

  ${({ light }) =>
    light &&
    css`
      background-color: #fefefe;
      color: #000000;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    `}

  ${({ primary, theme: { colors } }) =>
    primary &&
    css`
      background: ${colors.primary};
      color: #fefefe;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      &:hover {
        background-color: #fefefe;
        border-color: ${colors.text};
        color: #010101;
        box-shadow: unset;
      }
    `}
    
  ${({ secondary, theme: { colors } }) =>
    secondary &&
    css`
      color: #010101;
      box-shadow: unset;
      background-color: #fefefe;
      border-color: ${colors.text};

      &:hover {
        border-color: transparent;
        color: #fefefe;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background: ${colors.primary};
      }
    `}
`;
