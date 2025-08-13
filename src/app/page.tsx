"use client";

import { useState, useEffect, type SVGProps } from "react";
import Link from "next/link";
import Image from "next/image";
import { Book, PenTool, Palette, Type, Bot, ArrowRight, Twitter, Linkedin, Instagram, Facebook, Trophy, Users, Star, CheckCircle, MoveUpRight, Wand2, LayoutTemplate, ImagePlus, BookOpenCheck, Wrench, FileText, Printer, CaseLower, X, PenSquare, GraduationCap, Mic, Megaphone, Store, Layers } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView, useAnimation, animate, AnimatePresence } from 'framer-motion';
import { AnimatedHeroBackground } from "@/components/ui/animated-hero-background";
import React from "react";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import { Badge } from "@/components/ui/badge";
import AnimatedLogo from "@/components/ui/animated-logo";
import { MainNav } from "@/components/main-nav";
import PortfolioGallery, { type PortfolioItem, type GalleryImage } from "@/components/portfolio-gallery";
import { getPortfolioItems } from "@/services/portfolioService";
import { Skeleton } from "@/components/ui/skeleton";

const services = [
  {
    icon: PenTool,
    title: "Cover Design",
    description: "Crafting captivating first impressions that beckon readers from the shelf.",
  },
  {
    icon: Type,
    title: "Typography & Layout",
    description: "Meticulous typesetting and interior layout for an immersive reading experience.",
  },
  {
    icon: Palette,
    title: "Illustration & Art",
    description: "Bespoke illustrations and artwork that bring your story's world to life.",
  },
  {
    icon: Book,
    title: "Full Jacket Design",
    description: "Holistic design including spine, back cover, and flaps for a complete package.",
  },
];

const trustedByLogos = [
  {
    name: "PublixPress",
    Logo: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 140 40" className="h-10 w-auto" {...props}>
        <text x="0" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" letterSpacing="1" fill="hsl(var(--primary))">
          Publix<tspan fill="currentColor">Press</tspan>
        </text>
      </svg>
    )
  },
  {
    name: "Typeflow",
    Logo: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 120 40" className="h-10 w-auto" {...props}>
        <path d="M10 10 Q15 0, 20 10 T30 10" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none"/>
        <text x="40" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" fill="currentColor">Typeflow</text>
      </svg>
    )
  },
  {
    name: "Inkerra",
    Logo: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 120 40" className="h-10 w-auto" {...props}>
        <text x="0" y="30" fontFamily="serif" fontSize="32" fontWeight="600" fill="currentColor" fontStyle="italic">
          Inke<tspan fill="hsl(var(--primary))">rr</tspan>
        </text>
      </svg>
    )
  },
  {
    name: "Booknova",
    Logo: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 130 40" className="h-10 w-auto" {...props}>
        <path d="M20 5 L23 15 L33 15 L25 22 L28 32 L20 25 L12 32 L15 22 L7 15 L17 15 Z" fill="hsl(var(--primary))"/>
        <text x="40" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" fill="currentColor">Booknova</text>
      </svg>
    )
  },
  {
    name: "Craftlab Media",
    Logo: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 180 40" className="h-10 w-auto" {...props}>
        <rect x="0" y="10" width="20" height="20" fill="hsl(var(--primary))" rx="4"/>
        <text x="30" y="30" fontFamily="monospace" fontSize="26" fontWeight="500" fill="currentColor">Craftlab Media</text>
      </svg>
    )
  },
  {
    name: "Readistack",
    Logo: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 150 40" className="h-10 w-auto" {...props}>
        <rect x="0" y="5" width="25" height="5" fill="hsl(var(--primary))"/>
        <rect x="0" y="15" width="25" height="5" fill="hsl(var(--primary))" opacity="0.7"/>
        <rect x="0" y="25" width="25" height="5" fill="hsl(var(--primary))" opacity="0.4"/>
        <text x="35" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" fill="currentColor">Readistack</text>
      </svg>
    )
  },
  {
    name: "Printory",
    Logo: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 120 40" className="h-10 w-auto" {...props}>
        <path d="M10 30 C 30 10, 60 10, 80 30" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <text x="0" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" fill="currentColor">Printory</text>
      </svg>
    )
  },
  {
    name: "Zinfolio",
    Logo: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 130 40" className="h-10 w-auto" {...props}>
        <path d="M5 20 A 15 15, 0, 0, 1, 35 20" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none"/>
        <text x="45" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" fill="currentColor">Zinfolio</text>
      </svg>
    )
  },
];


