
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://placehold.co/600x400.png",
    alt: "Team brainstorming session with sticky notes on a whiteboard.",
    caption: "Ideation & Strategy",
    aiHint: "team brainstorming"
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "Close-up of a product prototype being assembled.",
    caption: "Product Prototyping",
    aiHint: "product prototype"
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "A founder giving a pitch presentation to investors.",
    caption: "Investor Pitch",
    aiHint: "pitch presentation"
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "Busy office environment with developers coding.",
    caption: "Development Phase",
    aiHint: "developers office"
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "A successful product launch event with confetti.",
    caption: "Launch Day",
    aiHint: "product launch"
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "A chart showing user growth and market traction.",
    caption: "Scaling & Growth",
    aiHint: "growth chart"
  },
];

export default function StartupGalleryPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <MouseSpotlight />
      <MainNav />
      <main className="container mx-auto px-4 md:px-6 py-24">
        
        <motion.section 
          id="gallery-header" 
          className="py-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ color: "hsl(var(--primary))" }}>
            Building a Successful Startup
          </h1>
          <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl mt-6">
            This gallery captures the dynamic journey of a startup, from the initial spark of an idea to the excitement of a successful launch. Each image tells a part of the story, showcasing the collaboration, innovation, and perseverance required to build something truly great.
          </p>
        </motion.section>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              variants={itemVariants}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={image.aiHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-bold text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {image.caption}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <section id="cta" className="py-16 text-center">
            <Button asChild size="lg" className="bg-[#684DF4] text-white hover:bg-[#5A3FD6] transition-colors duration-300 transform hover:scale-105">
                <Link href="/portfolio">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Portfolio
                </Link>
            </Button>
        </section>

      </main>
    </div>
  );
}
