import Image from 'next/image';
import Head from 'next/head';
import CustomHR from '@/components/CustomHR';
import InternalLinkButton from '@/components/InternallinkButton';
import { projectConfig } from '@/configs/projectConfig';

const RailwayRedesign = () => {
  const pageProjectId = 0;
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

        <section>
          <h1 className="mb-20 text-center">專案簡述</h1>
          <h3 className="mb-4">Q1｜為什麼提案？</h3>
          <p className="mb-20">
            台鐵做為台灣重要的大眾交通工具之一，提供的服務項目非常多。現有APP的介面設計採用側邊選單的方式，雖然能一次展開所有功能，卻沒有明顯的階層分級，因此顯得冗長，無法馬上找到要使用的功能。有些功能的路徑重複，也讓使用者感覺功能分散凌亂，使用上需要花更多的時間。
          </p>
          <h3 className="mb-4">Q2｜發現什麼問題？</h3>
          <p className="mb-20">
            希望透過重新整理功能架構，並重新安排介面設計，讓APP使用起來更加直覺，提供使用者更流暢的體驗。
          </p>
          <h3 className="mb-4">Q3｜解決目標</h3>
          <p className="mb-20">
            蒐集使用者回饋並分析，觀察相同類型的 APP
            ，重新規劃架構與流程，設計畫面與製作 Prototype 。
          </p>
        </section>
        <CustomHR className="mb-20" direction="left" />

        <section className="mb-20 flex flex-col">
          <h1 className="mb-20 text-center">使用者研究</h1>
          <h3 className="mb-4">為什麼獲得低分的評價？</h3>
          <p className="mb-20">
            為了能簡單的獲得使用者的感受，因此蒐集了 Android - Play 商店 與 iOS
            - App Store 的使用者意見回饋，這次整理的時間範圍從 2021.01.01 ~ 2021
            .06.11 近半年所有 1~5 星的評論，總共 350
            筆。讓我們來看看使用者怎麼說：
          </p>
          <div className="mb-20 flex flex-col md:flex-row md:justify-evenly">
            <div className="flex flex-col items-center">
              <Image
                src="/images/railway-android.png"
                alt="railway android"
                width={208}
                height={48}
                sizes="70vh"
              />
              <p className={`${imgDescription} p-4 text-center`}>
                (來自Android - Play商店)
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/railway-ios.png"
                alt="railway ios"
                width={352}
                height={48}
                sizes="70vh"
              />
              <p className={`${imgDescription} p-4 text-center`}>
                (來自iOS - App Store)
              </p>
            </div>
          </div>
          <Image
            src="/images/railway-comments.png"
            alt="railway comments"
            width={0}
            height={0}
            className="mb-20 h-auto w-full self-center md:max-w-[760px]"
            sizes="70vh"
          />
          <h3 className="mb-4">定義問題 & 解決</h3>
          <p className="mb-20">
            整理近半年的使用者評論後，針對前三大問題來修改：
          </p>
          <div className="flex flex-col items-center justify-evenly md:flex-row">
            <div className="mb-10 flex h-[220px] w-[189px] flex-col justify-between rounded-lg border-4 border-primary bg-primary ">
              <p className="py-3 text-center text-secondary04">整合功能</p>
              <div className="flex h-[160px] w-[181px] flex-col items-center rounded-lg bg-secondary01 ">
                <p className="py-3">找不到要使用的功能</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-current text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <p className="py-3">
                  重新整合現有功能，
                  <br />
                  降低使用的煩躁感。
                </p>
              </div>
            </div>
            <div className="mb-10 flex h-[220px] w-[189px] flex-col justify-between rounded-lg border-4 border-primary bg-primary ">
              <p className="py-3 text-center text-secondary04">優化介面</p>
              <div className="flex h-[160px] w-[181px] flex-col items-center rounded-lg bg-secondary01 ">
                <p className="py-3">資訊顯示不清楚</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-current text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <p className="py-3">
                  重新設計頁面，不再
                  <br />
                  忽略重要訊息。
                </p>
              </div>
            </div>
            <div className="mb-10 flex h-[220px] w-[189px] flex-col justify-between rounded-lg border-4 border-primary bg-primary ">
              <p className="py-3 text-center text-secondary04">調整流程</p>
              <div className="flex h-[160px] w-[181px] flex-col items-center rounded-lg bg-secondary01 ">
                <p className="py-3">流程複雜繁瑣</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-current text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <p className="py-3">
                  些微調整訂票流程，
                  <br />
                  讓訂票過程更暢通。
                </p>
              </div>
            </div>
          </div>
          <h3 className="mb-4">補充</h3>
          <p className="mb-20">
            從 Play 商店 與 App Store
            蒐集使用者回饋時，發現有些使用者為了讓自己的評論被注意，儘管內容是負評，仍會給
            5 星評論。
            <br />
            <br />
            Android 用戶評論中：扣除系統問題 + 情緒性評論共占比 57.9
            %，介面設計與功能操作占比 42.1 %。 iOS 用戶評論中：扣除系統問題 +
            情緒性評論共佔比 55.3 ％，介面設計及功能操作佔比 44.7 %。
            <br />
            <br />
            將兩方用戶針對介面與功能的評論合併之後，可以發現評論最多的前三名分別是：取票相關
            16.1 ％，付款相關 15.3 ％，希望新增功能 13.9 %。
            <br />
            <br />
            *註：系統問題為「閃退」、「連線異常」等等。情緒性評論為「爛透了」、「很棒」等等
          </p>
        </section>
        <CustomHR className="mb-20" direction="right" />

        <section className="mb-20">
          <h1 className="mb-20 text-center">調整架構</h1>
          <Image
            src="/images/railway-hierarchy-1.png"
            alt="railway hierachy no1"
            width={0}
            height={0}
            className="h-auto w-full"
            sizes="70vh"
          />
          <Image
            src="/images/railway-hierarchy-2.png"
            alt="railway hierachy no2"
            width={0}
            height={0}
            className="h-auto w-full"
            sizes="70vh"
          />
        </section>
        <CustomHR className="mb-20" direction="left" />

        <section className="flex flex-col">
          <h1 className="mb-20 text-center">設計畫面</h1>
          <h3 className="mb-4">01｜重新安排首頁</h3>
          <p className="mb-20">
            在整理架構時，最直接遇到的便是首頁的排版。原則上將常用的快速按鈕放在首頁沒有問題，但是這個畫面經常只有在一打開
            App
            的時候會顯現，之後要切換其他功能，只能點選側邊選單欄，因此快速按鈕經常無法達成快速的效果。
            <br />
            <br />
            而側邊選單欄，又因為 App
            的功能非常多，在畫面上很長一串，又沒有明顯的分層，因此往往需要花費更多時間在尋找功能上。
            <br />
            <br />
            為了節省時間、減少搜尋時的不耐煩，將側邊選單欄整合為底部導覽列，除了可以更快速的切換功能之外，頂部空出來的地方，也可以放置像是「最新消息」的功能。
          </p>

          <div className="mb-20 flex self-center px-2 sm:px-4 md:max-w-[850px] md:px-8 ">
            <div className="mr-4 flex flex-col md:mr-10 lg:mr-20">
              <p className="imgDescription inline-block h-[40px] border-b-4 border-primary text-center ">
                Before
              </p>
              <div className="mt-4 flex justify-between">
                <Image
                  src="/images/railway-design-menu-before.png"
                  alt="railway design menu before"
                  width={0}
                  height={0}
                  className="h-auto w-[42%]"
                  sizes="70vh"
                />
                <Image
                  src="/images/railway-design-main-before.png"
                  alt="railway design main before"
                  width={0}
                  height={0}
                  className="h-auto w-[55%]"
                  sizes="70vh"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="imgDescription inline-block h-[40px] border-b-4 border-primary text-center ">
                After
              </p>
              <div className="mt-4 flex">
                <Image
                  src="/images/railway-design-main-after.png"
                  alt="railway design main after"
                  width={0}
                  height={0}
                  className="h-auto w-full"
                  sizes="70vh"
                />
              </div>
            </div>
          </div>

          <h3 className="mb-4">02｜調整訂票流程與畫面</h3>
          <p className="mb-20">
            車種與票種，那個條件應該更為優先？
            <br />
            <br />
            原本的 App
            優先選擇車種，預訂完成後才選擇票種，但是這樣在流程上會出現許多阻礙。首先，查詢出來的資料價格不是最正確。如果今天只有一位成人，價格當然正確，但是如果旅客包含孩童、敬老、愛心等等不同票種的情況，在車種優先的狀況下，搜尋出來的價格就不是正確的金額。
            <br />
            <br />
            其次，先指定車種，查詢結果只會出現單一車種，但是如果想看其他車種的時間與比較的話，需要重新設定篩選條件，增加搜尋上的阻礙。
            <br />
            <br />
            為了改善金額顯示與提升搜尋彈性，因此將票種設定為優先選擇，一來可以改善金額顯示為正確，二來可以在搜尋結果頁面，新增切換車種的標籤，讓選擇車次可以更有彈性。
          </p>
          <div className="mb-20 flex self-center px-2 sm:px-4 md:px-8">
            <div className="mr-4 flex flex-col md:mr-10 lg:mr-20">
              <p className="imgDescription inline-block h-[40px] border-b-4 border-primary text-center ">
                Before
              </p>
              <Image
                src="/images/railway-process-before.png"
                alt="railway process before"
                width={0}
                height={0}
                className="mt-4 h-auto w-full"
                sizes="70vh"
              />
            </div>
            <div className="flex flex-col">
              <p className="imgDescription inline-block h-[40px] border-b-4 border-primary text-center ">
                After
              </p>
              <Image
                src="/images/railway-process-after.png"
                alt="railway process after"
                width={0}
                height={0}
                className="mt-4 h-auto w-full"
                sizes="70vh"
              />
            </div>
          </div>

          <h3 className="mb-4">03｜票證資訊的整理</h3>
          <p className="mb-20">
            在預訂完成後，沒有稍後付款的選項。如果想要稍後付款，要點其他功能才能離開此畫面，這會讓使用者感到不確定，
            產生「如果按其他按鈕不知道會發生什麼事」的想法。另外，金額資訊也在不同區塊重複出現，會讓使用者不確定要以哪個區塊的金額為準。
            <br />
            <br />
            由於上一部分已經針對訂票流程修改，因此在票證資訊的畫面，就不需要再選擇票種，畫面上也將金額資訊整理到同一區塊，最後再將行程資訊固定在右上角，避免散亂的感覺。
          </p>
          <div className="mb-20 flex self-center px-2 sm:px-4 md:max-w-[850px] md:px-8 ">
            <div className="mr-4 flex flex-col md:mr-10 lg:mr-20">
              <p className="imgDescription inline-block h-[40px] border-b-4 border-primary text-center ">
                Before
              </p>
              <Image
                src="/images/railway-ticket-before.png"
                alt="railway ticket before"
                width={0}
                height={0}
                className="mt-4 h-auto w-full"
                sizes="70vh"
              />
            </div>
            <div className="flex flex-col">
              <p className="imgDescription inline-block h-[40px] border-b-4 border-primary text-center ">
                After
              </p>
              <Image
                src="/images/railway-ticket-after.png"
                alt="railway ticket after"
                width={0}
                height={0}
                className="mt-4 h-auto w-full"
                sizes="70vh"
              />
            </div>
          </div>

          <h3 className="mb-4">04｜整理票面資訊</h3>
          <p className="mb-20">
            車票預訂完成後，會有未付款、已付款（待取票）、已取票、分票，等等狀態，原先不同狀態的車票介面都不一樣，無法延續這些車票給使用者的一致性，因此將車票整理到同一個類別裡面，並且將車票的樣式統一規格。票面資訊重新整理，原本的顏色過多，字級也太過相近，無法判斷資訊的層級。
            <br />
            <br />
            最後，將載入車票的功能固定在右上角，不論是領取分票、或是載入舊手機的車票都更加方便，不會隱藏在找不到的地方。
          </p>
          <div className="mb-20 flex self-center px-2 sm:px-4 md:max-w-[1080px] md:px-8 ">
            <div className="mr-4 flex flex-col md:mr-10 lg:mr-20">
              <p className="imgDescription inline-block h-[40px] border-b-4 border-primary text-center ">
                Before
              </p>
              <Image
                src="/images/railway-ticket-rollup-before.png"
                alt="railway ticket rollup before"
                width={0}
                height={0}
                className="mt-4 h-auto w-full"
                sizes="70vh"
              />
            </div>
            <div className="flex flex-col">
              <p className="imgDescription inline-block h-[40px] border-b-4 border-primary text-center ">
                After
              </p>
              <Image
                src="/images/railway-ticket-rollup-after.png"
                alt="railway ticket rollup after"
                width={0}
                height={0}
                className="mt-4 h-auto w-full"
                sizes="70vh"
              />
            </div>
          </div>
        </section>
        <CustomHR className="mb-20" direction="right" />

        <section className="mb-20">
          <h1 className="mb-20 text-center">核心樣式</h1>
          <p className="mb-20">
            主要色與次要色沿用原本 App
            的顏色，也能夠符合台鐵的企業色，但是為了讓畫面有層次感，以及達到提示、分層的效果，因此額外增加了相同色系的色彩作為輔助使用。
          </p>
          <Image
            src="/images/railway-core-template.png"
            alt="railway core template"
            width={0}
            height={0}
            className="h-auto w-full"
            sizes="70vh"
          />
        </section>

        <section className="flex w-full flex-col items-center justify-center">
          <h1 className="mb-20 text-center">Prototype</h1>
          <iframe
            className="mb-20 max-w-[340px] rounded-xl"
            height="700px"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Ftoc3EkzXkqW6E5O4Wk6gnK%2F%E5%8F%B0%E9%90%B5e%E8%A8%82%E9%80%9A-App-Redesign%3Fpage-id%3D78%253A162%26node-id%3D172%253A286%26viewport%3D241%252C48%252C0.1%26scaling%3Dscale-down%26starting-point-node-id%3D425%253A2075"
          ></iframe>
        </section>
        <CustomHR className="mb-20" direction="left" />

        <section>
          <h1 className="mb-20 text-center">後記</h1>
          <p className="mb-20">
            最一開始有這個專案的發想，是因為我要到外縣市出遊，朋友使用台鐵 App
            訂了車票之後，要分票給我。後來自己也陸續使用幾次訂票，發現在使用時內心都會冒出許多疑惑，因此當我有了
            Redesign 的計畫時，第一個想到的便是台鐵 e 訂通這個 App 。
            <br />
            <br />
            在整理與統計的過程中，發現大部分使用者會將簡化為帶有情緒的形容詞，例如：「很棒」、「很方便」、「爛透了」、「不好用」等等簡短用語，無法更深入了解使用者實際上具體遇到什麼困難，或是哪一個環節令使用者覺得不好用。
            <br />
            <br />
            其中「取票」部分，最一開始看到很多使用者只會簡單寫：「找不到車票」、「換手機後車票都不見了，但是網頁版還可以看到訂票紀錄」。
            <br />
            <br />
            後來加上實際操作與功能拆解後發現，App
            中提供一個功能可以重新載入車票，但是這個功能的命名為「訂票紀錄查詢」，與另外一個功能「歷史訂票紀錄」相似，容易被混淆。而且不論是重新載入車票，或是載入他人分票，都很難找到這個功能。
            <br />
            <br />
            也因此僅透過用戶評論，確實很難理解使用者遇到的，究竟是真的系統問題導致車票消失？或是只是使用者找不到功能？更或是使用者有找到功能、但是覺得路徑太複雜繁瑣？
            <br />
            <br />
            雖然從 App
            評價可以很快速獲得大量的使用者回饋，但真實的使用者訪談可以挖掘出更多更加具體的問題內容。
          </p>
        </section>
        <CustomHR className="mb-20" direction="right" />

        <section className="flex flex-col items-center justify-center">
          <h1 className="mb-20 text-center">看看其他專案</h1>
          {projectConfig.map((project) => {
            if (project.id !== pageProjectId) {
              return (
                <InternalLinkButton
                  internalLink={project.internalLink}
                  key={project.id}
                  imgUrl={project.imgUrl}
                  title={project.title}
                  projectTagTime={project.projectTagTime}
                />
              );
            }
          })}
        </section>
      </main>
    </>
  );
};

export default RailwayRedesign;
