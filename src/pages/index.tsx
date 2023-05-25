import Card from '@/components/Card';
import CustomHR from '@/components/CustomHR';
import CustomLink from '@/components/CustomLink';
import { SiteIcon, SocialIcon } from '@/components/Icons';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
type Props = {
  imgUrl: string;
  title: string;
  description: string;
  projectTagTime: {
    time: string;
    tags: string[];
  };
};

import { projectConfig } from '@/configs/projectConfig';

const periodDictionary = {
  morning: '早安',
  afternoon: '午安',
  evening: '晚安',
};
export default function Home() {
  const [periods, setPeriods] = useState<'morning' | 'afternoon' | 'evening'>(
    'morning'
  );

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 11) {
      setPeriods(() => 'morning');
    } else if (currentHour >= 11 && currentHour < 17) {
      setPeriods(() => 'afternoon');
    } else {
      setPeriods(() => 'evening');
    }
  }, [periods]);

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
        <section className="mb-10 flex flex-col items-center justify-center pt-10 sm:mb-20 sm:flex-row-reverse sm:gap-6 sm:pt-20">
          <Image
            src={`/gif/site-cover.gif`}
            alt="site cover for portfolio"
            width={240}
            height={240}
            priority
          />
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-6">Hi！{periodDictionary[periods]}</h1>
            <h1>我是 Winnie</h1>
            <p className="mt-10">
              我觀察細膩、擅於傾聽。我想做出好看好用、讓使用者感到溫暖又富有人性的產品。正在朝向成為
              UI/UX 設計師持續精進中。
            </p>
          </div>
        </section>

        <CustomHR direction="right" className="mb-10 sm:mb-20" />

        <section
          id="project"
          className="mb-10 flex flex-col items-center sm:mb-20"
        >
          <h2 className="mb-10">一起來看看我的 UI/UX 設計吧</h2>
          {projectConfig.map((project, index) => {
            return (
              <CustomLink
                key={index}
                href="/about"
                className="mb-10 w-full sm:mb-20"
              >
                <Card {...project} />
              </CustomLink>
            );
          })}
        </section>

        <CustomHR direction="left" />
      </main>
    </>
  );
}
