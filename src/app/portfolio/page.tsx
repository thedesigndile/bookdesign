
import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '@/lib/portfolio';
import { MainNav } from '@/components/main-nav';
import { MouseSpotlight } from '@/components/ui/mouse-spotlight';
import { Card } from '@/components/ui/card';

export const dynamic = 'force-static';

export default async function PortfolioPage() {
  const projects = getProjects();

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
          {projects.map((item) => (
            <Card key={item.slug} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 h-full aspect-[3/4]">
              <Link href={`/portfolio/${item.slug}`} className="block w-full h-full">
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  {item.images[0] && (
                    <Image
                      src={item.images[0].url}
                      alt={`Book cover for ${item.title}`}
                      width={800}
                      height={1100}
                      className="object-contain w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{item.title}</h3>
                  <p className="text-xs text-white/80">{item.images.length} images</p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
