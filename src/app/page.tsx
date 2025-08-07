
"use client";

import { useState, useEffect, type SVGProps } from "react";
import Link from "next/link";
import Image from "next/image";
import { Book, PenTool, Palette, Type, Bot, ArrowRight, Twitter, Linkedin, Instagram, Facebook, Trophy, Users, Star } from "lucide-react";
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
import { motion, useInView, useAnimation, animate } from 'framer-motion';
import { AnimatedHeroBackground } from "@/components/ui/animated-hero-background";
import React from "react";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";

function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <motion.path d="M12 12L22 7" stroke="hsl(var(--primary))" strokeWidth="2" />
      <motion.path d="M12 12V22" stroke="hsl(var(--primary))" strokeWidth="2" />
      <motion.path d="M12 12L2 7" stroke="hsl(var(--primary))" strokeWidth="2" />
      <motion.path
        d="M7 4.5L17 9.5"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

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
          Inke<tspan fill="hsl(var(--primary))">rr</tspan>a
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
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M18 8H38V34H32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 16H30V42H10V16Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 42V34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Content Creators",
        description: "Transform your digital content into beautifully designed lead magnets and ebooks.",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M24 22C27.3137 22 30 19.3137 30 16C30 12.6863 27.3137 10 24 10C20.6863 10 18 12.6863 18 16C18 19.3137 20.6863 22 24 22Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 38V36C38 30.4772 31.5228 26 24 26C16.4772 26 10 30.4772 10 36V38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Coaches & Educators",
        description: "Build authority and enhance learning with professionally designed workbooks and materials.",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
             <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M24 38C32.8366 38 40 30.8366 40 22C40 13.1634 32.8366 6 24 6C15.1634 6 8 13.1634 8 22C8 26.345 10.134 30.262 13.5 33" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 28L13 42L21 38L24 42L27 38L35 42V28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Video & Podcast Hosts",
        description: "Repurpose your spoken content into valuable ebooks, summaries, and show notes.",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M14 10H34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 18H34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 26H34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42 6V34C42 36.2091 40.2091 38 38 38H10C7.79086 38 6 36.2091 6 34V6C6 3.79086 7.79086 2 10 2H38C40.2091 2 42 3.79086 42 6Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                 <path d="M24 38V44L30 41L24 38Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Marketers & Agencies",
        description: "Impress clients with beautifully branded case studies, whitepapers, and reports.",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M6 30V13C6 11.3431 7.34315 10 9 10H39C40.6569 10 42 11.3431 42 13V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 38H36L32 30H16L12 38Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Small Businesses",
        description: "Grow your email list by turning your existing content into professional assets.",
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M24 4L4 14L24 24L44 14L24 4Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 24L24 34L44 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 34L24 44L44 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Course Creators",
        description: "Enhance your online courses with companion guides and downloadable resources.",
    },
];


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
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-border/20">
        <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
            <Logo className="h-6 w-6" />
            <span className="text-lg font-bold">Luminary Folio</span>
          </Link>
          <nav className="ml-auto hidden md:flex gap-2 sm:gap-4">
            <Link href="#hero" className="text-sm font-medium rounded-md px-3 py-2 transition-colors hover:bg-primary hover:text-primary-foreground" prefetch={false}>
              Home
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-muted-foreground rounded-md px-3 py-2 transition-colors hover:bg-primary hover:text-primary-foreground" prefetch={false}>
              Portfolio
            </Link>
            <Link href="#services" className="text-sm font-medium text-muted-foreground rounded-md px-3 py-2 transition-colors hover:bg-primary hover:text-primary-foreground" prefetch={false}>
              Services
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground rounded-md px-3 py-2 transition-colors hover:bg-primary hover:text-primary-foreground" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 pt-16">
        <section id="hero" className="relative w-full h-screen flex items-center py-12 md:py-24 lg:py-32">
            <AnimatedHeroBackground />
            <div className="container z-20 mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        className="flex flex-col gap-6 text-center md:text-left"
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
                        <div className="flex justify-center md:justify-start mt-4">
                            <Link href="#portfolio" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" prefetch={false}>
                                Explore Our Work
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative h-[50vh] md:h-[60vh] transform-style-3d"
                        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2787&auto=format&fit=crop"
                            alt="Book Design Showcase"
                            width={800}
                            height={600}
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl mix-blend-luminosity opacity-80"
                            data-ai-hint="books library"
                        />
                        <Image
                            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2940&auto=format&fit=crop"
                            alt="Book Cover Example"
                            width={600}
                            height={800}
                            className="absolute -bottom-10 -right-10 w-2/3 h-auto object-contain rounded-lg shadow-2xl [transform:rotate(10deg)_translateZ(40px)]"
                            data-ai-hint="reading book"
                        />
                         <Image
                            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2940&auto=format&fit=crop"
                            alt="Book Cover Example 2"
                            width={600}
                            height={800}
                            className="absolute -top-10 -left-10 w-1/2 h-auto object-contain rounded-lg shadow-2xl [transform:rotate(-15deg)_translateZ(20px)]"
                            data-ai-hint="stack books"
                        />
                    </motion.div>
                </div>
            </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-background to-secondary/10">
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

        <section id="portfolio" className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Masterpieces</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore a gallery of our finest work, where every cover is a canvas and every page tells a story of elegance and imagination.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12 [perspective:2000px]">
              {projects.map((project, i) => (
                <motion.div 
                  key={project.title} 
                  className="group relative transform-style-3d transition-transform duration-500 ease-in-out hover:[transform:translateZ(40px)_rotateX(10deg)]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
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
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-16 bg-secondary/20 border-y border-border/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Design Ecosystem</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From concept to completion, our services are interconnected to bring your story to life with elegance and precision.
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 mt-12">
              {services.map((service, i) => (
                 <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden group border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transform-style-3d hover:-translate-y-2 h-full">
                    <div className="absolute inset-[-200%] -z-10 bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--accent))_50%,hsl(var(--primary))_100%)] transition-transform duration-1000 group-hover:rotate-[-90deg]"></div>
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4 bg-card/95 backdrop-blur-sm h-full">
                      <div className="rounded-full border-2 border-primary/20 p-4 bg-background group-hover:border-primary transition-all group-hover:scale-110 group-hover:-translate-y-1">
                        <service.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-125" />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="who-we-help" className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who We Help</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tailored solutions for every storyteller, educator, and marketer.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-12 mt-12">
              {whoWeHelp.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group relative overflow-hidden transform-style-3d transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-border/50 hover:border-primary/50">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                       <div className="rounded-full border-2 border-primary/20 p-3 bg-background group-hover:border-primary transition-all group-hover:scale-110 group-hover:-translate-y-1">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
             <div className="flex justify-center mt-12">
              <Link href="#portfolio" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" prefetch={false}>
                  See Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section id="stats" className="w-full py-12 md:py-16 bg-secondary/20 border-y border-border/20 relative">
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
                  <Counter to={95} />+
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
                  <Counter to={150} />+
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

        <section id="faq" className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our book design services.
              </p>
            </div>
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-md bg-card/60 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <AccordionTrigger className="group flex w-full items-center justify-between p-4 text-lg text-left font-medium transition-colors duration-300 hover:no-underline hover:bg-primary/90 hover:text-primary-foreground rounded-md [&[data-state=open]]:bg-primary [&[data-state=open]]:text-primary-foreground">
                      <span>{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground p-4 pt-2 bg-background/50 rounded-b-md">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-16">
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
                <Logo className="h-8 w-8" />
                <span className="text-xl font-bold">Luminary Folio</span>
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
            <p className="text-sm text-muted-foreground">&copy; 2025 Luminary Folio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
