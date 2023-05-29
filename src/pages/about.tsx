import { SiteIcon } from '@/components/Icons';
import { AboutPageIcon } from '@/components/Icons';
import Head from 'next/head';
import Image from 'next/image';

function About() {
  const pClass = `mb-20 text-center text-xs sm:text-sm`;
  const liClass = `list-disc text-sm leading-6 text-secondary03`;
  return (
    <>
      <Head>
        <title>About Winnie Tsao</title>
        <meta name="description" content="Everything about Winnie Tsao" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-1 px-4 sm:px-8 md:mx-auto md:w-full md:max-w-4xl">
        <section className="mb-40 flex flex-col items-center justify-center lg:flex-row">
          <Image
            src="/winnie-tsao.png"
            alt="winnie tsao personal picture"
            width={400}
            height={240}
            className="mt-20 rounded-xl object-cover
            lg:mr-20 lg:mt-0"
          />
          <div className="pt-20">
            <h2 className="mb-10">嗨～你好，我是 Winnie</h2>
            <p>
              我喜歡簡單明確且具備美觀的使用者介面，想打造直覺且友善的使用者環境，讓更多人享受到
              UI/UX 為生活帶來的改變。
              <br />
              <br />
              過去在旅遊服務業任職超過五年經驗，累積了溝通協調、危機處理等軟實力；另外，也透過線上課程、加入
              UI/UX 社群討論、參與相關講座，提升自己 UI/UX 的專業硬實力。
              <br />
              <br />
              在快速成長與發展的 UI/UX 環境中，我不害怕改變，並期許自己未來能在
              UI/UX 領域深耕、茁壯。
            </p>
          </div>
        </section>

        <h2 className="mb-20 mt-20 text-center">工作技能</h2>

        <section className="mb-20 grid grid-cols-2 sm:flex sm:flex-row sm:justify-evenly">
          <div className="flex flex-1 flex-col items-center">
            <AboutPageIcon src="/images/about-ui-design.png" />
            <p className={pClass}>UI 介面設計</p>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <AboutPageIcon src="/images/about-prototype.png" />
            <p className={pClass}>Prototype 製作</p>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <AboutPageIcon src="/images/about-logo-icon.png" />
            <p className={pClass}>Logo / Icon 繪製</p>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <AboutPageIcon src="/images/about-drawing.png" />
            <p className={pClass}>插畫繪製</p>
          </div>
        </section>

        <h2 className="mb-20 text-center">使用軟體</h2>

        <section className="mb-20 grid grid-cols-2 sm:flex sm:flex-row sm:justify-evenly">
          <div className="flex flex-1 flex-col items-center">
            <AboutPageIcon src="/images/about-figma.png" />
            <p className={pClass}>Figma</p>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <AboutPageIcon src="/images/about-illustrator.png" />
            <p className={pClass}>Adobe Illustrator</p>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <AboutPageIcon src="/images/about-photoshop.png" />
            <p className={pClass}>Adobe Photoshop</p>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <AboutPageIcon src="/images/about-procreate.png" />
            <p className={pClass}>Procreate</p>
          </div>
        </section>

        <h2 className="mb-20 text-center">工作經驗</h2>

        <section className="mb-20 flex flex-col sm:justify-center">
          <div className="mb-20 grid grid-cols-3 lg:grid-rows-1">
            <SiteIcon className="row-span-2 h-[70px] w-[70px] self-center justify-self-center" />
            <div className="col-span-2 flex flex-col justify-center lg:col-span-1">
              <h1 className="mb-3 text-xl">接案設計師</h1>
              <span className="mb-1 font-sans text-sm text-secondary04">
                自由接案&nbsp;&nbsp;2020.Dec ~ 2021.Now
              </span>
            </div>
            <ul className="col-span-2 pl-4 lg:col-span-1">
              <li className={liClass}>名片設計</li>
              <li className={liClass}>Logo 設計</li>
              <li className={liClass}>手冊設計</li>
            </ul>
          </div>
          <div className="mb-20 grid grid-cols-3 lg:grid-rows-1">
            <AboutPageIcon
              src="/images/about-lion.png"
              className="row-span-2 self-center justify-self-center"
            />
            <div className="col-span-2 flex flex-col justify-center lg:col-span-1">
              <h1 className="mb-3 text-xl">國際訂房 OP 專員</h1>
              <span className="mb-1 font-sans text-sm text-secondary04">
                雄獅旅行社&nbsp;&nbsp;2016.Sep ~ 2020.Dec
              </span>
            </div>
            <ul className="col-span-2 pl-4 lg:col-span-1">
              <li className={liClass}>
                處理國際訂房相關事務，具備危機處理能力。
              </li>
              <li className={liClass}>
                與業務、供應商多方合作，具備溝通協調能力。
              </li>
              <li className={liClass}>
                曾經參與優化國際訂房相關 SOP 流程制訂。
              </li>
            </ul>
          </div>
          <div className="mb-20 grid grid-cols-3 lg:grid-rows-1">
            <AboutPageIcon
              src="/images/about-lion.png"
              className="row-span-2 self-center justify-self-center"
            />
            <div className="col-span-2 flex flex-col justify-center lg:col-span-1">
              <h1 className="mb-3 text-xl">門市業務專員</h1>
              <span className="mb-1 font-sans text-sm text-secondary04">
                雄獅旅行社&nbsp;&nbsp;2014.Mar ~ 2016.Sep
              </span>
            </div>
            <ul className="col-span-2 pl-4 lg:col-span-1">
              <li className={liClass}>具備產品銷售技能。</li>
              <li className={liClass}>協助旅客辦理各項國內外旅遊事宜。</li>
              <li className={liClass}>曾為門市業績最佳業務。</li>
            </ul>
          </div>

          <h2 className="mb-20 mt-20 text-center">學歷</h2>

          <div className="mb-20 grid grid-cols-3 lg:grid-rows-1">
            <AboutPageIcon
              src="/images/about-ncue.png"
              className="row-span-2 self-center justify-self-center"
            />
            <div className="col-span-2 flex flex-col justify-center lg:col-span-1">
              <h1 className="mb-3 text-xl">國立彰化師範大學</h1>
              <span className="mb-1 font-sans text-sm text-secondary04">
                國文學系&nbsp;&nbsp;2009.Sep ~ 2013.Jun
              </span>
            </div>
            <ul className="col-span-2 pl-4 lg:col-span-1">
              <li className={liClass}>
                主修中國文學，同時修習教育學程，一併取得合格教師資格
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
export default About;
