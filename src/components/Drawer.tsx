import clsx from 'clsx';
import { FC } from 'react';
import CustomLink from '@/components/CustomLink';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';

type Props = {
  className?: string;
  isShow: boolean;
  setShow: Function;
};
const Drawer: FC<Props> = ({ isShow, className, setShow }) => {
  return (
    <>
      <div
        className={clsx(
          { 'translate-x-0': isShow },
          { 'translate-x-full': !isShow },
          className,
          'bg-secondary01 inset-y-0 flex h-full min-w-[75vw] flex-col items-center justify-evenly text-sm opacity-80 shadow-md transition'
        )}
      >
        <CustomLink
          href="/#projects"
          onClick={() => setShow((prev: boolean) => !prev)}
        >
          <span className="hover:text-primary p-4 font-bold tracking-wide">
            設計作品
          </span>
        </CustomLink>
        <CustomLink
          href="/about"
          onClick={() => setShow((prev: boolean) => !prev)}
        >
          <span className="hover:text-primary p-4 font-bold tracking-wide">
            關於我
          </span>
        </CustomLink>

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
      </div>
    </>
  );
};

export default Drawer;
