import Image from 'next/image';
import Link from 'next/link';
import { MainNav } from '@/components/main-nav';
import { MouseSpotlight } from '@/components/ui/mouse-spotlight';
import { getProjects } from '@/lib/portfolio';
import { LightboxGallery } from '@/components/portfolio/LightboxGallery';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectGalleryPage({ params }: { params: { slug: string } }) {
  const projects = getProjects();
  const idx = projects.findIndex((p) => p.slug === params.slug);
  const project = idx >= 0 ? projects[idx] : null;
  if (!project) return null;
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <MouseSpotlight />
      <MainNav />
      <main className="container mx-auto px-4 md:px-6 py-24">
        <section className="py-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <Link href="/portfolio" className="underline hover:text-primary">Back to portfolio</Link>
            {prev && <Link href={`/portfolio/${prev.slug}`} className="underline hover:text-primary">Previous: {prev.title}</Link>}
            {next && <Link href={`/portfolio/${next.slug}`} className="underline hover:text-primary">Next: {next.title}</Link>}
          </div>
        </section>

        <LightboxGallery images={project.images} />

        {projects.length > 1 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold mb-4">More projects</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {projects.filter((p) => p.slug !== project.slug).slice(0, 6).map((p) => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block overflow-hidden rounded-md border border-border/50">
                  <Image src={p.images[0]?.url || '/placeholder.png'} alt={p.title} width={400} height={300} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
                  <div className="p-2 text-xs">{p.title}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}