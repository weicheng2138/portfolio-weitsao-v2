import { FC } from 'react';
import SiteIcon from '@/components/Icons/SiteIcon';
import CustomLink from '@/components/CustomLink';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};
const Header: FC<Props> = ({ className }) => {
  return (
    <header
      className={`${className} bg-component-background flex h-[56px] justify-center shadow-xs`}
    >
      <div className="flex w-full max-w-5xl items-center justify-between px-4 md:px-6">
        <CustomLink href="/">
          <div className="flex items-center gap-4">
            <SiteIcon className="hover:animate-spin" />
            <span className="font-noto-sans text-secondary05 text-sm font-normal tracking-wide">
              WEI．TSAO
            </span>
          </div>
        </CustomLink>
        <div className="text-secondary04 hidden text-sm md:flex md:items-center">
          <CustomLink href="/">
            <span className="hover:text-primary inline-block p-4 font-bold tracking-wide">
              關於我
            </span>
          </CustomLink>
          <CustomLink href="/projects" className="mr-3">
            <span className="hover:text-primary inline-block p-4 font-bold tracking-wide">
              設計作品
            </span>
          </CustomLink>
          <CustomLink href="/weitsao_resume.pdf"></CustomLink>
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
      </div>
    </header>
  );
};
export default Header;
