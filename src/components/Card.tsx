import Image from 'next/image';
import ImageDescription from '@/components/ImageDescription';
import Link from 'next/link';
import { cn } from '@/lib/utils';
type Props = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  tags: string[];
  internalLink: string;
};
const Card = ({ imgUrl, title, description, tags, internalLink }: Props) => {
  return (
    <div className="border-secondary02 flex w-full flex-col rounded-2xl border transition hover:shadow-md md:max-w-[840] md:flex-row">
      <div className="md:basis-1/2">
        <Image
          src={imgUrl}
          alt="project cover"
          className="aspect-5/3 h-full w-full rounded-2xl object-cover"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <section className="flex flex-col gap-6 p-6 md:basis-1/2">
        <div className="flex flex-row flex-wrap items-center gap-2">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="font-noto-sans text-secondary04 bg-secondary02 rounded-full px-3 py-1 text-[11px] font-medium"
              >
                {tag}
              </span>
            );
          })}
        </div>
        <h2>{title}</h2>
        <p className="text-secondary04">{description}</p>
        <Link
          href={internalLink}
          className={cn(
            'bg-primary hover:bg-primary-dark cursor-pointer rounded-full px-5 py-[10px] tracking-wide text-white transition-colors',
            'flex w-fit items-center gap-2 text-sm font-bold'
          )}
        >
          專案內容
        </Link>
      </section>
    </div>
  );
};

export default Card;
