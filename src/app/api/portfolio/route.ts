import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/portfolio';

export function GET() {
  const projects = getProjects().map((p) => ({
    title: p.title,
    slug: p.slug,
    cover: p.images[0]?.url || null,
    count: p.images.length,
  }));
  return NextResponse.json({ projects });
}
