
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import Image from "next/image";
import { BookOpen } from "lucide-react";

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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative mx-auto w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full -rotate-12 transition-transform duration-500 hover:rotate-0"></div>
                   <Image
                      src="https://placehold.co/400x400.png"
                      alt="Designdile Team Portrait"
                      width={400}
                      height={400}
                      className="relative object-cover rounded-full shadow-2xl border-4 border-background"
                      data-ai-hint="creative team portrait"
                    />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                  Designdile
                </h1>
                <p className="mt-2 text-xl font-medium" style={{ color: "#684DF4" }}>
                  Your Vision, Our Design Expertise
                </p>
                <p className="mt-6 text-lg text-muted-foreground font-roboto-medium max-w-xl mx-auto md:mx-0">
                  We are a seasoned creative team with over four years of experience in designing modern, reader-friendly cookbooks, eBooks, and print books. Skilled in Adobe InDesign, Photoshop, Illustrator, and industry-standard publishing platforms like Lulu, IngramSpark, and Amazon KDP, we bring your book to life with precision and style.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
