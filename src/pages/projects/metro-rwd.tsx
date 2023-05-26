import Image from 'next/image';
import Head from 'next/head';
import CustomHR from '@/components/CustomHR';
const MetroRwd = () => {
  const imgDescription = 'font-notoSans text-sm text-secondary03 tracking-wide';
  return (
    <>
      <Head>
        <title>Metro Redesign</title>

        <meta
          name="description"
          content="Redesign the Taipei Metro official website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/images/metro-main.png"
        alt="metro main page"
        width={0}
        height={0}
        priority
        className="absolute left-0 right-0 top-0 h-[240px] w-full object-cover
        md:h-[320px] lg:hidden"
        sizes="80vw"
      />
      <Image
        src="/images/metro-main-wide.png"
        alt="metro main page"
        width={0}
        height={0}
        priority
        className="absolute left-0 right-0 top-0 hidden h-[240px] w-full
        object-cover lg:block lg:h-[440px]"
        sizes="80vw"
      />
      <main className="mt-[240px] flex-1 px-4 pt-12 sm:px-8 md:mx-auto md:mt-[320px] md:w-full md:max-w-4xl lg:mt-[440px] lg:pt-20">
        <div className="flex justify-between">
          <p className={imgDescription}>2021 - JUL</p>
          <div className="flex flex-row">
            <p className="ml-2 rounded-lg border border-secondary03 px-3 py-1 text-xs text-secondary03 sm:ml-4">
              RWD 響應式設計
            </p>
            <p className="ml-2 rounded-lg border border-secondary03 px-3 py-1 text-xs text-secondary03 sm:ml-4">
              網頁版
            </p>
          </div>
        </div>

        <h1 className="mb-16 mt-6">台北捷運官網 - 響應式網頁 (RWD) 設計提案</h1>
        <CustomHR className="mb-20" direction="right" />

        <section>
          <h1 className="mb-20 text-center">專案簡述</h1>
          <h3 className="mb-4">Q1｜為什麼提案？</h3>
          <p className="mb-20">
            雖然原本的台北捷運官網已經有製作 RWD
            響應式設計，但是在縮放中仍有欄位會被擠壓，影響使用體驗。因此本次以台北捷運官網作為藍本，製作
            RWD 設計提案。
          </p>
          <h3 className="mb-4">Q2｜發現什麼問題？</h3>
          <p className="mb-20">
            在縮放過程中，有些區塊的縮放會讓圖示變的不明顯，難以視讀；或是標籤沒有隨著一起縮放；以及文字連結區塊在較小的裝置會顯得冗長而讓使用者失去耐心。
          </p>
          <h3 className="mb-4">Q3｜解決目標</h3>
          <p className="mb-20">
            統整以上問題後，列出三個目標方向：1、針對「最新運行狀況」重新設計。2、重新安排「最新消息」的區塊位置。3、重新設計「相關景點」的呈現方式。
          </p>
        </section>
        <CustomHR className="mb-20" direction="left" />

        <section className="mb-20">
          <h1 className="mb-20 text-center">版面規劃</h1>
          <h3 className="mb-4">區塊規劃</h3>
          <p className="mb-20">
            將「側邊導覽列」改為「頂部導覽列」，讓中間有更寬廣的空間可以更完整。並將原本會擠壓中間資訊的右側欄位，部分挪至底部。並將下方的文字連結，改為卡片式呈現，維持版面整潔舒適。
          </p>
          <h3 className="mb-4">斷點規劃</h3>
          <p className="mb-20">
            根據不同類型的裝置尺寸，規劃出常用的 1920, 1366, 992, 768, 414
            五種斷點。
          </p>
          <Image
            src="/images/metro-layout.png"
            alt="metro layout"
            width={0}
            height={0}
            className="h-auto w-full"
            sizes="70vh"
          />
        </section>
        <CustomHR className="mb-20" direction="right" />

        <section>
          <h1 className="mb-20 text-center">
            設計畫面 01 - <br className="md:hidden" />
            色彩繽紛的「運行狀況」
          </h1>
          <h3 className="mb-4">01｜讓字級與排列一致</h3>
          <p className="mb-20">
            原本的「路線英文代碼」與「路線中文」，應該屬於相同的資訊，但是卻使用不同的字級大小，而且排列也呈現「縱向」加「橫向」，儘管能夠看出總共有六組，但是卻因為大小與排列不一致，而使人感覺凌亂。因此將路線的中英文改為相同大小，看起來更一致。
          </p>
          <h3 className="mb-4">02｜讓顏色單純、不打架</h3>
          <p className="mb-20">
            號誌燈的漸層顏色、路線本身的顏色、以及為了凸顯區塊的底色，過多的顏色會讓視覺感到疲累。因此將燈號改為單色空心圓圈，以及將背景色改為外框。同時具備「突顯此區塊」與「視覺簡潔化」的效果。
          </p>

          <Image
            src="/images/metro-status.png"
            alt="metro status"
            width={0}
            height={0}
            className="h-auto w-full"
            sizes="70vh"
          />
          <p className={`${imgDescription} mb-10 mt-6 text-center`}>
            Before | 字級不同、排列不一、背景底色，讓資訊判讀變得不容易
          </p>

          <Image
            src="/gif/metro-status.gif"
            alt="metro status gif"
            width={0}
            height={0}
            className="h-auto w-full"
            sizes="70vh"
          />
          <p className={`${imgDescription} mb-10 mt-6 text-center`}>
            After | 讓字級與排列一致，並改用框線凸顯區域
          </p>
          <h3 className="mb-4">?!｜問題與解決</h3>
          <p className="mb-20">
            在設計這個區塊時，遇到最猶豫的問題，就是要不要捨棄路線中文？
            <br />
            <br />
            因為當畫面使用在最窄的裝置時，會因為寬度不足，而無法顯示中文。但是如果只標示出英文代號，大家都會知道是哪一條路線嗎？在多種嘗試之後，因為要將各線全部一次展示在首頁，而且判斷旅客仍然可以依照顏色辨別路線，最後決定在斷點414以下的畫面，仍像原版指顯示英文代碼，而不顯示中文。
            <br />
            <br />
            註：後來發現東京 Metro
            的網頁，因為路線較多，有將運行資訊收合，點開就可以查看完整資訊，適合成為未來修改時的參考。
          </p>
        </section>
        <CustomHR className="mb-20" direction="left" />

        <section>
          <h1 className="mb-20 text-center">
            設計畫面 02 - <br className="md:hidden" />
            被淹沒的「最新消息」
          </h1>
          <h3 className="mb-4">01｜讓「最新消息」能容易被看見</h3>
          <p className="mb-20">
            在較大的裝置中，「最新消息」被包圍在五顏六色的區塊中間，而右方區塊又過於搶眼的狀況下，最新消息幾乎是被埋沒在頁面裡。當螢幕尺寸稍為縮小，甚至會被右方區塊擠壓，剩下不到一半。因此對版面進行了調整，將左側導覽與中間快速按鈕整理至上方導覽列，並將右方的次要資訊挪至底部，空出中間更多的位置給最新消息。
          </p>
          <h3 className="mb-4">02｜讓標籤維持在同一行</h3>
          <p className="mb-20">
            使用小尺寸螢幕、或手機檢視時，三個標籤會變成上下兩行，影響閱讀。因此將標籤也設計響應式縮放，這樣使用小螢幕時，也可以符合寬窄變化，維持在同一行。
          </p>
          <div className="mb-6 flex flex-row justify-center">
            <Image
              src="/gif/metro-news-before.gif"
              alt="metro new before gif"
              width={0}
              height={0}
              className="mr-4 h-auto w-3/12 md:w-1/6"
              sizes="70vh"
            />
            <Image
              src="/images/metro-label-web-before.png"
              alt="metro label web before"
              width={0}
              height={0}
              className="h-auto w-8/12 md:w-3/6"
              sizes="70vh"
            />
          </div>
          <p className={`${imgDescription} mb-10 text-center`}>
            Before | 字級不同、排列不一、背景底色，讓資訊判讀變得不容易
          </p>

          <div className="mb-6 flex flex-row justify-center">
            <Image
              src="/gif/metro-news-after.gif"
              alt="metro news after gif"
              width={0}
              height={0}
              className="mr-4 h-auto w-3/12 md:w-1/6"
              sizes="70vh"
            />
            <Image
              src="/images/metro-label-web-after.png"
              alt="metro label web after"
              width={0}
              height={0}
              className="h-auto w-8/12 md:w-3/6"
              sizes="70vh"
            />
          </div>
          <p className={`${imgDescription} mb-20 text-center`}>
            After | 手機版 - 標籤適應寬度變化，維持在同一行 | 電腦版
            -重新安排區塊，讓最新消息有完整空間
          </p>

          <h3 className="mb-4">?!｜問題與解決</h3>
          <p className="mb-20">
            在進行版面重新規劃時，對於中間的圖像是按鈕，是否該保留而猶豫。因為對於初次造訪網頁的使用者來說，很方便快速，但是依照原本的設計與擺放，卻不顯眼也不一致，因此最後便將這些快速按鈕，一併收入頂部導覽列。
          </p>
        </section>
        <CustomHR className="mb-20" direction="right" />

        <section>
          <h1 className="mb-20 text-center">
            設計畫面 03 - <br className="md:hidden" />
            需要照片的「相關景點」
          </h1>
          <h3 className="mb-4">01｜為景點放上圖片</h3>
          <p className="mb-20">
            原本以文字方式，將所有連結排列出來，也將各個連結內部的分頁一併列出來，對於使用者來說屬於有點多餘了，只要讓感興趣的使用者連結過去後，再自行查看相關內容即可。因此改為卡片式設計，並且使用相關圖片示意，維持版面清爽。
          </p>
          <div className="mb-6 flex flex-row justify-center">
            <Image
              src="/gif/metro-landmark-before.gif"
              alt="metro landmark before gif"
              width={0}
              height={0}
              className="mr-4 h-auto w-3/12 md:w-1/6"
              sizes="70vh"
            />
            <Image
              src="/images/metro-landmark-web-before.png"
              alt="metro landmark web before"
              width={0}
              height={0}
              className="h-auto w-8/12 md:w-3/6"
              sizes="70vh"
            />
          </div>
          <p className="imgDescription mb-20 text-center">
            Before | 手機版 - 全部以文字展現，太過冗長 | 電腦版 -
            將不必要的連結全部顯示，佔幅比上方的訊息還要更多
          </p>
          <div className="mb-6 flex flex-row justify-center">
            <Image
              src="/images/metro-landmark-after.png"
              alt="metro landmark after gif"
              width={0}
              height={0}
              className="mr-4 h-auto w-3/12 md:w-1/6"
              sizes="70vh"
            />
            <Image
              src="/images/metro-landmark-web-after.png"
              alt="metro landmark web after"
              width={0}
              height={0}
              className="h-auto w-8/12 md:w-3/6"
              sizes="70vh"
            />
          </div>
          <p className="imgDescription mb-20 text-center">
            After | 手機版與電腦版都改為卡片式連結，並搭配圖案，版面簡潔
          </p>
          <h3 className="mb-4">?!｜問題與解決</h3>
          <p className="mb-20">
            雖然一開始就確定要設計為卡片式的樣式，但對卡片的樣式卻嘗試了一陣子。例如地點名稱要放在圖片上面或是下方？手機版的卡片要正方形或是恆是長方形？等等。最後嘗試了不同排版，再參考「桃園機場捷運」、「台灣好行」的官網後，決定了現在的樣式。
          </p>
        </section>
        <CustomHR className="mb-20" direction="left" />

        <section>
          <h1 className="mb-20 text-center">後記</h1>
          <p className="mb-20">
            在整理台北捷運官網的時候，發現除了「網頁版」的畫面，在頂部導覽列也出現了「行動版」的連結，點選後出現的畫面，卻與實際使用手機開啟官網的畫面不同。「網頁版」與「行動版」的頁面風格迥異，字體也完全不同。可以推估，可能在原本的網頁製作成符合響應式設計之前，曾為了行動裝置而設計另一套頁面。因此決定仍然以現有的「網頁版」作為範本，重新規劃版面與設計。
            <br />
            <br />
            其中「最新運行狀況」的欄位，則是讓我猶豫比較久的，因為縮小畫面之後，為了能讓所有路線仍然在同一排，勢必需要將路線中文拿掉，但是對於不熟悉捷運系統的旅客來說，只靠顏色與英文代碼，就已經足夠分辨路線嗎？以及咖啡色的「文湖線」、橙色的「中和新蘆線」、鮮黃的「環狀線」屬於相同色系，缺少中文的狀況下，是否會有旅客情急之下看錯呢？如果維持中英文一併呈現，那就只能垂直排列，會佔去較多版面。。
            <br />
            <br />
            最後取捨下，只能讓中文盡量出現，最後手機尺寸的頁面，仍然只有英文代碼，而無中文。現在的呈現僅為我目前能做的較好的安排，但我希望能夠找到更好的呈現方式，再進行修改。
          </p>
        </section>
        <CustomHR className="mb-20" direction="right" />
      </main>
    </>
  );
};

export default MetroRwd;
