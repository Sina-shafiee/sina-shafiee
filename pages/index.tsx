import Bio from '@/components/Bio/Bio';
import MainLayout from '@/components/Layout/MainLayout';

const Home = () => {
  return (
    <>
      <MainLayout title='Home'>
        <Bio />
      </MainLayout>
    </>
  );
};

export default Home;
