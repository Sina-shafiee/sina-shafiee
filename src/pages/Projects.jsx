import { motion } from 'framer-motion';
import { Header, Footer, ProjectsList, PageTitle } from '../components';

const Projects = () => {
  return (
    <>
      <Header />
      <motion.div
        // style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageTitle title='Projects' />
        <ProjectsList />
      </motion.div>
      <Footer />
    </>
  );
};

export default Projects;
