import { motion } from 'framer-motion';
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
          <Flex gap='2rem' style={{ margin: '5rem 0' }}>
            <ContactForm />
            <ContactCard />
          </Flex>
        </Container>
      </motion.div>
      <Footer />
    </>
  );
};

export default Contact;
