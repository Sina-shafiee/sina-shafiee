import { motion } from 'framer-motion';

import { Header, Footer } from '../components';
import { About, Hero } from '../components';
import ProjectsList from '../components/ProjectsList';

const Home = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <ProjectsList />
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;
