import type { PropsWithChildren } from 'react';
import { Poppins } from 'next/font/google';

import '@/styles/globals.css';
import Footer from '@/components/footer/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['200', '300', '400', '600']
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html className={poppins.variable} lang='en'>
      <body className='font-serif container'>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
