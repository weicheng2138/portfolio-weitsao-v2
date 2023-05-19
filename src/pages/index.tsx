import CustomLink from '@/components/CustomLink';
import { SiteIcon, SocialIcon } from '@/components/Icons';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Winnie Tsao</title>
        <meta
          name="description"
          content="Index page of Winnie Tsao portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex flex-col items-center justify-center pt-10 sm:flex-row sm:pt-20">
          <Image
            src={`/gif/site-cover.gif`}
            alt="site cover for portfolio"
            width={240}
            height={240}
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-6 font-notoSerif text-[32px] font-bold tracking-wide">
              Hi！早安
            </h1>
            <h1 className="font-notoSerif text-[32px] font-bold tracking-wide">
              我是 Winnie
            </h1>
            <p className="mt-10 font-notoSans text-lg font-light text-secondary03">
              我觀察細膩、擅於傾聽。我想做出好看好用、讓使用者感到溫暖的產品。正在朝向成為
              UI/UX 設計師持續精進中。
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
