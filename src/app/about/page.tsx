
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Users, Target, Lightbulb, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Alexandria Steele",
    role: "Founder & Creative Director",
    image: "https://placehold.co/400x400.png",
    bio: "With over a decade of experience in the publishing world, Alex founded Design Dile to bring a writer-centric, artistic approach to book design.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
    aiHint: "professional woman portrait"
  },
  {
    name: "Benjamin Carter",
    role: "Lead Illustrator",
    image: "https://placehold.co/400x400.png",
    bio: "Ben is a master of visual storytelling, creating breathtaking illustrations that capture the heart of every narrative.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
    aiHint: "male artist portrait"
  },
  {
    name: "Clara Rodriguez",
    role: "Head of Typography",
    image: "https://placehold.co/400x400.png",
    bio: "Clara believes that type is the voice of the written word. Her meticulous approach ensures every book is a pleasure to read.",
     social: {
      linkedin: "#",
      twitter: "#",
    },
    aiHint: "woman designer portrait"
  },
];

const trustedByLogos = [
    {
        name: "PublixPress",
        Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 140 40" className="h-10 w-auto" {...props}>
            <text x="0" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" letterSpacing="1" fill="hsl(var(--primary))">
            Publix<tspan fill="currentColor">Press</tspan>
            </text>
        </svg>
        )
    },
    {
        name: "Typeflow",
        Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 120 40" className="h-10 w-auto" {...props}>
            <path d="M10 10 Q15 0, 20 10 T30 10" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none"/>
            <text x="40" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" fill="currentColor">Typeflow</text>
        </svg>
        )
    },
     {
        name: "Inkerra",
        Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 120 40" className="h-10 w-auto" {...props}>
            <text x="0" y="30" fontFamily="serif" fontSize="32" fontWeight="600" fill="currentColor" fontStyle="italic">
            Inke<tspan fill="hsl(var(--primary))">rr</tspan>
            </text>
        </svg>
        )
    },
    {
        name: "Booknova",
        Logo: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 130 40" className="h-10 w-auto" {...props}>
            <path d="M20 5 L23 15 L33 15 L25 22 L28 32 L20 25 L12 32 L15 22 L7 15 L17 15 Z" fill="hsl(var(--primary))"/>
            <text x="40" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" fill="currentColor">Booknova</text>
        </svg>
        )
    },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <MouseSpotlight />
      <MainNav />
      <main className="container mx-auto px-4 md:px-6 py-24">
        
        <section id="about-hero" className="py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
              We Believe Every Author Deserves a Beautiful Book
            </h1>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl mt-6">
              Design Dile was born from a passion for storytelling and a commitment to quality. We are a collective of designers, artists, and typographers dedicated to transforming manuscripts into timeless works of art that captivate readers.
            </p>
          </motion.div>
        </section>
        
        <section id="mission" className="py-16 md:py-24 bg-secondary/10 rounded-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center px-8">
                <div>
                    <Image
                        src="https://images.unsplash.com/photo-1521737852577-684897f2021f?q=80&w=2940&auto=format&fit=crop"
                        alt="Our Team Collaborating"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-2xl object-cover"
                        data-ai-hint="team collaboration"
                    />
                </div>
                <div className="space-y-8">
                    <div>
                        <Target className="h-10 w-10 text-primary mb-3" />
                        <h2 className="text-3xl font-bold">Our Mission</h2>
                        <p className="text-muted-foreground mt-2">To empower authors by providing exceptional, strategic design that honors their stories and connects with readers on a deeper level.</p>
                    </div>
                     <div>
                        <Lightbulb className="h-10 w-10 text-primary mb-3" />
                        <h2 className="text-3xl font-bold">Our Vision</h2>
                        <p className="text-muted-foreground mt-2">To be the most trusted partner in book design, celebrated for our creativity, craftsmanship, and unwavering dedication to author success.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="team" className="py-16 md:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Creatives</h2>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
                    The passionate minds behind our award-winning designs.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                    <Card className="text-center h-full group overflow-hidden border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                        <CardHeader className="p-0">
                            <div className="relative aspect-square">
                                <Image
                                    src={member.image}
                                    alt={`Portrait of ${member.name}`}
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    data-ai-hint={member.aiHint}
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <CardTitle className="text-2xl">{member.name}</CardTitle>
                            <CardDescription className="text-primary font-semibold mt-1">{member.role}</CardDescription>
                            <p className="text-muted-foreground text-sm mt-3">{member.bio}</p>
                            <div className="flex justify-center space-x-4 mt-4">
                               <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
                               <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
                            </div>
                        </CardContent>
                    </Card>
                    </motion.div>
                ))}
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

        <section id="join-us" className="py-16 md:py-24">
           <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Story</h2>
                <p className="text-muted-foreground md:text-xl mt-4">
                    We're always looking for passionate creators and visionary authors to collaborate with. Let's create something beautiful together.
                </p>
                <div className="mt-8 flex justify-center">
                    <Button asChild size="lg">
                        <Link href="/#contact">Start a Project</Link>
                    </Button>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
