
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import Image from "next/image";
import { BookCopy, LayoutTemplate, PenTool, Server, Type, Wand2, Image as ImageIcon, UtensilsCrossed, FileText, BarChart, Presentation, FileCode, CheckCircle, BrainCircuit, Bot, Rocket, Award, Users, Store, Facebook, Instagram, Linkedin, Link as LinkIcon } from "lucide-react";
import React from 'react';
import Link from "next/link";


const skills = [
    { icon: UtensilsCrossed, title: "Cookbook & Recipe Book Design" },
    { icon: LayoutTemplate, title: "eBook & Print Layout" },
    { icon: PenTool, title: "Adobe Creative Suite" },
    { icon: Server, title: "Publishing Platforms" },
    { icon: Type, title: "Typography & Visual Hierarchy" },
    { icon: Wand2, title: "Creative Cover Design" },
    { icon: ImageIcon, title: "Photo Editing & Optimization" },
    { icon: BookCopy, title: "Full Jacket Design" },
];

const tools = [
  { icon: PenTool, name: "Adobe InDesign", description: "Professional book layout design." },
  { icon: ImageIcon, name: "Adobe Photoshop", description: "Advanced image editing." },
  { icon: Wand2, name: "Adobe Illustrator", description: "Vector graphics and illustrations." },
  { icon: Bot, name: "Canva", description: "Quick creative design layouts." },
  { icon: FileText, name: "Microsoft Word", description: "Manuscript preparation & editing." },
  { icon: BarChart, name: "Microsoft Excel", description: "Data organization & recipe indexing." },
  { icon: Presentation, name: "Microsoft PowerPoint", description: "Visual presentations & pitch decks." },
  { icon: FileCode, name: "Google Docs", description: "Real-time content collaboration." },
  { icon: Server, name: "Lulu", description: "Print-on-demand publishing." },
  { icon: Server, name: "IngramSpark", description: "Global print distribution." },
  { icon: Server, name: "Amazon KDP", description: "Kindle & paperback publishing." },
];

