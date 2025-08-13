import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPortfolioItems, getPortfolioItemBySlug } from '@/services/portfolioService';
import { notFound } from 'next/navigation';
import { MainNav } from '@/components/main-nav';
import { MouseSpotlight } from '@/components/ui/mouse-spotlight';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { type PortfolioItem } from '@/components/portfolio-gallery';
import OtherProjectsCarousel from './other-projects-carousel';

export async function generateStaticParams() {
  const items = await getPortfolioItems();
  return items.map((item) => ({
    slug: item.id,
  }));
}

export default async function PortfolioItemPage({ params }: { params: { slug: string } }) {
  const item = await getPortfolioItemBySlug(params.slug);

  if (!item) {
    notFound();
  }

  const allItems = await getPortfolioItems();
  const otherItems = allItems.filter(i => i.id !== item.id);
  const galleryImages = item.galleryImages || [];
  
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


  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <MouseSpotlight />
      <MainNav />
      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="mb-8 pt-8">
          <Button asChild variant="outline" className="mb-8">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {item.title}
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              A detailed look into the design and layout of this project.
            </p>
          </div>
        </div>

        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg group border border-border/20 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                <Image
                  src={image.image}
                  alt={`${item.title} - ${image.title}`}
                  width={600}
                  height={800}
                  placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(600, 800))}`}
                  className="object-cover w-full h-auto aspect-[3/4] transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-12">No images found for this project.</p>
        )}

        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">More Projects</h2>
          <OtherProjectsCarousel otherItems={otherItems} />
        </div>
      </main>
    </div>
  );
}
