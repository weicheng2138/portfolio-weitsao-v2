import Image from 'next/image';
import Head from 'next/head';
import CustomHR from '@/components/CustomHR';
const RailwayRedesign = () => {
  const imgDescription = 'font-notoSans text-sm text-secondary03 tracking-wide';
  return (
    <>
      <Head>
        <title>Railway Redesign</title>

        <meta
          name="description"
          content="A redesign of the Metro Railway APP"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/images/railway-main.png"
        alt="railway main page"
        width={0}
        height={0}
        priority
        className="absolute left-0 right-0 top-0 h-[240px] w-full object-cover
        md:h-[320px] lg:hidden"
        sizes="80vw"
      />
      <main className="mt-[240px] flex-1 px-4 pt-12 sm:px-8 md:mx-auto md:mt-[320px] md:w-full md:max-w-4xl lg:mt-[440px] lg:pt-20">
        <div className="flex justify-between">
          <p className={imgDescription}>2021 - JUL</p>
          <div className="flex flex-row">
            <p className="ml-2 rounded-lg border border-secondary03 px-3 py-1 text-xs text-secondary03 sm:ml-4">
              使用者介面
            </p>
            <p className="ml-2 rounded-lg border border-secondary03 px-3 py-1 text-xs text-secondary03 sm:ml-4">
              APP
            </p>
          </div>
        </div>

        <h1 className="mb-16 mt-6">台鐵 e 訂通 - App Redesign</h1>
        <CustomHR className="mb-20" direction="right" />
      </main>
    </>
  );
};

export default RailwayRedesign;
