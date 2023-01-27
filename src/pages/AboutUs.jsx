import { motion } from 'framer-motion';
import { Header, Footer } from '../components';
import { About } from '../components';

const AboutUs = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.div>
      <Footer />
    </>
  );
};

export default AboutUs;
