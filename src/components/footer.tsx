import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import AnimatedLogo from "@/components/ui/animated-logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
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
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Home</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>About Us</Link>
              <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Portfolio</Link>
              <Link href="/packages" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Packages</Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>About Us</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Blog</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Careers</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Contact</Link>
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
  );
}
