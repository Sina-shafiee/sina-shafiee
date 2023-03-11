import Head from 'next/head';
import type { LayoutProps } from './Layout.types';
import { useRouter } from 'next/router';
import Button from '../Button/Button';
import ArrowBack from '../Icons/ArrowBack/ArrowBack';

const ProjectLayout = ({ title, children }: LayoutProps) => {
  const pageTitle = `${title} - Sina Shafiee`;

  const router = useRouter();
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{pageTitle}</title>
      </Head>

      <main className='container'>
        <Button
          onClick={router.back}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ArrowBack style={{ width: '1.2rem' }} /> Back
        </Button>
        {children}
      </main>
    </>
  );
};

export default ProjectLayout;
