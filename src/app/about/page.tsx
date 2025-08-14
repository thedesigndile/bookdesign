
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <MouseSpotlight />
      <MainNav />
      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="pt-16">
          <section className="relative py-12 md:py-20 overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-5">
              <div 
                className="absolute inset-0 bg-repeat"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
              {/* Left side: Portrait Image */}
              <div className="md:col-span-5 relative flex justify-center">
                <div className="relative w-[300px] h-[400px] md:w-full md:h-[500px]">
                  <Image
                    src="https://placehold.co/600x800.png"
                    alt="Portrait of Design Dile"
                    width={600}
                    height={800}
                    className="object-cover rounded-lg shadow-2xl w-full h-full filter grayscale duotone-sky"
                    data-ai-hint="creative portrait"
                  />
                   <div className="absolute inset-0 rounded-lg bg-primary/20 mix-blend-multiply pointer-events-none"></div>
                </div>
              </div>

              {/* Right side: Text Content */}
              <div className="md:col-span-7 flex flex-col gap-8">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground font-playfair">
                    Design Dile
                  </h1>
                  <p className="mt-2 text-xl font-medium text-primary">
                    Book Designer & Creative Systems Architect
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground font-sans max-w-prose">
                  I design transformative books rooted in clarity, wellness, and modular thinking. My layouts are built to scale — empowering authors with elegant, repeatable systems that elevate every page.
                </p>

                <blockquote className="border-l-4 border-primary pl-6 py-2 my-4">
                  <p className="text-xl italic text-foreground font-playfair">
                    “Design is not decoration — it’s cognitive architecture.”
                  </p>
                </blockquote>

                <div className="mt-4">
                  <Button asChild size="lg">
                    <Link href="/portfolio">
                      Explore My Work
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
