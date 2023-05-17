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
        className={`${className} flex h-20 items-center justify-between px-2 py-4`}
      >
        <CustomLink href="/">
          <div className="flex items-center gap-4">
            <SiteIcon />
            <h1 className="font-notoSans text-sm font-normal">WEI．TSAO</h1>
          </div>
        </CustomLink>
        <div className="hidden sm:flex sm:items-center">
          <CustomLink href="/projects">
            <span className="p-4 hover:text-primary">設計作品</span>
          </CustomLink>
          <CustomLink href="/about">
            <span className="p-4 hover:text-primary">關於我</span>
          </CustomLink>
          <CustomLink href="/weitsao_resume.pdf">
            <button className="rounded-full border border-gray-300 px-4 py-[2px] hover:border-transparent hover:bg-primary hover:text-white">
              下載履歷
            </button>
          </CustomLink>
        </div>
      </header>
    </>
  );
};
export default Header;
