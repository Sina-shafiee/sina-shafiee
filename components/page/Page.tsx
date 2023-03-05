import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import { PageProps } from './Page.types';
import { userDetail, NavLinks } from '@/data';
import Hero from '../Hero/Hero';

const Page = ({ title, children }: PageProps) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title} - Sina Shafiee</title>
      </Head>
      <header className='container'>
        <Navbar links={NavLinks} />
        <Hero name={userDetail.name} title={userDetail.title} />
      </header>

      <main className='container'>{children}</main>
    </>
  );
};

export default Page;
