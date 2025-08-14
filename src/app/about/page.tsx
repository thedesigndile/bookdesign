
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import Image from "next/image";
import { BookCopy, LayoutTemplate, PenTool, Server, Type, Wand2, Image as ImageIcon, UtensilsCrossed, FileText, BarChart, Presentation, FileCode, CheckCircle, BrainCircuit, Bot } from "lucide-react";

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
  { icon: BrainCircuit, name: "Midjourney", description: "AI-powered image generation." },
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

        </div>
      </main>
    </div>
  );
}
