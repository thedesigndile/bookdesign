
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <MouseSpotlight />
      <MainNav />
      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="text-center pt-16">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                About Us
            </h1>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl mt-6">
                This page is currently being updated.
            </p>
        </div>
      </main>
    </div>
  );
}
