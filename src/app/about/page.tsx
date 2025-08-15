
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Award, Users, Facebook, Instagram, Linkedin, Twitter, Star, Store, Palette } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const tools = [
  { image: "https://placehold.co/64x64.png", aiHint: "adobe indesign logo", name: "Adobe InDesign", description: "Professional book layout design." },
  { image: "https://placehold.co/64x64.png", aiHint: "adobe photoshop logo", name: "Adobe Photoshop", description: "Advanced image editing." },
  { image: "https://placehold.co/64x64.png", aiHint: "adobe illustrator logo", name: "Adobe Illustrator", description: "Vector graphics and illustrations." },
  { image: "https://placehold.co/64x64.png", aiHint: "canva logo", name: "Canva", description: "Quick creative design layouts." },
  { image: "https://placehold.co/64x64.png", aiHint: "microsoft word logo", name: "Microsoft Word", description: "Manuscript preparation & editing." },
  { image: "https://placehold.co/64x64.png", aiHint: "microsoft excel logo", name: "Microsoft Excel", description: "Data organization & recipe indexing." },
  { image: "https://placehold.co/64x64.png", aiHint: "microsoft powerpoint logo", name: "Microsoft PowerPoint", description: "Visual presentations & pitch decks." },
  { image: "https://placehold.co/64x64.png", aiHint: "google docs logo", name: "Google Docs", description: "Real-time content collaboration." },
];

const portfolioItems = [
    { category: 'Cookbooks', title: 'Modern Minimalist Cookbook', description: 'Clean layouts for a chef-focused cookbook.', image: 'https://placehold.co/600x800.png', aiHint: 'cookbook cover' },
    { category: 'eBooks', title: 'The Digital Nomad Guide', description: 'An engaging eBook designed for digital readers.', image: 'https://placehold.co/600x800.png', aiHint: 'ebook cover travel' },
    { category: 'Print Books', title: 'Whispers of the Forest', description: 'A fantasy novel with custom typography.', image: 'https://placehold.co/600x800.png', aiHint: 'fantasy book' },
    { category: 'Cover Designs', title: 'Sci-Fi Saga', description: 'A striking cover for a new science fiction series.', image: 'https://placehold.co/600x800.png', aiHint: 'sci-fi book' },
    { category: 'Cookbooks', title: 'Vegan Delights', description: 'Vibrant and fresh design for a vegan recipe book.', image: 'https://placehold.co/600x800.png', aiHint: 'vegan cookbook' },
    { category: 'Print Books', title: 'Architectural Wonders', description: 'A large-format print book on modern architecture.', image: 'https://placehold.co/600x800.png', aiHint: 'architecture book' },
];

const socialPlatforms = [
  { name: "Facebook", tagline: "Stay updated with our latest book design projects.", icon: Facebook, href: "#" },
  { name: "Instagram", tagline: "See behind-the-scenes of our creative process.", icon: Instagram, href: "#" },
  { name: "LinkedIn", tagline: "Explore our professional portfolio and collaborations.", icon: Linkedin, href: "#" },
  { name: "Behance", tagline: "View our curated design showcases.", icon: Briefcase, href: "#" }, // Placeholder
  { name: "Pinterest", tagline: "Discover our book cover inspirations and moodboards.", icon: Instagram, href: "#" }, // Placeholder
  { name: "Upwork", tagline: "Hire us for professional book design services.", icon: Briefcase, href: "#" },
  { name: "Fiverr", tagline: "Get custom book design solutions at flexible packages.", icon: Store, href: "#" },
  { name: "Dribbble", tagline: "See our creative shots and design experiments.", icon: Palette, href: "#" }, // Placeholder
];

const testimonials = [
  {
    quote: "Working with them was a dream. Their design sense is impeccable and they delivered beyond our expectations.",
    name: "Jane Doe",
    title: "Bestselling Author",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    aiHint: "professional woman portrait"
  },
  {
    quote: "The cover design captured the essence of my story perfectly. I've seen a significant increase in sales since the redesign.",
    name: "John Smith",
    title: "Founder, PublixPress",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    aiHint: "male founder headshot"
  },
  {
    quote: "Professional, responsive, and incredibly talented. They transformed my manuscript into a beautiful, readable book.",
    name: "Emily White",
    title: "Independent Publisher",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    aiHint: "creative professional portrait"
  },
  {
    quote: "The attention to detail in the typography and layout was extraordinary. It made my book a pleasure to read.",
    name: "David Chen",
    title: "Novelist",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    aiHint: "male author portrait"
  },
  {
    quote: "An amazing partner for any author. Their creativity and understanding of the market are second to none.",
    name: "Sophia Rodriguez",
    title: "Marketing Director, Booknova",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    aiHint: "female marketing director"
  },
  {
    quote: "I couldn't be happier with the final product. The design process was smooth, collaborative, and inspiring.",
    name: "Michael Brown",
    title: "First-time Author",
    rating: 5,
    image: "https://placehold.co/100x100.png",
    aiHint: "happy man portrait"
  },
];


