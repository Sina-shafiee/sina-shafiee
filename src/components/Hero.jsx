import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import { Button } from './styled/Button.styled';

import { Container } from './styled/Container.styled';
const Hero = () => {
  return (
    <>
      <Container>
        <StyledHero>
          <Bio>
            <Hi>
              <p>HELLO</p>
              <Line></Line>
            </Hi>
            <Name>
              MY NAME IS <span>ALI SINA</span>{' '}
            </Name>
            <Job>JUNIOR FRONTEND DEVELOPER</Job>
            <ButtonsWrapper>
              <Button primary>HIRE ME</Button>
              <Button secondary>GET CV</Button>
            </ButtonsWrapper>
          </Bio>
          <section>
            <StyledImg draggable={false} src={HeroImg} alt='hero' />
          </section>
        </StyledHero>
      </Container>
    </>
  );
};

export default Hero;

const StyledHero = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  margin: 5rem 0;
  gap: 1rem;
`;

const Bio = styled.section`
  width: 100%;
  max-width: 350px;

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.xl}) {
    min-width: 50%;
  }
`;
const Hi = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > p {
    font-size: 1.2em;
  }

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.md}) {
    & > p {
      font-size: 1.4em;
    }
  }
  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.xl}) {
    & > p {
      font-size: 1.8em;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  max-width: 300px;
  background-color: ${({ theme: { colors } }) => colors.text};
`;

const Name = styled.h1`
  font-size: 1.7em;
  display: flex;
  gap: 6px;

  & > span {
    color: ${({ theme: { colors } }) => colors.primary};
    white-space: nowrap;
  }

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.sm}) {
    font-size: 2em;
  }
  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.xl}) {
    font-size: 2.2em;
  }
`;
const Job = styled.h2`
  font-size: 1em;
  font-weight: 500;

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.sm}) {
    font-size: 1.1em;
  }
  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.xl}) {
    font-size: 1.2em;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 300px;

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.md}) {
    max-width: 300px;
  }
  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.xl}) {
    max-width: 400px;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9em;
`;
