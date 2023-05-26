import clsx from 'clsx';
import { FC } from 'react';
import CustomLink from '@/components/CustomLink';

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
          'inset-y-0 flex h-full min-w-[75vw] flex-col items-center justify-evenly bg-secondary01 text-sm opacity-80 shadow-md transition'
        )}
      >
        <CustomLink
          href="/#projects"
          onClick={() => setShow((prev: boolean) => !prev)}
        >
          <span className="p-4 tracking-wide hover:text-primary">設計作品</span>
        </CustomLink>
        <CustomLink
          href="/about"
          onClick={() => setShow((prev: boolean) => !prev)}
        >
          <span className="p-4 tracking-wide hover:text-primary">關於我</span>
        </CustomLink>
        <CustomLink href="/weitsao_resume.pdf">
          <button className="rounded-full border border-secondary02 px-4 py-[4px] tracking-wide hover:border-transparent hover:bg-primary hover:text-white">
            下載簡歷
          </button>
        </CustomLink>
      </div>
    </>
  );
};

export default Drawer;
