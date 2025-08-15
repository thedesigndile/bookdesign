
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Brush, Layers, Settings, GitBranch, Briefcase, Award, TrendingUp, Users, Facebook, Instagram, Linkedin, Twitter, Star, BookUser, Book, CookingPot, Laptop, Monitor, Pilcrow, PenTool, Image as ImageIcon, CaseSensitive, BookCheck, FileText, Printer, Building, User, Mic, Megaphone, Store, LayoutTemplate, Palette, BookCopy, FileUp, CheckCircle, Search, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// SVG icons for tools that are not in lucide-react
const AdobeIllustratorIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.26 17.65h-2.13l-1.09-3.3h-4.08l-1.09 3.3H4.74l4.2-11.3h2.12l4.2 11.3zM10.02 12.9h3.96L12 7.18 10.02 12.9z" /></svg>
);
const AdobePhotoshopIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.28 17.65h-2.31l-.92-2.78h-4.1l-1.02 2.78H4.72l4.2-11.3h2.12l4.22 11.3zm-4.7-4.22c.3-.9.6-1.8.88-2.68.08-.24.15-.49.21-.73h.02c.06.24.13.49.21.73.28.88.58 1.78.88 2.68h-2.2z" /></svg>
);
const AdobeInDesignIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.33 17.65h-2.31l-1.05-3.3H8.03v3.3H5.87V6.35h4.94c2.52 0 4.12 1.51 4.12 3.82 0 1.69-.92 2.9-2.28 3.42l1.68 4.06zM8.03 8.51v2.94h2.18c1.05 0 1.68-.6 1.68-1.47 0-.88-.63-1.47-1.68-1.47H8.03z" /></svg>
);
const CanvaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 14.2a3.3 3.3 0 110-6.6 3.3 3.3 0 010 6.6zm-9-3.3a3.3 3.3 0 11-6.6 0 3.3 3.3 0 016.6 0z" /></svg>
);
const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M7.65 10.35h4.2v1.05h-4.2v2.1h4.5v1.05h-4.5v2.4h-1.5V7.5h5.7c1.65 0 2.7 1.05 2.7 2.4s-1.05 2.4-2.7 2.4H7.65v-1.95zm.75-1.8V10.2h.9c.75 0 1.2-.45 1.2-1.2s-.45-1.2-1.2-1.2h-.9zm8.1 7.5h-3V12c0-1.05.75-1.8 1.8-1.8s1.8.75 1.8 1.8v3.9zm1.5-3.9c0-1.95-1.5-3.3-3.3-3.3s-3.3 1.35-3.3 3.3v3.9h6.6v-3.9z" /></svg>
);
const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12.115 2.25c-5.32 0-9.56 4.24-9.56 9.47 0 3.79 2.21 7.03 5.37 8.53-.08-1.03.01-2.29.3-3.26.28-.94.94-3.99.94-3.99s-.25-.49-.25-1.22c0-1.14.67-2 1.51-2 .71 0 1.05.53 1.05 1.18 0 .71-.45 1.77-.69 2.74-.2 1.01.5 1.83 1.52 1.83 1.82 0 3.23-1.9 3.23-4.66 0-2.45-1.74-4.28-4.42-4.28-2.96 0-4.7 2.19-4.7 4.31 0 .86.32 1.78.73 2.28.08.1.09.18.06.28-.08.31-.27 1.12-.31 1.25-.05.15-.2.2-.42.08-1.55-.83-2.52-2.97-2.52-4.83 0-3.95 2.88-7.22 7.84-7.22 4.12 0 7.33 2.91 7.33 6.9 0 4.1-2.61 7.42-6.22 7.42-1.21 0-2.35-.62-2.74-1.34 0 0-.57 2.29-.7 2.7-.27.86-.98 1.95-1.46 2.58.94.27 1.94.42 2.99.42 5.25 0 9.7-4.32 9.7-9.6 0-5.46-4.51-9.84-10.03-9.84z" /></svg>
);
const DribbbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM3.633 14.25c.334.334 1.83 2.23 4.212 3.693-2.733-2.2-4.14-4.88-4.212-5.013a9.58 9.58 0 010-2.613c.245.245 2.88 2.655 6.018 3.033-2.52.885-4.875-.12-6.018-1.74zm1.092-6.495c1.143 1.62 3.498 2.625 6.018 1.74-3.138-.378-5.773-2.788-6.018-3.033a9.58 9.58 0 000 2.613c.072.133 1.48 2.813 4.212 5.013-2.382-1.463-3.878-3.36-4.212-3.693zM12 21.6c-1.39 0-2.7-.26-3.93-.735 2.115-1.26 3.96-3.48 4.605-5.385.945.165 1.935.15 2.895-.06-1.02 2.7-3.045 4.815-5.565 5.895zm6.81-2.97c-.72-1.89-2.37-3.795-4.47-4.905.795-.09 1.575-.285 2.325-.57C19.68 13.92 21 12.435 21 10.8c0-.795-.39-1.515-.9-2.07.24.81.165 1.695-.21 2.475-.9 1.86-2.58 3.045-4.5 3.51.135-.555.21-1.125.21-1.71 0-3.36-2.31-6.18-5.37-6.84 2.85-1.05 6.045.75 6.045 4.5 0 .54-.075 1.065-.21 1.575 1.29.39 2.415.99 3.315 1.755.78.66 1.155 1.56 1.155 2.46 0 1.215-.705 2.475-1.95 3.3zm-3.12-10.845c-2.325 0-4.215 1.89-4.215 4.215S9.375 16.2 11.7 16.2s4.215-1.89 4.215-4.215-1.89-4.215-4.215-4.215z" /></svg>
);

const AmazonKdpIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.25c.58 0 1.05.47 1.05 1.05v15.75c0 .58-.47 1.05-1.05 1.05s-1.05-.47-1.05-1.05V3.3c0-.58.47-1.05 1.05-1.05zm5.02 2.1l-5.25 5.25h1.5l3.75-3.75v10.5h1.5V5.25c0-.58-.47-1.05-1.05-1.05s-1.05.47-1.05 1.05v-.75zM6.98 4.35c-.58 0-1.05.47-1.05 1.05v13.5h1.5V5.4c0-.58-.47-1.05-1.05-1.05h.6zm-2.63 3.9l2.25 2.25v6.6H5.1V8.25z" />
    </svg>
);

const LuluIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM8.25 6h1.5v9h-1.5V6zm6 0h1.5v9h-1.5V6zM6 9h1.5v3H6V9zm10.5 0h1.5v3h-1.5V9z"/>
    </svg>
);

const IngramSparkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.05 4.5h2.1v15h-2.1V4.5zm-3.6 2.25h1.5v10.5h-1.5V6.75zm7.2 0h1.5v10.5h-1.5V6.75z" />
    </svg>
);


const services = [
  { icon: LayoutTemplate, title: "Custom Interior Layouts", description: "Tailored print and eBook layouts designed for readability and aesthetic appeal across all genres." },
  { icon: Palette, title: "Cover Design & Branding", description: "Genre-matched covers with cohesive series identity to captivate readers and build your author brand." },
  { icon: Laptop, title: "eBook Conversion", description: "Optimized and validated formatting for Kindle (MOBI), EPUB, and Kobo to ensure a perfect digital reading experience." },
  { icon: Printer, title: "Print-Ready Formatting", description: "Meticulously prepared, press-ready PDF files that meet global publishing standards for flawless printing." },
  { icon: Pilcrow, title: "Editorial & Typography", description: "Expert font pairing, hierarchy, and layout strategy to enhance readability and professional polish." },
  { icon: Users, title: "Author Platform Support", description: "Seamless integration of design assets with your author website, social media, and marketing profiles." },
  { icon: BookCopy, title: "Series & Collection Design", description: "Unified and consistent layouts and covers for multi-book projects, creating a strong brand identity." },
  { icon: FileUp, title: "Publishing Prep & File Audit", description: "Comprehensive pre-flight checks and file audits to ensure upload and print success on any platform." },
];

const platforms = [
  { name: "Amazon KDP", Icon: AmazonKdpIcon },
  { name: "Lulu", Icon: LuluIcon },
  { name: "IngramSpark", Icon: IngramSparkIcon },
];

