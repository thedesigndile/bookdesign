
import Link from "next/link";
import { Twitter, Linkedin, Instagram, Dribbble } from "lucide-react";
import AnimatedLogo from "@/components/ui/animated-logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// A placeholder for the Behance icon
const FaBehance = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 7.5h5M5 2.5v10M15.5 2.5v5h4M12.5 12.5h7M20.5 7.5c0 2.5-1.5 5-4 5s-4-2.5-4-5"/></svg>
);
// A placeholder for the Pinterest icon
const FaPinterest = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.017 1.5c-5.932 0-8.527 4.144-8.527 8.322 0 3.422 2.185 6.431 5.163 7.424.316.059.431-.137.431-.304 0-.15-.006-1.077-.009-1.874-1.995.433-2.417-1.12-2.417-1.12-.288-.731-.703-.926-.703-.926-.576-.393.044-.385.044-.385.637.045.973.654.973.654.567.971 1.487.69 1.85.527.058-.41.222-.69.404-.848-1.411-.16-2.894-.705-2.894-3.142 0-.694.248-1.261.654-1.706-.065-.161-.284-.808.062-1.682 0 0 .533-.171 1.745.651.507-.141 1.052-.212 1.594-.214.542.002 1.087.073 1.594.214 1.212-.822 1.745-.651 1.745-.651.346.874.127 1.521.062 1.682.407.445.653 1.012.653 1.706 0 2.446-1.484 2.981-2.898 3.137.228.196.43.583.43 1.176 0 .848-.008 1.531-.008 1.738 0 .168.114.364.432.303C18.358 16.255 20.54 13.24 20.54 9.822c0-4.178-2.595-8.322-8.523-8.322z"></path></svg>
);


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
              <Link href="https://x.com/thedesigndile" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1" prefetch={false}><Twitter className="h-5 w-5" /></Link>
              <Link href="https://pk.linkedin.com/in/tanzeeldesignz" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1" prefetch={false}><Linkedin className="h-5 w-5" /></Link>
              <Link href="https://www.instagram.com/tanzeel_designz/" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1" prefetch={false}><Instagram className="h-5 w-5" /></Link>
              <Link href="https://www.pinterest.com/tanzeel_designz/" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1" prefetch={false}><FaPinterest className="h-5 w-5" /></Link>
              <Link href="https://www.behance.net/tanzeel_designz" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1" prefetch={false}><FaBehance className="h-5 w-5" /></Link>
              <Link href="https://dribbble.com/thedesigndile/" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1" prefetch={false}><Dribbble className="h-5 w-5" /></Link>
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
