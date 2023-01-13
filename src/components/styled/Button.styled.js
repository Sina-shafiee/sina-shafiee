import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 10px 30px;
  font-size: inherit;
  border-radius: 8px;
  transition: all 0.4s ease-in;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 5px;
  }

  ${({ light }) =>
    light &&
    css`
      background-color: #fefefe;
      color: #000000;
    `}

  ${({ primary }) =>
    primary &&
    css`
      background: white;
      color: black;

      &:hover {
        background-color: ${({ theme: { colors } }) => colors.primary};
      }
    `}
`;