const journey = [
    { year: "2019", event: "Started offering freelance book design services on platforms like Upwork & Fiverr.", icon: Rocket },
    { year: "2020", event: "Expanded services to cookbook redesign and eBook formatting for global clients.", icon: BookCopy },
    { year: "2021", event: "Reached 100+ successfully completed book projects with 5-star reviews.", icon: Award },
    { year: "2022", event: "Partnered with self-published authors and small publishers worldwide.", icon: Users },
    { year: "2023", event: "Launched Designdile as a full-service design agency.", icon: Store },
    { year: "2024", event: "Introduced advanced layout solutions & creative cover mockups.", icon: Wand2 }
];

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M7.935 9.112H4.53V14.9h3.405c1.93 0 2.94-1.12 2.94-2.895 0-1.78-1.01-2.895-2.94-2.895zm.325-1.635c2.72 0 4.5 1.57 4.5 4.53s-1.78 4.53-4.5 4.53H3V7.477h5.26c2.72 0 4.5 1.57 4.5 4.53s-1.78 4.53-4.5 4.53H3V7.477h5.26zM16.13 7.477h4.86v1.44h-4.86V7.477zM18.5 9.942c2.58 0 4.5 1.63 4.5 4.29 0 2.66-1.92 4.29-4.5 4.29s-4.5-1.63-4.5-4.29c0-2.66 1.92-4.29 4.5-4.29zm0 1.44c-1.74 0-2.94 1.27-2.94 2.85s1.2 2.85 2.94 2.85 2.94-1.27 2.94-2.85-1.2-2.85-2.94-2.85z"></path></svg>
);
const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12.115 2.25c-5.32 0-9.56 4.24-9.56 9.47 0 3.79 2.21 7.03 5.37 8.53-.08-1.03.01-2.29.3-3.26.28-.94.94-3.99.94-3.99s-.25-.49-.25-1.22c0-1.14.67-2 1.51-2 .71 0 1.05.53 1.05 1.18 0 .71-.45 1.77-.69 2.74-.2 1.01.5 1.83 1.52 1.83 1.82 0 3.23-1.9 3.23-4.66 0-2.45-1.74-4.28-4.42-4.28-2.96 0-4.7 2.19-4.7 4.31 0 .86.32 1.78.73 2.28.08.1.09.18.06.28-.08.31-.27 1.12-.31 1.25-.05.15-.2.2-.42.08-1.55-.83-2.52-2.97-2.52-4.83 0-3.95 2.88-7.22 7.84-7.22 4.12 0 7.33 2.91 7.33 6.9 0 4.1-2.61 7.42-6.22 7.42-1.21 0-2.35-.62-2.74-1.34 0 0-.57 2.29-.7 2.7-.27.86-.98 1.95-1.46 2.58.94.27 1.94.42 2.99.42 5.25 0 9.7-4.32 9.7-9.6 0-5.46-4.51-9.84-10.03-9.84z"></path></svg
);
const DribbbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM3.633 14.25c.334.334 1.83 2.23 4.212 3.693-2.733-2.2-4.14-4.88-4.212-5.013a9.58 9.58 0 010-2.613c.245.245 2.88 2.655 6.018 3.033-2.52.885-4.875-.12-6.018-1.74zm1.092-6.495c1.143 1.62 3.498 2.625 6.018 1.74-3.138-.378-5.773-2.788-6.018-3.033a9.58 9.58 0 000 2.613c.072.133 1.48 2.813 4.212 5.013-2.382-1.463-3.878-3.36-4.212-3.693zM12 21.6c-1.39 0-2.7-.26-3.93-.735 2.115-1.26 3.96-3.48 4.605-5.385.945.165 1.935.15 2.895-.06-1.02 2.7-3.045 4.815-5.565 5.895zm6.81-2.97c-.72-1.89-2.37-3.795-4.47-4.905.795-.09 1.575-.285 2.325-.57C19.68 13.92 21 12.435 21 10.8c0-.795-.39-1.515-.9-2.07.24.81.165 1.695-.21 2.475-.9 1.86-2.58 3.045-4.5 3.51.135-.555.21-1.125.21-1.71 0-3.36-2.31-6.18-5.37-6.84 2.85-1.05 6.045.75 6.045 4.5 0 .54-.075 1.065-.21 1.575 1.29.39 2.415.99 3.315 1.755.78.66 1.155 1.56 1.155 2.46 0 1.215-.705 2.475-1.95 3.3zm-3.12-10.845c-2.325 0-4.215 1.89-4.215 4.215S9.375 16.2 11.7 16.2s4.215-1.89 4.215-4.215-1.89-4.215-4.215-4.215z"></path></svg
);
const UpworkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M17.43,8.44a4.48,4.48,0,0,0-3.8-2.13,4.49,4.49,0,0,0-4.48,4.5,4.27,4.27,0,0,0,1.35,3.12l-1.47,4.02h2.2l1-2.86a4.34,4.34,0,0,0,1.25.19,4.49,4.49,0,0,0,3.95-4.81Zm-1.8,2.71a2.3,2.3,0,0,1-2.57,2.2,2.33,2.33,0,0,1-1.28-.4l.32-1a2.15,2.15,0,0,1,3.48-.48A2.2,2.2,0,0,1,15.63,11.15Z"></path></svg
);
const FiverrIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M18.8 7.3h-4.3v-1a2.6 2.6 0 0 1 2.6-2.6H19V0h-2.1c-3.6 0-6.5 2.9-6.5 6.5V11H6v4h4.4v9h4.2v-9h3.7z"></path></svg
);


