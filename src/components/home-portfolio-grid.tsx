"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

interface ApiProject { title: string; slug: string; cover: string | null; count: number }

export default function HomePortfolioGrid() {
  const [projects, setProjects] = useState<ApiProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch('/api/portfolio')
      .then((r) => r.json())
      .then((data) => { if (mounted) setProjects(data.projects || []); })
      .catch(() => {})
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false };
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="h-full aspect-[3/4] bg-muted/20" />
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return <p className="col-span-full text-center text-muted-foreground mt-8">Our portfolio is currently being updated. Please check back soon!</p>;
  }

  const visible = projects.slice(0, 6);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
      {visible.map((item) => (
        <Card key={item.slug} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 h-full aspect-[3/4]">
          <Link href={`/portfolio/${item.slug}`} className="block w-full h-full cursor-pointer">
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              {item.cover && (
                <Image
                  src={item.cover}
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
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}
