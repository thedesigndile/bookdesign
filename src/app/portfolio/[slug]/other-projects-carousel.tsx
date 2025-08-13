"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { type PortfolioItem } from '@/components/portfolio-gallery';

interface OtherProjectsCarouselProps {
    otherItems: PortfolioItem[];
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);


export default function OtherProjectsCarousel({ otherItems }: OtherProjectsCarouselProps) {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {otherItems.map((project) => (
                    <CarouselItem key={project.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                        <div className="p-1">
                            <Link href={project.link} prefetch={false}>
                                <Card className="group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
                                    <CardContent className="p-0">
                                        <Image
                                            src={project.image}
                                            alt={`Cover for ${project.title}`}
                                            width={400}
                                            height={550}
                                            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(400, 550))}`}
                                            className="object-cover w-full h-auto aspect-[3/4] transition-transform duration-300 ease-in-out group-hover:scale-105"
                                            data-ai-hint={project.aiHint}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-0 left-0 p-4">
                                            <h3 className="text-lg font-bold text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{project.title}</h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
        </Carousel>
    );
}