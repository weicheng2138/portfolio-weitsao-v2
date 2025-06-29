import { useRouter } from 'next/router';
import { projectContents } from '@/configs/projectConfig';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselDotNavigation,
  CarouselItem,
} from '@/components/ui/carousel';
import ImageCarousel from '@/components/ImageCarousel';
import { cn } from '@/lib/utils';

export default function Page() {
  const router = useRouter();
  if (router.query.slug && typeof router.query.slug === 'string') {
    const content = projectContents.get(router.query.slug);
    return (
      <>
        {content ? (
          <main className="flex-1 px-8 md:mx-auto md:w-full md:max-w-4xl">
            <Link
              href="/projects"
              className="text-secondary04 hover:text-primary my-3 flex w-fit items-center gap-2 py-2 pr-2 text-sm font-bold"
            >
              <ChevronLeft />
              返回設計作品
            </Link>
            <section className="mb-20 flex flex-col gap-3">
              <div className="flex flex-row flex-wrap items-center gap-2">
                {content.tags.map((tag, index) => {
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
              <h1>{content.title}</h1>

              <div>
                <Image
                  src={content.imgUrl}
                  alt="project cover"
                  className="aspect-4/3 h-full w-full rounded-2xl object-cover md:aspect-7/3"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            </section>

            <section className="flex flex-col gap-3">
              {content.contents.map((content, index) => (
                <div
                  key={`${index}-${content.title}`}
                  className="mb-10 flex flex-col"
                >
                  {content.title !== '' && (
                    <h1 className="mb-5">{content.title}</h1>
                  )}
                  {content.type === 'default' && <p>{content.paragraph}</p>}
                  {content.type === 'multiple-paragraph' &&
                    content.paragraph.map((subParagraph, subIndex) => (
                      <p className="my-3" key={subIndex}>
                        {subParagraph}
                      </p>
                    ))}

                  {content.type === 'sub-paragraph' &&
                    content.subContents.map((subContent, subIndex) => (
                      <div key={subIndex} className={cn('flex flex-col gap-3')}>
                        {subContent.title && (
                          <h3 className={cn('text-secondary05 mt-10')}>
                            {subContent.title}
                          </h3>
                        )}
                        <p className="py-2">{subContent.paragraph}</p>
                      </div>
                    ))}

                  {content.type === 'list-paragraph' && (
                    <ul>
                      {content.content && (
                        <p className="mb-3">{content.content}</p>
                      )}
                      {content.paragraph.map((subParagraph, subIndex) => (
                        <li className="list-disc py-1" key={subIndex}>
                          {subParagraph}
                        </li>
                      ))}
                    </ul>
                  )}

                  {content.type === 'picture' &&
                    content.imageUrls.length > 1 && (
                      <ImageCarousel imageUrls={content.imageUrls} />
                    )}

                  {content.type === 'picture' &&
                    content.imageUrls.length === 1 && (
                      <div>
                        <Image
                          src={content.imageUrls[0]}
                          alt="project cover"
                          className="aspect-5/3 h-full w-full rounded-2xl object-contain"
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </div>
                    )}
                </div>
              ))}
            </section>

            <section className="flex w-full justify-center">
              <Link
                href="/projects"
                className="text-secondary04 hover:text-primary my-3 flex w-fit items-center gap-2 py-2 pr-2 text-sm font-bold"
              >
                <ChevronLeft />
                返回設計作品
              </Link>
            </section>
          </main>
        ) : (
          <p>Empty Project Config</p>
        )}
      </>
    );
  }

  return <p>Empty Slug</p>;
}
