import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 5px 15px;

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;