const whoWeHelp = [
    { icon: PenSquare, title: "Content Creators", description: "Convert blogs, newsletters, and notes into stunning lead magnets." },
    { icon: GraduationCap, title: "Coaches & Educators", description: "Build brand authority with professionally designed learning assets." },
    { icon: Mic, title: "Video & Podcast Hosts", description: "Turn audio/video content into ebooks, transcripts, and summaries." },
    { icon: Megaphone, title: "Marketers & Agencies", description: "Save time with client-branded ebooks, case studies, and whitepapers." },
    { icon: Store, title: "Small Businesses", description: "Grow subscriber lists by repurposing existing content into powerful assets." },
    { icon: Layers, title: "Course Creators", description: "Recycle lessons and modules and modules into companion guides, PDFs, or flipbooks." },
];

const faqs = [
  {
    question: "What services do you offer in book design?",
    answer: "We offer a comprehensive suite of services including cover design, interior layout and typesetting, illustration, and full jacket design for both print and digital formats. Our goal is to provide a complete design solution from concept to completion."
  },
  {
    question: "Can you design both print and eBook versions?",
    answer: "Absolutely. We specialize in creating cohesive designs that work beautifully in both print (paperback, hardcover) and digital (ePub, Mobi, PDF) formats, ensuring a consistent brand experience for your readers across all platforms."
  },
  {
    question: "How long does the book formatting process take?",
    answer: "The timeline depends on the complexity and length of the manuscript. A standard interior layout for a novel typically takes 2-4 weeks. Cover designs can take 1-3 weeks. We provide a detailed project timeline after our initial consultation."
  },
  {
    question: "Do you also design covers or only interiors?",
    answer: "We design both! We believe the cover and interior should work together to create a seamless experience. You can hire us for cover design, interior formatting, or a complete package that includes both."
  },
  {
    question: "What file formats will I receive?",
    answer: "For print, we provide press-ready PDF files. For eBooks, you'll receive validated ePub and/or Mobi files compatible with all major platforms like Amazon KDP, Apple Books, and Kobo."
  },
  {
    question: "Can you help with publishing on Amazon KDP?",
    answer: "While our primary focus is design, we provide files that are optimized and ready for direct upload to platforms like Amazon KDP, IngramSpark, and others. We can also offer guidance on the upload process."
  },
  {
    question: "Do you accept revisions after the initial design?",
    answer: "Yes, our design process is collaborative. We include a set number of revision rounds in our proposals to ensure you are completely satisfied with the final product. Additional revisions are available if needed."
  },
  {
    question: "How do I get started with your services?",
    answer: "The best way to start is by filling out the contact form on our website with details about your project. We'll then schedule a complimentary consultation to discuss your vision, goals, and how we can help."
  },
  {
    question: "Do you provide custom illustrations for books?",
    answer: "Yes, we have talented illustrators on our team who can create custom artwork, maps, and spot illustrations that perfectly match your story's tone and style."
  },
  {
    question: "What makes your book design service different?",
    answer: "We combine artistic passion with marketing expertise. Our designs are not only beautiful but also strategically crafted to attract your target audience and enhance readability, ensuring your book stands out in a crowded market."
  }
];

const certificationFeatures = [
    {
        title: "Creative Work Ethic",
        description: "Master layout consistency, typography hierarchy, and editorial detail publishers trust.",
    },
    {
        title: "Industry-Endorsed Certification",
        description: "Build a portfolio that meets the creative and technical standards of professional publishers.",
    },
    {
        title: "Client Confidence & Brand Trust",
        description: "Show proven design capabilities that help brands and authors trust your design direction.",
    },
    {
        title: "Career-Ready Credibility",
        description: "89% of clients prefer certified designers for publishing projects (Survey: 2025 Publishing Industry Outlook).",
    },
];

