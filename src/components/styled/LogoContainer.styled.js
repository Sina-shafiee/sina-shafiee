import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme: { colors }, primary }) => primary && colors.primary};

  h1 {
    font-size: 1.2em;
    font-weight: 700;
    white-space: nowrap;
  }
  svg {
    width: 1.6em;
    fill: ${({ theme: { colors }, primary }) =>
      (primary && colors.primary) || colors.text};
  }
`;
