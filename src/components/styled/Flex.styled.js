import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  gap: ${({ gap }) => gap || '0px'};
`;
