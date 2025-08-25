
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { ArrowRight, Briefcase, Award, Users, Facebook, Instagram, Linkedin, Twitter, Star, Store, Palette, Layers, LayoutTemplate, BookCopy, FileUp, Printer, CaseSensitive, Building, CheckCircle, Quote, BookText, BookImage, TabletSmartphone, FileCog, Baseline, Globe, LibraryBig, FileCheck2, DribbbleIcon, MessageSquare } from "lucide-react";
=======
import { ArrowRight, Briefcase, Award, Users, Facebook, Instagram, Linkedin, Twitter, Star, Store, Palette, Layers, LayoutTemplate, BookCopy, FileUp, Printer, CaseSensitive, Building, CheckCircle, Quote, MessageCircle, Mail } from "lucide-react";
>>>>>>> origin/master
import { motion, useReducedMotion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import AnimatedLogo from "@/components/ui/animated-logo";
import { AnimatedIconCard, GlobalIcon, BadgeIcon } from "@/components/ui/global-icon";

const tools = [
  { 
    image: "/images/icons/indesign_5611049.png", 
    aiHint: "adobe indesign logo", 
    name: "Adobe InDesign", 
    description: "Professional book layout design." 
  },
  { 
    image: "/images/icons/photoshop-lightroom.png", 
    aiHint: "adobe photoshop logo", 
    name: "Adobe Photoshop", 
    description: "Advanced image editing." 
  },
  { 
    image: "/images/icons/logo.png", 
    aiHint: "adobe illustrator logo", 
    name: "Adobe Illustrator", 
    description: "Vector graphics and illustrations." 
  },
  { 
    image: "/images/icons/canva.png", 
    aiHint: "canva logo", 
    name: "Canva", 
    description: "Quick creative design layouts." 
  },
  { 
    image: "/images/icons/Microsoft_Office_Word_Logo.png", 
    aiHint: "microsoft word logo", 
    name: "Microsoft Word", 
    description: "Manuscript preparation & editing." 
  },
  { 
    image: "/images/icons/logo.png", 
    aiHint: "microsoft excel logo", 
    name: "Microsoft Excel", 
    description: "Data organization & recipe indexing." 
  },
  { 
    image: "/images/icons/Microsoft_Office_PowerPoint_Logo.png", 
    aiHint: "microsoft powerpoint logo", 
    name: "Microsoft PowerPoint", 
    description: "Visual presentations & pitch decks." 
  },
  { 
    image: "/images/icons/acrobat_5968377.png", 
    aiHint: "adobe acrobat logo", 
    name: "Adobe Acrobat", 
    description: "PDF creation and editing." 
  },
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
<<<<<<< HEAD
  { name: "Instagram", tagline: "See behind-the-scenes of our creative process.", icon: Instagram, href: "https://www.instagram.com/tanzeel_designz/" },
  { name: "Pinterest", tagline: "Discover our book cover inspirations and moodboards.", icon: FaPinterest, href: "https://www.pinterest.com/tanzeel_designz/" },
  { name: "LinkedIn", tagline: "Explore our professional portfolio and collaborations.", icon: Linkedin, href: "https://pk.linkedin.com/in/tanzeeldesignz" },
  { name: "Dribbble", tagline: "See our creative shots and design experiments.", icon: DribbbleIcon, href: "https://dribbble.com/thedesigndile/" },
  { name: "Behance", tagline: "View our curated design showcases.", icon: Briefcase, href: "https://www.behance.net/tanzeel_designz" },
  { name: "Threads", tagline: "Join the conversation on our latest thoughts.", icon: MessageSquare, href: "https://www.threads.com/@tanzeel_designz" },
  { name: "X (Twitter)", tagline: "Stay updated with our latest news and insights.", icon: Twitter, href: "https://x.com/thedesigndile" },
=======
  { name: "WhatsApp", tagline: "Get instant support and quick quotes for your book design project.", icon: MessageCircle, href: "https://wa.me/923157504305" },
  { name: "Facebook", tagline: "Stay updated with our latest book design projects.", icon: Facebook, href: "#" },
  { name: "Instagram", tagline: "See behind-the-scenes of our creative process.", icon: Instagram, href: "#" },
  { name: "LinkedIn", tagline: "Explore our professional portfolio and collaborations.", icon: Linkedin, href: "#" },
  { name: "Behance", tagline: "View our curated design showcases.", icon: Briefcase, href: "#" },
  { name: "Pinterest", tagline: "Discover our book cover inspirations and moodboards.", icon: Instagram, href: "#" },
  { name: "Upwork", tagline: "Hire us for professional book design services.", icon: Briefcase, href: "#" },
  { name: "Fiverr", tagline: "Get custom book design solutions at flexible packages.", icon: Store, href: "#" },
  { name: "Dribbble", tagline: "See our creative shots and design experiments.", icon: Palette, href: "#" },
>>>>>>> origin/master
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

<<<<<<< HEAD
const services = [
  { icon: BookText, title: "Custom Interior Layouts", description: "Tailored print and eBook layouts for all genres, ensuring a beautiful reading experience." },
  { icon: BookImage, title: "Cover Design & Branding", description: "Genre-matched covers with cohesive series identity that captivate your target audience." },
  { icon: TabletSmartphone, title: "eBook Conversion", description: "Optimized formatting for Kindle, EPUB, and Kobo to ensure flawless digital delivery." },
  { icon: FileCog, title: "Print-Ready Formatting", description: "Final PDFs meeting global publishing standards for a professional and polished final product." },
  { icon: Baseline, title: "Typography Consulting", description: "Expert font pairing, hierarchy, and layout strategy to enhance readability and style." },
  { icon: Globe, title: "Author Platform Support", description: "Integration of design assets with author websites and social media profiles for a consistent brand." },
  { icon: LibraryBig, title: "Series & Collection Design", description: "Unified layouts and covers for multi-book projects that create a strong, recognizable brand." },
  { icon: FileCheck2, title: "Publishing Prep & File Audit", description: "Pre-flight checks to ensure your files are perfect for upload and print, avoiding costly errors." },
];

const platforms = [
  { image: "https://placehold.co/128x64.png", aiHint: "amazon kdp logo", name: "Amazon KDP" },
  { image: "https://placehold.co/128x64.png", aiHint: "lulu logo", name: "Lulu" },
  { image: "https://placehold.co/128x64.png", aiHint: "ingramspark logo", name: "IngramSpark" },
];

// A placeholder for the Pinterest icon
const FaPinterest = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.017 1.5c-5.932 0-8.527 4.144-8.527 8.322 0 3.422 2.185 6.431 5.163 7.424.316.059.431-.137.431-.304 0-.15-.006-1.077-.009-1.874-1.995.433-2.417-1.12-2.417-1.12-.288-.731-.703-.926-.703-.926-.576-.393.044-.385.044-.385.637.045.973.654.973.654.567.971 1.487.69 1.85.527.058-.41.222-.69.404-.848-1.411-.16-2.894-.705-2.894-3.142 0-.694.248-1.261.654-1.706-.065-.161-.284-.808.062-1.682 0 0 .533-.171 1.745.651.507-.141 1.052-.212 1.594-.214.542.002 1.087.073 1.594.214 1.212-.822 1.745-.651 1.745-.651.346.874.127 1.521.062 1.682.407.445.653 1.012.653 1.706 0 2.446-1.484 2.981-2.898 3.137.228.196.43.583.43 1.176 0 .848-.008 1.531-.008 1.738 0 .168.114.364.432.303C18.358 16.255 20.54 13.24 20.54 9.822c0-4.178-2.595-8.322-8.523-8.322z"></path></svg>
);

=======
>>>>>>> origin/master

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
                    src="https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=1974&auto=format&fit=crop"
                    alt="Portrait of Design Dile Founder"
                    width={600}
                    height={800}
                    className="object-cover rounded-lg shadow-2xl w-full h-full filter grayscale"
                    data-ai-hint="male creative portrait"
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
                    "Design is not decoration — it's cognitive architecture."
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
<<<<<<< HEAD
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary font-roboto">Book Design Services</h2>
              <p className="max-w-[700px] text-muted-foreground">Comprehensive design solutions to bring your book to life, from cover to cover.</p>
=======
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white font-roboto">Tools &amp; Software We Use</h2>
>>>>>>> origin/master
            </div>
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {tools.map((tool, index) => (
                    <motion.div key={tool.name} variants={itemVariants}>
                        <Card className="h-full group relative flex flex-col items-center justify-center p-6 bg-card/80 border border-border/50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary">
<<<<<<< HEAD
                            <service.icon className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                            <h3 className="text-lg font-semibold text-center font-playfair">{service.title}</h3>
                            <p className="text-sm text-muted-foreground text-center mt-1 flex-grow">{service.description}</p>
=======
                            <Image 
                                src={tool.image} 
                                alt={`${tool.name} logo`} 
                                width={64} 
                                height={64} 
                                className="h-12 w-12 mb-4 transition-transform duration-300 group-hover:scale-110" 
                                data-ai-hint={tool.aiHint} 
                            />
                            <h3 className="text-lg font-semibold text-center font-playfair">{tool.name}</h3>
                            <p className="text-sm text-muted-foreground text-center mt-1 flex-grow">{tool.description}</p>
>>>>>>> origin/master
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
<<<<<<< HEAD
             <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold tracking-tight mb-8">Supported Publishing Platforms</h3>
                <div className="flex justify-center items-center gap-12">
                    {platforms.map(platform => (
                        <div key={platform.name} className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                            <Image src={platform.image} alt={`${platform.name} logo`} width={128} height={64} className="h-16 w-auto object-contain" data-ai-hint={platform.aiHint} />
                            <span className="font-semibold">{platform.name}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* Tools & Software Section */}
        <section id="tools" className="w-full py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary font-roboto">Tools &amp; Software We Use</h2>
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
=======
>>>>>>> origin/master
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 bg-secondary/20 border-y border-border/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
<<<<<<< HEAD
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary font-roboto">What Our Clients Say</h2>
=======
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white font-roboto">What Our Clients Say</h2>
>>>>>>> origin/master
              <p className="max-w-[700px] text-muted-foreground">Hear from authors and publishers who have trusted us with their vision.</p>
            </div>
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-5xl mx-auto"
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
                      <Card className="h-full flex flex-col p-8 bg-card/80 border border-border/50 rounded-lg shadow-sm text-center">
                        <div className="flex-grow flex flex-col items-center">
                          <Image
                            src={testimonial.image}
                            alt={`Portrait of ${testimonial.name}`}
                            width={80}
                            height={80}
                            className="rounded-full mb-4"
                            data-ai-hint={testimonial.aiHint}
                          />
                           <div className="flex items-center justify-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                          <Quote className="h-8 w-8 text-primary/50 mb-2" />
                          <blockquote className="text-lg italic text-foreground mb-4 flex-grow">
                            {testimonial.quote}
                          </blockquote>
                        </div>
                        <div className="mt-auto">
                          <p className="font-semibold text-lg">{testimonial.name}</p>
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

<<<<<<< HEAD
=======


>>>>>>> origin/master
        {/* Social Media Section */}
        <section id="connect" className="w-full py-12 md:py-24 border-t border-border/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
<<<<<<< HEAD
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary font-roboto">Connect With Us</h2>
=======
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white font-roboto">Connect With Us</h2>
>>>>>>> origin/master
                </div>
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {socialPlatforms.map((platform, index) => (
                        <motion.div key={platform.name} variants={itemVariants}>
                            <a href={platform.href} target="_blank" rel="noopener noreferrer" className="group block text-center">
                                <Card className="h-full group relative flex flex-col items-center justify-center p-6 bg-card/80 border border-border/50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary">
                                    <platform.icon className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                                    <h3 className="text-lg font-semibold text-center font-playfair">{platform.name}</h3>
                                    <p className="text-sm text-muted-foreground text-center mt-1 flex-grow">{platform.tagline}</p>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

      </main>

      {/* Footer Section */}
      <footer className="w-full bg-background/80 backdrop-blur-sm border-t border-border/20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <AnimatedLogo />
              </div>
              <p className="text-muted-foreground max-w-md mb-4">
                Transforming books through innovative design and creative systems. We empower authors with elegant, repeatable layouts that elevate every page.
              </p>
                             <div className="flex space-x-4">
                 {socialPlatforms.slice(0, 4).map((platform) => (
                   <a
                     key={platform.name}
                     href={platform.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-muted-foreground hover:text-primary transition-colors group"
                   >
                     <platform.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                   </a>
                 ))}
               </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">WhatsApp: 0315 750 43 05</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Contact@designdile</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Design Dile. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
