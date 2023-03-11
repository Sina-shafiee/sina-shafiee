import NextNProgress from 'nextjs-progressbar';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color='#29D'
        startPosition={0.8}
        stopDelayMs={10}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}
