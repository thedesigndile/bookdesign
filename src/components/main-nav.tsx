
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import AnimatedLogo from './ui/animated-logo';
import { useAuth } from '@/hooks/use-auth';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

interface MainNavProps {
  activeLink?: string;
}

export function MainNav({ activeLink }: MainNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, loading, signIn, signOut } = useAuth();

  const renderNavLinks = (isMobile = false) => (
    <nav className={cn(
      "flex items-center gap-2",
      isMobile ? "flex-col items-start gap-4 p-4" : "hidden md:flex"
    )}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
          className={cn(
            "text-sm font-medium rounded-md px-3 py-2 transition-colors",
            activeLink === link.label
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-primary/80 hover:text-primary-foreground',
            isMobile && 'w-full text-left'
          )}
          prefetch={false}
        >
          {link.label}
        </Link>
      ))}
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
        <Button onClick={signIn} className={cn(isMobile && 'w-full')}>Login</Button>
      )}
    </div>
  );

  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-border">
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
                <div className="flex items-center justify-between p-4 border-b">
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
