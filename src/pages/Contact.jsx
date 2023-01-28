import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Header, Footer, PageTitle } from '../components';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
import { Container } from '../components/styled/Container.styled';
import { Flex } from '../components/styled/Flex.styled';

const Contact = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageTitle title='contact' />
        <Container>
          <ContactWrapper
            dir='column'
            align='center'
            gap='2rem'
            style={{ margin: '5rem 0' }}
          >
            <ContactForm />
            <ContactCard />
          </ContactWrapper>
        </Container>
      </motion.div>
      <Footer />
    </>
  );
};

export default Contact;

const ContactWrapper = styled(Flex)`
  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.lg}) {
    flex-direction: row;
  }
`;
