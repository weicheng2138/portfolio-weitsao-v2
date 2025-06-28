import { footerConfig } from '@/configs/footerConfig';
import { SocialIcon } from '@/components/Icons';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="border-primary bg-secondary01 flex w-full flex-col items-center justify-center border-b-[6px] md:h-60 md:flex-row md:items-center md:justify-evenly">
      <section className="mt-10 mb-10 flex w-full max-w-5xl flex-col gap-6 px-8 md:px-10">
        <h2 className="text-secondary05">與我聯絡</h2>
        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-secondary05 flex flex-col">
            <span className="mb-1 text-2xl font-normal">hl6jo3@gmail.com</span>
            <span className="text04 text-sm font-normal">
              我目前正在積極尋找全職工作機會，歡迎與我聯絡。
            </span>
          </div>
          <div className="flex gap-2">
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
        </section>

        <section className="flex flex-row items-center justify-between">
          <SocialIcon
            kind="linkedin"
            href="https://www.linkedin.com/in/wei-tsao/"
            height={24}
            width={24}
          />
          <p className="text-secondary05">
            © 2025 Wei Tsao. All Rights Reserved.
          </p>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