const dreamBookFeatures = [
  { icon: LayoutTemplate, text: "Book Layout Design" },
  { icon: Wrench, text: "Manual Book Formatting" },
  { icon: Palette, text: "Expert Interior Design" },
  { icon: FileText, text: "Custom Page Structuring" },
  { icon: Printer, text: "Print-Ready Book Setup" },
  { icon: CaseLower, text: "Precision Typesetting" },
];


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  projectDetails: z.string().min(10, { message: "Please provide some details about your project." }),
});

function Counter({ to, className }: { to: number; className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={ref} className={className}>0</span>;
}


export default function Home() {
  const { toast } = useToast();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const items = await getPortfolioItems();
        setPortfolioItems(items);
      } catch (error) {
        console.error("Failed to fetch portfolio items:", error);
        toast({
          title: "Error",
          description: "Could not load portfolio projects. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioData();
  }, [toast]);

  const openGallery = (item: PortfolioItem) => {
    if (item.galleryImages && item.galleryImages.length > 0) {
      setSelectedPortfolioItem(item);
      setIsGalleryOpen(true);
    }
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedPortfolioItem(null);
  };

  const visiblePortfolioItems = portfolioItems.slice(0, 5);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectDetails: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for reaching out. We'll be in touch soon.",
    });
    form.reset();
  }

  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground"
    >
      <MouseSpotlight />
      <MainNav activeLink="Home"/>
      
      <main className="flex-1 pt-16">
        <section id="hero" className="relative w-full h-screen flex items-center py-12">
            <AnimatedHeroBackground />
            <div className="container z-20 mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        className="flex flex-col gap-6 text-center md:text-left order-2 md:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                            Crafting Stories, Visually
                        </h1>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            We are a premium design agency dedicated to creating stunning, memorable book covers and interiors that capture the essence of your narrative.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
                            <Link href="#portfolio" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-md font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" prefetch={false}>
                                Explore Our Work
                            </Link>
                            <Link href="#contact" className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background/50 px-8 text-md font-semibold text-foreground shadow-lg transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" prefetch={false}>
                                Start a Project
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative h-[50vh] md:h-[60vh] transform-style-3d order-1 md:order-2"
                        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                         <div className="absolute inset-0 bg-card/10 backdrop-blur-sm rounded-2xl border border-border/20"></div>
                        <Image
                            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2787&auto=format&fit=crop"
                            alt="Book Design Showcase"
                            width={800}
                            height={600}
                            className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-xl shadow-2xl"
                            data-ai-hint="books library"
                        />
                    </motion.div>
                </div>
            </div>
        </section>

        <section className="w-full py-12 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto text-center">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured On & Trusted By</h2>
            <div className="relative mt-12 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
              <div className="flex w-max marquee">
                {[...trustedByLogos, ...trustedByLogos].map(({ Logo, name }, index) => (
                  <div key={`${name}-${index}`} className="flex-shrink-0 w-64 h-20 flex items-center justify-center px-8">
                    <div className="text-foreground/70 transition-all duration-300 hover:text-foreground hover:scale-105">
                      <Logo />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="w-full py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Award-Winning Portfolio</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore a curated selection of our finest book designs, where each project showcases our commitment to visual storytelling and craftsmanship.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mt-8 md:mt-12">
              {isLoading
                ? Array.from({ length: 5 }).map((_, i) => (
                    <Card key={i} className="h-full">
                      <Skeleton className="w-full h-full aspect-[3/4]" />
                    </Card>
                  ))
                : visiblePortfolioItems.map((item, i) => (
                    <Link key={i} href={item.link} prefetch={false} className="cursor-pointer">
                      <Card className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 h-full">
                        <div className="absolute inset-0 bg-black flex items-center justify-center">
                          <Image
                            src={item.image}
                            alt={`Book cover for ${item.title}`}
                            width={400}
                            height={550}
                            className="object-contain w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                            data-ai-hint={item.aiHint}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex flex-col justify-end p-4">
                          <h3 className="text-lg font-bold text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{item.title}</h3>
                        </div>
                      </Card>
                    </Link>
                  ))}
            </div>
              <div className="flex justify-center mt-12">
                 <Button
                  asChild
                  size="lg"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Link href="/portfolio">
                    View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
          </div>
        </section>

        <PortfolioGallery
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          portfolioItem={selectedPortfolioItem}
        />

        <section id="services" className="w-full py-12 md:py-24 bg-secondary/20 border-y border-border/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Design Ecosystem</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From concept to completion, our services are interconnected to bring your story to life with elegance and precision.
              </p>
            </div>
            <div className="mx-auto grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 mt-8 md:mt-12">
              {services.map((service, i) => (
                 <div
                  key={service.title}
                >
                  <Card className="relative overflow-hidden group border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 h-full">
                    <div className="absolute inset-[-200%] -z-10 bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--accent))_50%,hsl(var(--primary))_100%)] transition-transform duration-1000 group-hover:rotate-[-90deg]"></div>
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4 bg-card/95 backdrop-blur-sm h-full">
                      <div className="rounded-full border-2 border-primary/20 p-4 bg-background group-hover:border-primary transition-all group-hover:scale-110 group-hover:-translate-y-1">
                        <service.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-125" />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="certification" className="w-full py-12 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1555935316-fa92ea98e61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjZXJ0aWZpY2F0ZSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1NDk4ODg0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Book Design Certificate"
                            width={500}
                            height={700}
                            className="rounded-lg shadow-2xl object-cover w-full h-auto"
                            data-ai-hint="certificate portrait"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-3 rounded-md text-white flex items-center gap-2">
                             <Trophy className="h-6 w-6 text-primary" />
                            <span className="font-bold text-sm">Certified | BDP</span>
                        </div>
                    </motion.div>
                    <div className="flex flex-col gap-8">
                        <motion.h2 
                            className="text-3xl font-bold tracking-tighter sm:text-4xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Validate your craft. Elevate your design influence.
                        </motion.h2>
                        <div className="space-y-6">
                            {certificationFeatures.map((feature, i) => (
                                <motion.div 
                                    key={feature.title} 
                                    className="flex items-start gap-4 group"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 group-hover:bg-primary transition-colors">
                                      <CheckCircle className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="dream-book-editor" className="w-full py-12 bg-white dark:bg-transparent overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-16 -z-10">
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] text-primary/5" aria-hidden="true">
                      <defs>
                        <radialGradient id="dream-book-gradient" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="hsl(var(--primary) / 0.1)" />
                          <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
                        </radialGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#dream-book-gradient)"/>
                    </svg>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxib29rJTIwZWRpdG9yJTIwbW9ja3VwfGVufDB8fHx8MTc1NDk4OTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Book design editor mockup"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-2xl object-cover w-full h-auto relative"
                  data-ai-hint="design editor mockup"
                />
              </motion.div>
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="mb-2">Used by 50K+ Self-Published Authors</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-white">
                    Transform Ideas into Stunning Books — Effortlessly
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-muted-foreground">
                    Craft visually compelling, publication-ready books with smart formatting tools designed for authors, designers, and creators of all levels.
                  </p>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {dreamBookFeatures.map((feature, i) => (
                    <motion.div
                      key={feature.text}
                      className="group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-card/60 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30">
                        <div className="flex-shrink-0 bg-white dark:bg-background rounded-full p-2">
                           <feature.icon className="h-5 w-5 text-primary transition-colors group-hover:text-inherit" />
                        </div>
                        <span className="font-semibold text-sm text-gray-800 dark:text-foreground group-hover:text-primary-foreground">{feature.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="who-we-help" className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who We Help</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tailored solutions for every storyteller, educator, and marketer.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-12 mt-8 md:mt-12">
              {whoWeHelp.map((item) => (
                <div key={item.title}>
                  <Card className="h-full group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-border/50 hover:border-primary/50 hover:bg-secondary hover:text-secondary-foreground">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                       <div className="rounded-full border-2 border-primary/20 p-3 bg-background group-hover:border-primary transition-all group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-secondary-foreground">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground group-hover:text-secondary-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
             <div className="flex justify-center mt-12">
                <Button
                  asChild
                  size="lg"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Link href="/services">
                    See Our Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
            </div>
          </div>
        </section>
        
        <section id="stats" className="w-full py-12 bg-secondary/20 border-y border-border/20 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554189097-94974124a224?q=80&w=2940&auto=format&fit=crop')", opacity: 0.2 }}
            data-ai-hint="abstract pattern"
          ></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-5xl font-bold tracking-tighter">
                  <Counter to={95} />
                </h3>
                <p className="text-lg text-muted-foreground mt-2">Happy Clients</p>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Book className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-5xl font-bold tracking-tighter">
                  <Counter to={150} />
                </h3>
                <p className="text-lg text-muted-foreground mt-2">Projects Completed</p>
              </motion.div>
               <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Star className="h-12 w-12 text-primary mb-4" />
                 <h3 className="text-5xl font-bold tracking-tighter">
                   <Counter to={8} />+
                </h3>
                <p className="text-lg text-muted-foreground mt-2">Years of Experience</p>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Trophy className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-5xl font-bold tracking-tighter">
                  <Counter to={25} />+
                </h3>
                <p className="text-lg text-muted-foreground mt-2">Awards Won</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our book design services.
                </p>
              </div>
              <div className="mt-8 md:mt-12">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                     <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="border-none"
                    >
                      <Card className="bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors data-[state=open]:border-primary/50">
                        <AccordionTrigger className="group flex w-full items-center justify-between p-4 text-left font-sans font-medium text-base hover:no-underline data-[state=open]:text-primary data-[state=open]:pb-2">
                          <span>{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground p-4 pt-0 font-sans">
                          {faq.answer}
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

        <section id="contact" className="w-full py-12">
          <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Begin Your Narrative</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to turn your manuscript into a masterpiece? Fill out the form below and let's discuss how we can bring your vision to life.
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg">
              <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 md:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem className="text-left">
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="text-left">
                              <FormLabel>Your Email</FormLabel>
                              <FormControl>
                                <Input placeholder="jane.doe@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="projectDetails"
                        render={({ field }) => (
                          <FormItem className="text-left">
                            <FormLabel>Project Details</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us about your book, genre, and what you're looking for..." className="min-h-32" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex flex-col sm:flex-row gap-2 mt-2">
                        <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 active:scale-95">Submit Inquiry</Button>
                        <Button variant="outline" className="flex-1 gap-2 group" type="button" onClick={() => form.reset()}>
                          <Bot className="w-4 h-4 text-primary group-hover:text-primary transition-colors" /> AI Autofill
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-background border-t border-border/20 text-foreground">
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 flex flex-col gap-4 items-center md:items-start">
               <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <AnimatedLogo />
              </Link>
              <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
                A sensorial voyage through the future of book design, where every page is a masterpiece.
              </p>
               <div className="flex space-x-4 mt-2">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1" prefetch={false}><Twitter className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1" prefetch={false}><Linkedin className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1" prefetch={false}><Instagram className="h-5 w-5" /></Link>
                 <Link href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1" prefetch={false}><Facebook className="h-5 w-5" /></Link>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-semibold text-lg mb-4">Explore</h4>
              <div className="flex flex-col gap-3">
                <Link href="#hero" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Home</Link>
                <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Portfolio</Link>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Services</Link>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Contact</Link>
              </div>
            </div>

             <div className="md:col-span-2">
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <div className="flex flex-col gap-3">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>About Us</Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Blog</Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Careers</Link>
              </div>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for the latest design trends and insights.</p>
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" variant="outline">Subscribe</Button>
              </form>
            </div>

          </div>
          <div className="border-t border-border/20 mt-8 pt-6 flex flex-col justify-center items-center">
            <p className="text-sm text-muted-foreground">&copy; 2025 Design Dile. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