const tools = [
  { icon: AdobeInDesignIcon, name: "Adobe InDesign", description: "Professional book layout design." },
  { icon: AdobePhotoshopIcon, name: "Adobe Photoshop", description: "Advanced image editing." },
  { icon: AdobeIllustratorIcon, name: "Adobe Illustrator", description: "Vector graphics and illustrations." },
  { icon: CanvaIcon, name: "Canva", description: "Quick creative design layouts." },
  { icon: FileText, name: "Microsoft Word", description: "Manuscript preparation & editing." },
  { icon: Layers, name: "Microsoft Excel", description: "Data organization & recipe indexing." },
  { icon: BookCheck, name: "Microsoft PowerPoint", description: "Visual presentations & pitch decks." },
  { icon: BookUser, name: "Google Docs", description: "Real-time content collaboration." },
];

const journey = [
  { year: "2019", title: "The Leap", description: "Started offering freelance book design services on platforms like Upwork & Fiverr.", icon: User },
  { year: "2020", title: "Global Reach", description: "Expanded services to cookbook redesign and eBook formatting for global clients.", icon: Mic },
  { year: "2021", title: "Milestone Achievement", description: "Reached 100+ successfully completed book projects with 5-star reviews.", icon: Award },
  { year: "2022", title: "Strategic Partnerships", description: "Partnered with self-published authors and small publishers worldwide.", icon: Users },
  { year: "2023", title: "The Agency Is Born", description: "Launched Designdile as a full-service design agency.", icon: Briefcase },
  { year: "2024", title: "Innovation", description: "Introduced advanced layout solutions & creative cover mockups.", icon: TrendingUp },
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
  { name: "Behance", tagline: "View our curated design showcases.", icon: BehanceIcon, href: "#" },
  { name: "Pinterest", tagline: "Discover our book cover inspirations and moodboards.", icon: PinterestIcon, href: "#" },
  { name: "Upwork", tagline: "Hire us for professional book design services.", icon: Briefcase, href: "#" },
  { name: "Fiverr", tagline: "Get custom book design solutions at flexible packages.", icon: Store, href: "#" },
  { name: "Dribbble", tagline: "See our creative shots and design experiments.", icon: DribbbleIcon, href: "#" },
];


export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
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
                    Founder of Design Dile, Book Designer & Creative Systems Architect
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

        {/* Book Design Services Section */}
        <section id="services" className="w-full py-12 md:py-24 bg-secondary/20 border-y border-border/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase text-primary font-roboto">Book Design Services</h2>
            </div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {services.map((service) => (
                <motion.div key={service.title} variants={itemVariants}>
                  <Card className="group h-full flex flex-col items-center text-center p-6 bg-card/80 border border-border/50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary">
                    <div className="rounded-full border-2 border-primary/20 p-4 bg-background group-hover:border-primary transition-all group-hover:scale-110 group-hover:-translate-y-1">
                      <service.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-125" />
                    </div>
                    <h3 className="text-lg font-semibold mt-4 font-playfair">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-grow">{service.description}</p>
                    <Button variant="link" className="mt-4 text-primary">Learn More</Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">Supported Publishing Platforms</h3>
              <div className="flex justify-center items-center gap-8 md:gap-12">
                {platforms.map((platform) => (
                   <div key={platform.name} className="flex flex-col items-center gap-2 group">
                     <platform.Icon className="h-12 w-12 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                     <p className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">{platform.name}</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase text-primary font-roboto">Tools & Software We Use</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {tools.map((tool) => (
                <Card key={tool.name} className="group relative flex flex-col items-center justify-center p-6 bg-card/80 border border-border/50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary">
                  <tool.icon className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-lg font-semibold text-center font-playfair">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mt-1">{tool.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Freelancing Journey Section */}
        <section id="journey" className="w-full py-12 md:py-24 bg-secondary/20 border-y border-border/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase text-primary font-roboto">Freelancing Journey & Experience</h2>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-0.5 bg-border/50" aria-hidden="true"></div>
              <div className="relative flex flex-col gap-12">
                {journey.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative flex items-center"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="p-6 bg-card/80 rounded-lg shadow-lg border border-border/50">
                        <p className="text-primary font-semibold text-lg">{item.year}</p>
                        <h3 className="text-xl font-bold mt-1 font-playfair">{item.title}</h3>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                      {/* This space is intentional for layout */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Highlights Section */}
        <section id="portfolio-highlights" className="w-full py-12 md:py-24">
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

    

    
