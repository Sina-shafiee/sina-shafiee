import styled from 'styled-components';
import { Container } from './styled/Container.styled';
import { Flex } from './styled/flex.styled';
import { motion } from 'framer-motion';
import BioImg from '../assets/images/bio.png';
import { Button } from './styled/Button.styled';

const About = () => {
  return (
    <StyledAbout>
      <Container>
        <Flex align='center' gap='4rem'>
          <StyledImg
            as={motion.img}
            initial={{ scale: 0.8, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            src={BioImg}
            alt='bio'
          />
          <Bio>
            <Title>A FEW WORDS ABOUT ME</Title>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              As a motivated and detail-oriented Junior Front-End Developer, I
              am passionate about creating clean, efficient code and building
              user-friendly applications. I have experience working in an Agile
              environment, developing with HTML, CSS, and JavaScript and working
              collaboratively with cross-functional teams. I am always looking
              for opportunities to learn and stay up-to-date with the latest
              technologies and industry trends.
            </motion.p>
            <Button
              as={motion.button}
              initial={{ y: 50, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              secondary
            >
              DOWNLOAD CV
            </Button>
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
    text-align: start;
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
