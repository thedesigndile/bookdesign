"use client";

import { useState, useEffect, type SVGProps } from "react";
import Link from "next/link";
import Image from "next/image";
import { Book, PenTool, Palette, Type, Bot } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  projectDetails: z.string().min(10, { message: "Please provide some details about your project." }),
});


export default function Home() {
  const { toast } = useToast();
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
      className="relative min-h-screen w-full overflow-x-hidden bg-background font-body text-foreground"
    >
      <div 
        className="pointer-events-none fixed inset-0 z-10 transition-all duration-300" 
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.1), transparent 80%)`,
        }}
      />
      
      <header className="px-4 lg:px-6 h-16 flex items-center fixed top-0 w-full z-50 backdrop-blur-sm border-b border-white/5">
        <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6" />
          <span className="font-headline text-lg font-bold">Luminary Folio</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Projects
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      
      <main className="flex-1">
      <section className="w-full h-screen min-h-[700px] flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-background" />
            <div
              className="absolute inset-0 bg-repeat"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='hsl(var(--primary))' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                animation: "pattern-scroll 20s linear infinite",
              }}
            />
             <style jsx>{`
                @keyframes pattern-scroll {
                  0% { background-position: 0 0; }
                  100% { background-position: 0 -100%; }
                }
              `}</style>
          </motion.div>
          <div className="container px-4 md:px-6 z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="flex flex-col items-center md:items-start text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="space-y-4">
                  <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                    Your Vision, Our Design Expertise
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Premium Cookbook & eBook Design for Global Authors
                  </p>
                   <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                     <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 active:scale-95">
                        <Link href="#projects">View Portfolio</Link>
                     </Button>
                      <Button asChild size="lg" variant="outline" className="transition-all duration-300 active:scale-95">
                        <Link href="#contact">Start Your Project</Link>
                     </Button>
                   </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Book design elements"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-2xl"
                  data-ai-hint="book design"
                />
              </motion.div>
            </div>
          </div>
        </section>

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
                <div key={project.title} className="group relative transform-style-3d transition-transform duration-500 ease-in-out hover:[transform:translateZ(40px)_rotateX(10deg)]">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-black/20 border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Our Design Ecosystem</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From concept to completion, our services are interconnected to bring your story to life with elegance and precision.
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 mt-12">
              {services.map((service) => (
                <Card key={service.title} className="relative overflow-hidden group border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transform-style-3d hover:-translate-y-2">
                  <div className="absolute inset-[-200%] -z-10 bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--accent))_50%,hsl(var(--primary))_100%)] transition-transform duration-1000 group-hover:rotate-[-90deg]"></div>
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4 bg-card/95 backdrop-blur-sm h-full">
                    <div className="rounded-full border-2 border-primary/20 p-4 bg-background group-hover:border-primary transition-all">
                      <service.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">Begin Your Narrative</h2>
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
                          <Bot className="w-4 h-4 text-accent group-hover:text-primary transition-colors" /> AI Autofill
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

    