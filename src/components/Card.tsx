import Image from 'next/image';
import ImageDescription from '@/components/ImageDescription';
type Props = {
  imgUrl: string;
  title: string;
  description: string;
  projectTagTime: {
    time: string;
    tags: string[];
  };
};
const Card = ({ imgUrl, title, description, projectTagTime }: Props) => {
  return (
    <div className="flex w-full flex-col rounded-lg border border-secondary02 p-6 transition hover:cursor-pointer hover:shadow-md md:max-w-[840] md:flex-row md:p-10">
      <Image
        src={imgUrl}
        alt="project cover"
        className="mb-6 h-auto w-full rounded-lg object-cover md:mb-0 md:mr-20 md:w-2/5"
        width={0}
        height={0}
        sizes="100vw"
      />
      <section className="flex flex-col gap-6">
        <span className="flex flex-row items-center justify-between">
          <ImageDescription description={projectTagTime.time} />
          <span className="flex flex-row">
            {projectTagTime.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="ml-2 rounded-lg border border-secondary03 px-3 py-1 text-xs text-secondary03 sm:ml-4"
                >
                  {tag}
                </span>
              );
            })}
          </span>
        </span>
        <h1 className="text-xl">{title}</h1>
        <ImageDescription description={description} />
        <button className="self-center text-primary">看看詳細內容</button>
      </section>
    </div>
  );
};

export default Card;