export default function AboutPage() {
  const reduceMotion = useReducedMotion();
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <MouseSpotlight />
      <MainNav />
      <main className="container mx-auto px-4 md:px-6 py-24">
        
        {/* Profile Overview Section */}
        <section className="relative py-12 md:py-20 overflow-hidden pt-16">
            <div className="absolute inset-0 -z-10 opacity-5">
              <div 
                className="absolute inset-0 bg-repeat"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
              <div className="md:col-span-5 relative flex justify-center">
                <div className="relative w-[300px] h-[400px] md:w-full md:h-[500px]">
                  <Image
                    src="https://placehold.co/600x800.png"
                    alt="Portrait of Design Dile"
                    width={600}
                    height={800}
                    className="object-cover rounded-lg shadow-2xl w-full h-full filter grayscale"
                    data-ai-hint="creative portrait"
                  />
                   <div className="absolute inset-0 rounded-lg bg-primary/20 mix-blend-multiply pointer-events-none"></div>
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col gap-8">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground font-playfair">
                    Mr. Tanzeel Ur Rehman
                  </h1>
                  <p className="mt-2 text-xl font-medium text-primary">
                    Founder of Design Dile, Book Designer &amp; Creative Systems Architect
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

        {/* Tools & Software Section */}
        <section id="tools" className="w-full py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase text-primary font-roboto">Tools &amp; Software We Use</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {tools.map((tool) => (
                <Card key={tool.name} className="group relative flex flex-col items-center justify-center p-6 bg-card/80 border border-border/50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary">
                  <Image src={tool.image} alt={`${tool.name} logo`} width={64} height={64} className="h-12 w-12 mb-4 transition-transform duration-300 group-hover:scale-110" data-ai-hint={tool.aiHint} />
                  <h3 className="text-lg font-semibold text-center font-playfair">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mt-1">{tool.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 bg-secondary/20 border-y border-border/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase text-primary font-roboto">What Our Clients Say</h2>
              <p className="max-w-[700px] text-muted-foreground">Hear from authors and publishers who have trusted us with their vision.</p>
            </div>
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-4xl mx-auto"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col justify-between p-6 bg-card/80 border border-border/50 rounded-lg shadow-sm text-center">
                        <div className="flex-grow">
                          <Image
                            src={testimonial.image}
                            alt={`Portrait of ${testimonial.name}`}
                            width={80}
                            height={80}
                            className="rounded-full mx-auto mb-4"
                            data-ai-hint={testimonial.aiHint}
                          />
                          <blockquote className="text-lg italic text-foreground mb-4">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center justify-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                            ))}
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>

        {/* Portfolio Highlights Section */}
        <section id="portfolio-highlights" className="w-full py-12 md:py-24 border-t border-border/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase text-primary font-roboto">Portfolio Highlights</h2>
                </div>
                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="cookbooks">Cookbooks</TabsTrigger>
                        <TabsTrigger value="ebooks">eBooks</TabsTrigger>
                        <TabsTrigger value="print">Print Books</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="all">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {portfolioItems.map((item) => (
                                <Card key={item.title} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
                                    <Image src={item.image} alt={item.title} width={600} height={800} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" data-ai-hint={item.aiHint} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                                        <h3 className="text-xl font-bold text-white mb-2 font-playfair">{item.title}</h3>
                                        <p className="text-white/90 text-sm mb-4">{item.description}</p>
                                        <Button variant="secondary" size="sm" className="self-start">View Project</Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                    {['cookbooks', 'ebooks', 'print'].map(category => (
                        <TabsContent key={category} value={category}>
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {portfolioItems.filter(item => item.category.toLowerCase().includes(category.slice(0, -1))).map((item) => (
                                    <Card key={item.title} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
                                        <Image src={item.image} alt={item.title} width={600} height={800} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" data-ai-hint={item.aiHint} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                                            <h3 className="text-xl font-bold text-white mb-2 font-playfair">{item.title}</h3>
                                            <p className="text-white/90 text-sm mb-4">{item.description}</p>
                                            <Button variant="secondary" size="sm" className="self-start">View Project</Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>

        {/* Social Media Section */}
        <section id="connect" className="w-full py-12 md:py-24 border-t border-border/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase text-primary font-roboto">Connect With Us</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {socialPlatforms.map((platform) => (
                        <a key={platform.name} href={platform.href} target="_blank" rel="noopener noreferrer" className="group block text-center">
                             <Card className="relative overflow-hidden group border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 h-full p-6 flex flex-col items-center justify-center">
                                <div className="rounded-full border-2 border-primary/20 p-4 bg-background group-hover:border-primary transition-all group-hover:scale-110 group-hover:-translate-y-1">
                                    <platform.icon className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-125" />
                                </div>
                                <h3 className="text-xl font-bold mt-4 font-playfair">{platform.name}</h3>
                                <p className="text-muted-foreground mt-2 text-sm">{platform.tagline}</p>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}

    