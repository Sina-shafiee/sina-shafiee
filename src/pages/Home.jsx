import { Header, Footer } from '../components';
import { About, Hero } from '../components';
import ProjectsList from '../components/ProjectsList';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ProjectsList />
      <Footer />
    </>
  );
};

export default Home;
