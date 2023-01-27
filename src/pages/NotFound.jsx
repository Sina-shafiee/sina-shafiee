import { motion } from 'framer-motion';

import { Header, Footer } from '../components';
const NotFound = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>NotFound</div>
      </motion.div>
      <Footer />
    </>
  );
};

export default NotFound;
