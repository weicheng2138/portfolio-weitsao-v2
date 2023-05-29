import Image from 'next/image';
import CustomLink from '@/components/CustomLink';
type Props = {
  imgUrl: string;
  title: string;
  projectTagTime: {
    tags: string[];
  };
  internalLink: string;
};

const InternalLinkButton = ({
  imgUrl,
  title,
  projectTagTime,
  internalLink,
}: Props) => {
  return (
    <CustomLink href={internalLink}>
      <div className="mb-10 flex flex-col items-center justify-center rounded-lg border p-6 transition-all hover:cursor-pointer hover:shadow-md sm:h-[168px] sm:max-w-[504px] sm:flex-row md:max-w-[600px] ">
        <Image
          src={imgUrl}
          alt="metro cover"
          width={0}
          height={0}
          className="mb-4 h-auto w-full rounded-lg object-cover sm:mb-0 sm:h-32 sm:w-32 "
          sizes="70vh"
        />
        <div className="flex flex-col sm:ml-10">
          <h1 className="mb-6 text-xl">{title}</h1>
          <div className="flex justify-start">
            {projectTagTime.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="mr-2 rounded-lg border border-secondary03 px-3 py-1 text-xs text-secondary03"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </CustomLink>
  );
};

export default InternalLinkButton;
