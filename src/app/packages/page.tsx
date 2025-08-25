
"use client";

import { MainNav } from "@/components/main-nav";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, BookOpen, Palette, Crown, Zap, Award, Clock, Users, Shield, Download, Globe, FileText, Printer, Sparkles, MessageCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import AnimatedLogo from "@/components/ui/animated-logo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Essential Book Design",
    subtitle: "Perfect for first-time authors",
    description: "Transform your manuscript into a professional, publication-ready book with our essential design package.",
    price: 299,
    originalPrice: 399,
    features: [
      "Professional eBook & Paperback Formatting",
      "Custom Chapter Styles & Typography",
      "Clickable Table of Contents",
      "Up to 80,000 Words Included",
      "2 Rounds of Revisions",
      "Print-Ready PDF Files",
      "Basic Cover Design Template",
      "7-Day Delivery",
    ],
    icon: BookOpen,
    isRecommended: false,
    color: "from-blue-500 to-blue-600",
    badge: "Most Popular for Beginners"
  },
  {
    title: "Professional Book Design",
    subtitle: "Complete publishing solution",
    description: "Our flagship package delivers stunning covers, professional interiors, and everything needed for a bestseller.",
    price: 799,
    originalPrice: 999,
    features: [
      "Everything in Essential, plus:",
      "Custom eBook & Print Cover Design",
      "Advanced Interior Layout & Typography",
      "Unlimited Word Count",
      "Up to 8 Stock Images Included",
      "3D Book Mockups (3 variations)",
      "5 Rounds of Revisions",
      "Marketing Material Kit",
      "Priority Support",
      "14-Day Delivery",
    ],
    icon: Crown,
    isRecommended: true,
    color: "from-purple-500 to-purple-600",
    badge: "Bestseller Choice"
  },
  {
    title: "Premium Book Design",
    subtitle: "Bespoke masterpiece creation",
    description: "Create a truly unique book with custom illustrations, premium finishes, and white-glove service.",
    price: 1499,
    originalPrice: 1999,
    features: [
      "Everything in Professional, plus:",
      "Custom Illustrations (up to 8)",
      "Hardcover Jacket Design",
      "Premium Paper & Binding Options",
      "Custom Font Selection",
      "Unlimited Revisions",
      "Dedicated Design Manager",
      "Marketing & Launch Kit",
      "Print Production Support",
      "21-Day Delivery",
    ],
    icon: Sparkles,
    isRecommended: false,
    color: "from-amber-500 to-amber-600",
    badge: "Luxury Experience"
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Authors Served" },
  { icon: BookOpen, value: "800+", label: "Books Published" },
  { icon: Award, value: "15+", label: "Industry Awards" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const includedServices = [
  { icon: FileText, title: "Manuscript Formatting", description: "Professional preparation and structure" },
  { icon: Palette, title: "Cover Design", description: "Eye-catching, genre-appropriate covers" },
  { icon: Printer, title: "Print Preparation", description: "Industry-standard print files" },
  { icon: Download, title: "eBook Conversion", description: "Multi-format digital publishing" },
  { icon: Globe, title: "Global Distribution", description: "Worldwide publishing support" },
  { icon: Shield, title: "Quality Assurance", description: "Rigorous quality checks" },
];

export default function PackagesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <MouseSpotlight />
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Professional Book Design
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Choose Your Design Journey
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From essential formatting to premium masterpieces, we have the perfect package to transform your manuscript into a stunning, publication-ready book.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Design Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each package is carefully crafted to meet different author needs and budgets, ensuring professional results every time.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                variants={itemVariants}
                className="relative"
              >
                <Card className={cn(
                  "h-full relative overflow-hidden border-0 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-2",
                  pkg.isRecommended ? "ring-2 ring-primary ring-offset-4" : ""
                )}>
                  {/* Background Gradient */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-5",
                    pkg.color
                  )} />
                  
                  {/* Header */}
                  <CardHeader className="p-8 text-center relative">
                    {pkg.badge && (
                      <Badge className="absolute top-4 right-4 bg-primary/10 text-primary border-primary/20">
                        {pkg.badge}
                      </Badge>
                    )}
                    
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                      <pkg.icon className="h-10 w-10" />
                    </div>
                    
                    <CardTitle className="text-2xl md:text-3xl font-bold mb-2">{pkg.title}</CardTitle>
                    <p className="text-primary font-semibold mb-2">{pkg.subtitle}</p>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Pricing */}
                  <CardContent className="p-8 pt-0">
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-5xl md:text-6xl font-bold text-foreground">${pkg.price}</span>
                        {pkg.originalPrice > pkg.price && (
                          <span className="text-2xl text-muted-foreground line-through">${pkg.originalPrice}</span>
                        )}
                      </div>
                      <p className="text-muted-foreground">one-time payment</p>
                      {pkg.originalPrice > pkg.price && (
                        <Badge variant="secondary" className="mt-2">
                          Save ${pkg.originalPrice - pkg.price}
                        </Badge>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      className={cn(
                        "w-full h-14 text-lg font-semibold transition-all duration-300",
                        pkg.isRecommended 
                          ? "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30" 
                          : "bg-secondary hover:bg-secondary/90"
                      )}
                    >
                      {pkg.isRecommended ? (
                        <>
                          <Crown className="mr-2 h-5 w-5" />
                          Choose Professional
                        </>
                      ) : (
                        <>
                          <Zap className="mr-2 h-5 w-5" />
                          Get Started
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Included Services Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What's Included in Every Package</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All our packages include these essential services to ensure your book meets professional publishing standards.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {includedServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full p-6 text-center border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Book?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful authors who have trusted us with their book design. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                <BookOpen className="mr-2 h-5 w-5" />
                View All Packages
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg">
                <Users className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
