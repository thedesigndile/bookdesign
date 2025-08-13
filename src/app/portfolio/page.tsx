import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioItems } from '@/services/portfolioService';
import { MainNav } from '@/components/main-nav';
import { MouseSpotlight } from '@/components/ui/mouse-spotlight';
import { Card, CardContent } from '@/components/ui/card';

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolioItems();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <MouseSpotlight />
      <MainNav />
      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="pt-8 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Our Portfolio
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
            Explore a curated selection of our finest book designs, where each project showcases our commitment to visual storytelling and craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioItems.map((item) => (
            <Link key={item.id} href={item.link} prefetch={false}>
              <Card className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 h-full">
                <Image
                  src={item.image}
                  alt={`Book cover for ${item.title}`}
                  width={400}
                  height={550}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={item.aiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{item.title}</h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
