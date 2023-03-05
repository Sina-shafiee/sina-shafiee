import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import { PageProps } from './Page.types';
import { NavLinks } from '@/data';

const Page = ({ title, children }: PageProps) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title} - Sina Shafiee</title>
      </Head>
      <header>
        <Navbar links={NavLinks} />
      </header>

      <main className='container'>{children}</main>
    </>
  );
};

export default Page;
