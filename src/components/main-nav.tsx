
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Info, Briefcase, Package, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import AnimatedLogo from './ui/animated-logo';
import { useAuth } from '@/hooks/use-auth';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '/packages', label: 'Packages', icon: Package },
  { href: '/contact', label: 'Contact', icon: Mail },
];

interface MainNavProps {
  activeLink?: string;
}

export function MainNav({ }: MainNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, loading, signIn, signOut } = useAuth();
  const pathname = usePathname();

  const iconVariants = {
    hover: { 
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    initial: {
      scale: 1,
      rotate: 0
    }
  };

  const renderNavLinks = (isMobile = false) => (
    <nav className={cn(
      "flex items-center gap-2",
      isMobile ? "flex-col items-start gap-4 p-4" : "hidden md:flex"
    )}>
      {navLinks.map((link) => {
        const isActive = (link.href === '/' && pathname === '/') || (link.href !== '/' && !link.href.startsWith('#') && pathname.startsWith(link.href));
        const finalHref = (link.href.startsWith('#') && pathname !== '/') ? `/${link.href}` : link.href;
        return (
            <Link
              key={link.href}
              href={finalHref}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
              className={cn(
                "group text-sm font-medium rounded-md px-3 py-2 transition-colors flex items-center gap-2 hover:bg-primary/80 hover:text-primary-foreground",
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground',
                isMobile && 'w-full text-left'
              )}
              prefetch={false}
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                initial="initial"
              >
                <link.icon className="h-4 w-4" />
              </motion.div>
              <span>{link.label}</span>
            </Link>
        )
      })}
    </nav>
  );
  
  const renderAuthButtons = (isMobile = false) => (
    <div className={cn("flex items-center gap-2", isMobile && "w-full flex-col")}>
      {loading ? (
        <>
            <Skeleton className={cn("h-9 w-20", isMobile && "w-full")} />
        </>
      ) : user ? (
        <Button onClick={signOut} variant="outline" className={cn(isMobile && 'w-full')}>
          Logout
        </Button>
      ) : (
        <Button onClick={signIn} className={cn("bg-primary text-primary-foreground hover:bg-primary/90", isMobile && 'w-full')}>Login</Button>
      )}
    </div>
  );

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <AnimatedLogo />
        </Link>
        <div className="hidden md:flex items-center gap-4">
            {renderNavLinks()}
            {renderAuthButtons()}
        </div>
        
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] bg-background/95 backdrop-blur-xl">
               <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border/20">
                   <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <AnimatedLogo />
                   </Link>
                   <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                   </Button>
                </div>
                <div className="flex-grow flex flex-col justify-between p-4">
                  {renderNavLinks(true)}
                  {renderAuthButtons(true)}
                </div>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
