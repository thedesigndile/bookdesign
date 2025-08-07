"use client";

import { useState, useEffect, type SVGProps } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 12L22 7" stroke="hsl(var(--primary))" strokeWidth="2"/>
      <path d="M12 12V22" stroke="hsl(var(--primary))" strokeWidth="2"/>
      <path d="M12 12L2 7" stroke="hsl(var(--primary))" strokeWidth="2"/>
      <path d="M7 4.5L17 9.5" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const projects = [
  {
    title: "The Celestial Query",
    category: "Science Fiction",
    imageUrl: "https://placehold.co/600x800.png",
    aiHint: "galaxy book"
  },
  {
    title: "Whispers of the Old Wood",
    category: "Fantasy",
    imageUrl: "https://placehold.co/600x800.png",
    aiHint: "fantasy forest"
  },
  {
    title: "Echoes of the Metropolis",
    category: "Dystopian",
    imageUrl: "https://placehold.co/600x800.png",
    aiHint: "future city"
  },
];

export default function PortfolioPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden bg-background font-body text-foreground"
    >
      <div 
        className="pointer-events-none fixed inset-0 z-10 transition-all duration-300" 
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.1), transparent 80%)`,
        }}
      />
      
      <header className="px-4 lg:px-6 h-16 flex items-center fixed top-0 w-full z-50 backdrop-blur-sm border-b border-white/5">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6" />
          <span className="font-headline text-lg font-bold">Luminary Folio</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Portfolio
          </Link>
          <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Services
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      
      <main className="flex-1 pt-16">
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Our Masterpieces</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore a gallery of our finest work, where every cover is a canvas and every page tells a story of elegance and imagination.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12 [perspective:2000px]">
              {projects.map((project) => (
                <motion.div 
                  key={project.title} 
                  className="group relative transform-style-3d transition-transform duration-500 ease-in-out hover:[transform:translateZ(40px)_rotateX(10deg)]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-card/60 backdrop-blur-sm border-border/50 transition-all duration-500 ease-in-out group-hover:shadow-[0_25px_50px_-12px_hsl(var(--primary)/0.25)] group-hover:border-primary/50">
                    <Image 
                      src={project.imageUrl}
                      alt={`Book cover for ${project.title}`}
                      width={600}
                      height={800}
                      className="rounded-t-lg object-cover w-full aspect-[3/4] transition-transform duration-500 ease-in-out group-hover:scale-105"
                      data-ai-hint={project.aiHint}
                    />
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold font-headline">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border/20 bg-black/20">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Luminary Folio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:text-primary transition-colors" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:text-primary transition-colors" prefetch={false}>
            Terms
          </Link>
        </nav>
      </footer>
    </div>
  );
}
