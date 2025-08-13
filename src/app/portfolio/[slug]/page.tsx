"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, type ComponentType } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MainNav } from '@/components/main-nav';
import { MouseSpotlight } from '@/components/ui/mouse-spotlight';
import OtherProjectsCarousel from './other-projects-carousel';
import PortfolioGallery, { type PortfolioItem } from '@/components/portfolio-gallery';
import { notFound } from 'next/navigation';

interface PortfolioItemPageProps {
  item: PortfolioItem | null;
  otherItems: PortfolioItem[];
}

// Since we can't directly use async components as client components,
// we create a loader that will fetch data on the server and pass it to the client component.
// This is a conceptual explanation. The actual implementation is in layout.tsx for this case.

export default function PortfolioItemPage({ item, otherItems }: PortfolioItemPageProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!item) {
    // This will be handled by the layout, but as a fallback.
    return notFound();
  }

  const galleryImages = item.galleryImages || [];

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

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
              A detailed look into the design and layout of this project. Click on any image to view it larger.
            </p>
          </div>
        </div>

        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-lg group border border-border/20 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1 cursor-pointer"
                onClick={() => openGallery(index)}
              >
                <div className="w-full aspect-[3/4] bg-black flex items-center justify-center p-2">
                  <Image
                    src={image.image}
                    alt={`${item.title} - ${image.title}`}
                    width={600}
                    height={800}
                    className="object-contain w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
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

      <PortfolioGallery
        isOpen={isGalleryOpen}
        onClose={closeGallery}
        portfolioItem={item}
        startIndex={selectedImageIndex}
      />
    </div>
  );
}
