import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { jobsConfig, educationConfig } from '@/configs/experienceConfig';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';
import Link from 'next/link';
import JobCard from '@/components/JobCard';
import EducationCard from '@/components/EducationCard';

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
      <main className="flex-1 px-8 sm:px-8 md:mx-auto md:w-full md:max-w-4xl">
        <section className="bg-secondary01 mb-40 flex flex-col items-center justify-center md:flex-row">
          <div className="flex basis-2/3 flex-col gap-10 pt-20">
            <h1>Wei Tsao 曹瑋</h1>
            <p className="text-secondary05 tracking-[.05em]">
              我是
              Winnie，專注於使用者經驗研究與介面設計的跨領域設計人。我擅長觀察與傾聽，能透過訪談深入挖掘使用者需求，並善於以
              Figma 製作
              wireframe、prototype，將需求轉化為具體可用的數位產品。我相信設計的力量來自理解，希望透過設計與研究，打造實用的使用者體驗。
              我喜歡簡單明確且具備美觀的使用者介面，想打造直覺且友善的使用者環境，讓更多人享受到
              UI/UX 為生活帶來的改變。
            </p>

            <div className="flex gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.weitsao.com/weitsao_resume.pdf`}
              >
                <button
                  className={cn(
                    'bg-primary hover:bg-primary-dark cursor-pointer rounded-full px-5 py-[10px] tracking-wide text-white transition-colors',
                    'flex items-center gap-2'
                  )}
                >
                  <Download className="size-4" />
                  下載簡歷
                </button>
              </a>

              <Link
                href={'/projects'}
                className={cn(
                  'bg-primary hover:bg-primary-dark cursor-pointer rounded-full px-5 py-[10px] tracking-wide text-white transition-colors',
                  'flex w-fit items-center gap-2 text-sm font-bold'
                )}
              >
                專案內容
              </Link>
            </div>
          </div>

          <div className="mt-20 flex basis-1/3 justify-center md:mt-0">
            <Image
              src="/winnie-tsao.png"
              alt="winnie tsao personal picture"
              width={144}
              height={144}
              className="aspect-square rounded-full object-cover"
            />
          </div>
        </section>

        <section className="mb-40 flex flex-col gap-5">
          <h2>工作技能</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10">
            <div className="flex flex-col rounded-2xl bg-white p-6">
              <h3 className="text-secondary05 mb-2">使用者經驗研究</h3>
              <span className="text-secondary05 text-sm font-normal">
                使用者訪談
              </span>
              <span className="text-secondary05 text-sm font-normal">
                競品分析
              </span>
              <span className="text-secondary05 text-sm font-normal">
                桌面研究
              </span>
              <span className="text-secondary05 text-sm font-normal">
                使用者旅程地圖
              </span>
              <span className="text-secondary05 text-sm font-normal">
                人物誌
              </span>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-6">
              <h3 className="text-secondary05 mb-2">介面設計</h3>
              <span className="text-secondary05 text-sm font-normal">
                Wireframe 線匡稿
              </span>
              <span className="text-secondary05 text-sm font-normal">
                Prototype 原型製作
              </span>
              <span className="text-secondary05 text-sm font-normal">
                視覺排版設計
              </span>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-6">
              <h3 className="text-secondary05 mb-2">使用者測試與回饋</h3>
              <span className="text-secondary05 text-sm font-normal">
                易用性測試
              </span>
              <span className="text-secondary05 text-sm font-normal">
                使用者回饋
              </span>
            </div>
          </div>
        </section>

        <section className="mb-20 flex flex-col gap-10">
          <h2>工作經歷</h2>
          {jobsConfig.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </section>

        <section className="mb-20 flex flex-col gap-10">
          <h2>學歷</h2>
          {educationConfig.map((edu) => (
            <EducationCard key={edu.id} {...edu} />
          ))}
        </section>
      </main>
    </>
  );
}
