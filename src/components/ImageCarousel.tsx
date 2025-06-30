'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDotNavigation,
  CarouselItem,
} from './ui/carousel';

function ImageCarousel({ imageUrls }: { imageUrls: string[] }) {
  const [_api, setApi] = useState<CarouselApi>();
  return (
    <Carousel
      setApi={setApi}
      className="mb-10 w-full hover:cursor-grab active:cursor-grabbing md:mb-20"
    >
      <CarouselContent>
        {imageUrls.map((image) => (
          <CarouselItem key={image}>
            <div>
              <Image
                src={image}
                alt="project cover"
                className="aspect-6/3 h-full w-full rounded-2xl object-contain"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDotNavigation />
    </Carousel>
  );
}

export default ImageCarousel;
