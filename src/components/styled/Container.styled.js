import styled from 'styled-components';

export const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 0.5rem;

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.sm}) {
    max-width: ${({ theme: { breakPoints } }) => breakPoints.sm};
    padding: 0 2rem;
  }
  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.md}) {
    max-width: ${({ theme: { breakPoints } }) => breakPoints.md};
    padding: 0 3rem;
  }
  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.lg}) {
    max-width: ${({ theme: { breakPoints } }) => breakPoints.lg};
    padding: 0 4rem;
  }
  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.xl}) {
    max-width: ${({ theme: { breakPoints } }) => breakPoints.xl};
    padding: 0 5rem;
  }
  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints['2xl']}) {
    max-width: ${({ theme: { breakPoints } }) => breakPoints['2xl']};
  }
`;
