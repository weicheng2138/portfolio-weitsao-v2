import { FC } from 'react';
import SiteIcon from '@/components/Icons/SiteIcon';
import CustomLink from '@/components/CustomLink';

type Props = {
  className?: string;
};
const Header: FC<Props> = ({ className }) => {
  return (
    <>
      <header
        className={`${className} flex items-center justify-between px-4 py-2 shadow-sm sm:px-8`}
      >
        <CustomLink href="/">
          <div className="flex items-center gap-4">
            <SiteIcon />
            <h1 className="font-notoSans text-sm font-normal tracking-wide text-secondary04">
              WEI．TSAO
            </h1>
          </div>
        </CustomLink>
        <div className="hidden text-sm text-secondary04 sm:flex sm:items-center ">
          <CustomLink href="/projects">
            <span className="p-4 tracking-wide hover:text-primary">
              設計作品
            </span>
          </CustomLink>
          <CustomLink href="/about">
            <span className="p-4 tracking-wide hover:text-primary">關於我</span>
          </CustomLink>
          <CustomLink href="/weitsao_resume.pdf">
            <button className="rounded-full border border-secondary02 px-4 py-[4px] tracking-wide hover:border-transparent hover:bg-primary hover:text-white">
              下載簡歷
            </button>
          </CustomLink>
        </div>
      </header>
    </>
  );
};
export default Header;