const socialPlatforms = [
  { name: "Facebook", tagline: "Stay updated with our latest book design projects.", icon: Facebook, href: "#", color: "#1877F2" },
  { name: "Instagram", tagline: "See behind-the-scenes of our creative process.", icon: Instagram, href: "#", color: "#E4405F" },
  { name: "LinkedIn", tagline: "Explore our professional portfolio and collaborations.", icon: Linkedin, href: "#", color: "#0A66C2" },
  { name: "Behance", tagline: "View our curated design showcases.", icon: BehanceIcon, href: "#", color: "#053eff" },
  { name: "Pinterest", tagline: "Discover our book cover inspirations and moodboards.", icon: PinterestIcon, href: "#", color: "#E60023" },
  { name: "Upwork", tagline: "Hire us for professional book design services.", icon: UpworkIcon, href: "#", color: "#6FDA44" },
  { name: "Fiverr", tagline: "Get custom book design solutions at flexible packages.", icon: FiverrIcon, href: "#", color: "#1DBF73" },
  { name: "Dribbble", tagline: "See our creative shots and design experiments.", icon: DribbbleIcon, href: "#", color: "#EA4C89" },
];


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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -rotate-12 transition-transform duration-500 hover:rotate-0"></div>
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
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-playfair">
                  Designdile
                </h1>
                <p className="mt-2 text-xl font-medium" style={{ color: "#684DF4" }}>
                  Your Vision, Our Design Expertise
                </p>
                <p className="mt-6 text-lg text-muted-foreground font-roboto max-w-xl mx-auto md:mx-0">
                  We are a seasoned creative team with over four years of experience in designing modern, reader-friendly cookbooks, eBooks, and print books. Skilled in Adobe InDesign, Photoshop, Illustrator, and industry-standard publishing platforms like Lulu, IngramSpark, and Amazon KDP, we bring your book to life with precision and style.
                </p>
              </div>
            </div>
          </section>

          <section id="skills" className="py-12 md:py-20">
            <div className="text-center mb-12">
                <h2 className="font-roboto-medium text-3xl font-bold uppercase tracking-wider" style={{ color: '#684DF4' }}>
                    Skills & Expertise
                </h2>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-6 sm:grid-cols-2 md:grid-cols-4">
                {skills.map((skill) => (
                    <div key={skill.title} className="group flex flex-col items-center text-center p-6 bg-card/60 rounded-lg border border-border/20 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                        <div className="mb-4 rounded-full border-2 border-primary/20 p-4 bg-background group-hover:border-primary transition-colors">
                           <skill.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" style={{ color: '#684DF4' }}/>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                    </div>
                ))}
            </div>
          </section>

          <section id="tools" className="py-12 md:py-20">
            <div className="text-center mb-12">
              <h2 className="font-roboto-medium text-3xl font-bold uppercase tracking-wider" style={{ color: '#684DF4' }}>
                Tools & Software We Use
              </h2>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {tools.map((tool) => (
                <div key={tool.name} className="group flex flex-col items-center text-center p-6 bg-card rounded-lg border border-transparent hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300" style={{'--tw-shadow-color': '#684DF4' } as React.CSSProperties}>
                  <div className="mb-4">
                    <tool.icon className="h-10 w-10" style={{ color: '#684DF4' }}/>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="journey" className="py-12 md:py-20">
            <div className="text-center mb-16">
              <h2 className="font-roboto-medium text-3xl font-bold uppercase tracking-wider" style={{ color: '#684DF4' }}>
                Freelancing Journey & Experience
              </h2>
            </div>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5" style={{ background: 'linear-gradient(to bottom, transparent, #684DF4, transparent)' }}></div>
              {journey.map((item, index) => (
                <div key={item.year} className="relative mb-12">
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right pr-8' : 'order-3 text-left pl-8'}`}>
                      <p className="text-lg font-bold" style={{ color: '#684DF4' }}>{item.year}</p>
                      <p className="text-muted-foreground mt-1">{item.event}</p>
                    </div>
                    <div className="order-2 flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-card border-2 border-primary/50 shadow-lg" style={{ borderColor: '#684DF4' }}>
                           <item.icon className="h-6 w-6" style={{ color: '#684DF4' }} />
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="connect" className="py-12 md:py-20 bg-white dark:bg-card/30 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" style={{'--tw-gradient-stops': 'var(--tw-gradient-from), #684DF4, var(--tw-gradient-to)'} as React.CSSProperties}></div>
            <div className="text-center mb-12">
              <h2 className="font-roboto-medium text-3xl font-bold uppercase tracking-wider" style={{ color: '#684DF4' }}>
                Connect With Us
              </h2>
            </div>
            <div className="mx-auto grid max-w-7xl gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {socialPlatforms.map((platform) => (
                <Link key={platform.name} href={platform.href} target="_blank" rel="noopener noreferrer" className="group text-center">
                    <div className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 group-hover:bg-gray-800 group-hover:text-white">
                        <div className="mb-4 rounded-full p-4 transition-all duration-300 group-hover:bg-white" style={{ backgroundColor: platform.color }}>
                            <platform.icon className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110" style={{ color: 'white' }} />
                        </div>
                        <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white group-hover:text-white">{platform.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-muted-foreground group-hover:text-gray-300">{platform.tagline}</p>
                    </div>
                </Link>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" style={{'--tw-gradient-stops': 'var(--tw-gradient-from), #684DF4, var(--tw-gradient-to)'} as React.CSSProperties}></div>
          </section>

        </div>
      </main>
    </div>
  );
}

