
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Layers, LayoutTemplate, BookCopy, FileUp, Printer, CaseSensitive, Building, CheckCircle, Palette, Type, Image as ImageIcon, Globe, FileText, PenTool, Sparkles, BookOpen, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import AnimatedLogo from "@/components/ui/animated-logo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const services = [
  { icon: LayoutTemplate, title: "Custom Interior Layouts", description: "Tailored print and eBook layouts for all genres, ensuring a beautiful reading experience." },
  { icon: BookCopy, title: "Cover Design & Branding", description: "Genre-matched covers with cohesive series identity that captivate your target audience." },
  { icon: FileUp, title: "eBook Conversion", description: "Optimized formatting for Kindle, EPUB, and Kobo to ensure flawless digital delivery." },
  { icon: Printer, title: "Print-Ready Formatting", description: "Final PDFs meeting global publishing standards for a professional and polished final product." },
  { icon: CaseSensitive, title: "Typography Consulting", description: "Expert font pairing, hierarchy, and layout strategy to enhance readability and style." },
  { icon: Building, title: "Author Platform Support", description: "Integration of design assets with author websites and social media profiles for a consistent brand." },
  { icon: Layers, title: "Series & Collection Design", description: "Unified layouts and covers for multi-book projects that create a strong, recognizable brand." },
  { icon: CheckCircle, title: "Publishing Prep & File Audit", description: "Pre-flight checks to ensure your files are perfect for upload and print, avoiding costly errors." },
  { icon: Palette, title: "Illustration & Artwork", description: "Custom illustrations and artwork that bring your story's world to life with unique visual elements." },
  { icon: Type, title: "Advanced Typography", description: "Specialized font selection and text layout optimization for enhanced readability and aesthetic appeal." },
  { icon: ImageIcon, title: "Image Editing & Enhancement", description: "Professional photo editing, retouching, and enhancement for book covers and interior images." },
  { icon: Globe, title: "Multilingual Layout Support", description: "Specialized layouts for books in multiple languages with proper text direction and cultural considerations." },
  { icon: FileText, title: "Manuscript Formatting", description: "Professional manuscript preparation with consistent formatting, spacing, and structural elements." },
  { icon: PenTool, title: "Creative Design Consultation", description: "Strategic design advice and creative direction to ensure your book stands out in the market." },
  { icon: Sparkles, title: "Special Effects & Finishes", description: "Premium finishes including embossing, foil stamping, and special effects for luxury editions." },
  { icon: BookOpen, title: "Children's Book Design", description: "Age-appropriate layouts, illustrations, and typography specifically designed for young readers." },
];

const platforms = [
  { image: "https://placehold.co/128x64.png", aiHint: "amazon kdp logo", name: "Amazon KDP" },
  { image: "https://placehold.co/128x64.png", aiHint: "lulu logo", name: "Lulu" },
  { image: "https://placehold.co/128x64.png", aiHint: "ingramspark logo", name: "IngramSpark" },
];

export default function ServicesPage() {
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
        <section id="services" className="w-full py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase text-primary font-roboto">Book Design Services</h1>
                    <p className="max-w-[700px] text-muted-foreground">Comprehensive design solutions to bring your book to life, from cover to cover.</p>
                </div>
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service) => (
                        <motion.div key={service.title} variants={itemVariants}>
                            <Card className="h-full group relative flex flex-col items-center justify-center p-6 bg-card/80 border border-border/50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary">
                                <service.icon className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                                <h3 className="text-lg font-semibold text-center font-playfair">{service.title}</h3>
                                <p className="text-sm text-muted-foreground text-center mt-1 flex-grow">{service.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

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
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
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

    