
import Link from "next/link";
import { Twitter, Linkedin, Instagram, Dribbble } from "lucide-react";
import AnimatedLogo from "@/components/ui/animated-logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FaBehance = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M7.938 10.354h3.948v1.23h-3.948zM15.4 7.6h-4.312v1.36h4.312c1.25 0 1.812.512 1.812 1.488 0 1.012-.6 1.5-1.812 1.5h-4.312v4.8h4.4c2.475 0 3.75-1.338 3.75-3.412s-1.2-3.738-3.838-3.738zm-1.637 2.825h2.512c.563 0 .875.25.875.763s-.312.775-.875.775h-2.512zM21.8 3H2.2A2.2 2.2 0 0 0 0 5.2v13.6A2.2 2.2 0 0 0 2.2 21h19.6a2.2 2.2 0 0 0 2.2-2.2V5.2A2.2 2.2 0 0 0 21.8 3zm-14.3 14.4H3.6V7.6h3.9c2.588 0 4.225 1.3 4.225 3.55 0 2.475-1.725 3.65-4.313 3.65z" />
    </svg>
);
const FaPinterest = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.017 1.5c-5.932 0-8.527 4.144-8.527 8.322 0 3.422 2.185 6.431 5.163 7.424.316.059.431-.137.431-.304 0-.15-.006-1.077-.009-1.874-1.995.433-2.417-1.12-2.417-1.12-.288-.731-.703-.926-.703-.926-.576-.393.044-.385.044-.385.637.045.973.654.973.654.567.971 1.487.69 1.85.527.058-.41.222-.69.404-.848-1.411-.16-2.894-.705-2.894-3.142 0-.694.248-1.261.654-1.706-.065-.161-.284-.808.062-1.682 0 0 .533-.171 1.745.651.507-.141 1.052-.212 1.594-.214.542.002 1.087.073 1.594.214 1.212-.822 1.745-.651 1.745-.651.346.874.127 1.521.062 1.682.407.445.653 1.012.653 1.706 0 2.446-1.484 2.981-2.898 3.137.228.196.43.583.43 1.176 0 .848-.008 1.531-.008 1.738 0 .168.114.364.432.303C18.358 16.255 20.54 13.24 20.54 9.822c0-4.178-2.595-8.322-8.523-8.322z" />
    </svg>
);
const FaThreads = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M14.708 15.062c-1.385.452-2.99.688-4.708.688s-3.323-.236-4.708-.688c-.347-1.896-.13-3.921.616-5.833.518-1.328 1.268-2.5 2.149-3.468S9.5 4.547 10.459 4.14c.959-.406 2.122-.619 3.39-.619a8.43 8.43 0 0 1 2.872.51c.343.162.68.352 1.01.571l-1.854 2.472a3.78 3.78 0 0 0-1.026-.523c-1.127-.42-2.482-.284-3.522.37-1.04.654-1.782 1.66-2.149 2.833-.628 2.01-.84 4.186-.484 6.25h1.75c.348-1.724.96-3.333 1.792-4.75h1.938c-.853 1.5-1.458 3.188-1.792 4.938h1.792c.208-1.156.625-2.25 1.208-3.25h1.938c-.718 1.188-1.572 2.219-2.52 3.062z" />
    </svg>
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
            <div className="flex flex-wrap gap-4 mt-2">
              <a href="https://www.instagram.com/tanzeel_designz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.pinterest.com/tanzeel_designz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"><FaPinterest className="h-5 w-5" /></a>
              <a href="https://pk.linkedin.com/in/tanzeeldesignz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"><Linkedin className="h-5 w-5" /></a>
              <a href="https://dribbble.com/thedesigndile/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"><Dribbble className="h-5 w-5" /></a>
              <a href="https://www.behance.net/tanzeel_designz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"><FaBehance className="h-5 w-5" /></a>
              <a href="https://www.threads.com/@tanzeel_designz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"><FaThreads className="h-5 w-5" /></a>
              <a href="https://x.com/thedesigndile" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"><Twitter className="h-5 w-5" /></a>
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
