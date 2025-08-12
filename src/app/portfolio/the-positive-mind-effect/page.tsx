
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPortfolioItems } from '@/services/portfolioService';
import { useEffect, useState } from 'react';
import { type PortfolioItem } from '@/components/portfolio-gallery';
import { Skeleton } from '@/components/ui/skeleton';
import { MainNav } from '@/components/main-nav';
import { MouseSpotlight } from '@/components/ui/mouse-spotlight';

export default function PositiveMindEffectGallery() {
  const [item, setItem] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const items = await getPortfolioItems();
        const mindEffectItem = items.find(i => i.id === 'placeholder-1');
        setItem(mindEffectItem || null);
      } catch (error) {
        console.error("Failed to load portfolio item", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, []);

  const galleryImages = item?.galleryImages || [];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
        <MouseSpotlight />
        <MainNav />
        <main className="container mx-auto px-4 md:px-6 py-24">
            <div className="flex items-center justify-between mb-8">
                <Button asChild variant="outline">
                    <Link href="/#portfolio">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Portfolio
                    </Link>
                </Button>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
                    {loading ? <Skeleton className="h-10 w-80" /> : item?.title || "Gallery"}
                </h1>
                <div className="w-36"></div>
            </div>

            {loading ? (
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <Skeleton key={i} className="w-full h-auto aspect-[3/4] rounded-lg" />
                    ))}
                </div>
            ) : galleryImages.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                            <Image
                                src={image.image}
                                alt={`${item?.title} - ${image.title}`}
                                width={400}
                                height={550}
                                className="object-cover w-full h-auto aspect-[3/4] transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-muted-foreground mt-12">No images found for this project.</p>
            )}
        </main>
    </div>
  );
}
