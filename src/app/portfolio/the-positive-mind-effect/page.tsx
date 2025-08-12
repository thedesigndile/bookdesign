
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPortfolioItems } from '@/services/portfolioService';
import { useEffect, useState } from 'react';
import { type PortfolioItem } from '@/components/portfolio-gallery';
import { Skeleton } from '@/components/ui/skeleton';
import { MainNav } from '@/components/main-nav';
import { MouseSpotlight } from '@/components/ui/mouse-spotlight';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function PositiveMindEffectGallery() {
  const [item, setItem] = useState<PortfolioItem | null>(null);
  const [otherItems, setOtherItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getPortfolioItems();
        const mindEffectItem = items.find(i => i.id === 'placeholder-1' || i.id === 'positiveThinking');
        setItem(mindEffectItem || null);
        setOtherItems(items.filter(i => i.id !== mindEffectItem?.id));
      } catch (error) {
        console.error("Failed to load portfolio item", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const galleryImages = item?.galleryImages || [];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
        <MouseSpotlight />
        <MainNav />
        <main className="container mx-auto px-4 md:px-6 py-24">
            <div className="mb-8 pt-8">
              <Button asChild variant="outline" className="mb-8">
                  <Link href="/#portfolio">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Portfolio
                  </Link>
              </Button>
              <div className="text-center mb-12">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                      {loading ? <Skeleton className="h-14 w-96 mx-auto" /> : item?.title || "Gallery"}
                  </h1>
                  <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
                    A detailed look into the design and layout of this project.
                  </p>
              </div>
            </div>

            {loading ? (
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <Skeleton key={i} className="w-full h-auto aspect-[3/4] rounded-lg" />
                    ))}
                </div>
            ) : galleryImages.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg group border border-border/20 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                            <Image
                                src={image.image}
                                alt={`${item?.title} - ${image.title}`}
                                width={600}
                                height={800}
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
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {otherItems.map((project) => (
                    <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Link href={project.link} prefetch={false}>
                          <Card className="group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
                            <CardContent className="p-0">
                                <Image
                                  src={project.image}
                                  alt={`Cover for ${project.title}`}
                                  width={400}
                                  height={550}
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
                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
              </Carousel>
            </div>
        </main>
    </div>
  );
}
