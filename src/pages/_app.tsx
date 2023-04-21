import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google';
import Layout from '@/components/Layout';

const sansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-notoSansTC',
});
const serifTC = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-notoSerifTC',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout font={`${serifTC.variable} ${sansTC.variable}`}>
      <Component {...pageProps} />
    </Layout>
  );
}
