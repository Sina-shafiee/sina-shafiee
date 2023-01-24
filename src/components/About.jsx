import styled from 'styled-components';
import { Container } from './styled/Container.styled';
import { Flex } from './styled/flex.styled';

import BioImg from '../assets/images/bio.png';
import { Button } from './styled/Button.styled';

const About = () => {
  return (
    <StyledAbout>
      <Container>
        <Flex align='center' gap='4rem'>
          <StyledImg src={BioImg} alt='bio' />
          <Bio>
            <Title>A FEW WORDS ABOUT ME</Title>
            <p>
              As a motivated and detail-oriented Junior Front-End Developer, I
              am passionate about creating clean, efficient code and building
              user-friendly applications. I have experience working in an Agile
              environment, developing with HTML, CSS, and JavaScript and working
              collaboratively with cross-functional teams. I am always looking
              for opportunities to learn and stay up-to-date with the latest
              technologies and industry trends.
            </p>
            <Button secondary>DOWNLOAD CV</Button>
          </Bio>
        </Flex>
      </Container>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.section`
  margin: 5rem 0;
`;

const Bio = styled.div`
  & > p {
    text-align: justify;
    margin: 2rem 0;
  }
`;

const Title = styled.h2`
  font-size: 1.6em;
  font-weight: 500;
`;

const StyledImg = styled.img`
  display: none;

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.lg}) {
    display: block;
    width: 100%;
    max-width: 400px;
  }
`;
