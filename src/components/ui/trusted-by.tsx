"use client"

import React from 'react'

const logos = [
  { 
    name: "PublixPress", 
    Logo: () => (
      <svg viewBox="0 0 140 40" className="h-10">
        <text x="0" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" letterSpacing="1" fill="currentColor">
          Publix<tspan fill="hsl(var(--primary))">Press</tspan>
        </text>
      </svg>
    )
  },
  { 
    name: "Typeflow", 
    Logo: () => (
      <svg viewBox="0 0 120 40" className="h-10">
        <path d="M10 10 Q15 0, 20 10 T30 10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <text x="40" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" fill="currentColor">Typeflow</text>
      </svg>
    )
  },
  { 
    name: "Inkerra", 
    Logo: () => (
      <svg viewBox="0 0 120 40" className="h-10">
        <text x="0" y="30" fontFamily="serif" fontSize="32" fontWeight="600" fill="currentColor" fontStyle="italic">
          Inkerra
        </text>
      </svg>
    )
  },
  { 
    name: "Booknova", 
    Logo: () => (
      <svg viewBox="0 0 130 40" className="h-10">
        <path d="M20 5 L23 15 L33 15 L25 22 L28 32 L20 25 L12 32 L15 22 L7 15 L17 15 Z" fill="hsl(var(--primary))"/>
        <text x="40" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" fill="currentColor">Booknova</text>
      </svg>
    )
  },
  { 
    name: "Craftlab Media", 
    Logo: () => (
      <svg viewBox="0 0 180 40" className="h-10">
        <rect x="0" y="10" width="20" height="20" fill="currentColor" rx="4"/>
        <text x="30" y="30" fontFamily="monospace" fontSize="26" fontWeight="500" fill="currentColor">Craftlab Media</text>
      </svg>
    )
  },
  { 
    name: "Readistack", 
    Logo: () => (
      <svg viewBox="0 0 150 40" className="h-10">
        <rect x="0" y="5" width="25" height="5" fill="currentColor"/>
        <rect x="0" y="15" width="25" height="5" fill="currentColor" opacity="0.7"/>
        <rect x="0" y="25" width="25" height="5" fill="currentColor" opacity="0.4"/>
        <text x="35" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" fill="currentColor">Readistack</text>
      </svg>
    )
  },
  { 
    name: "Printory", 
    Logo: () => (
      <svg viewBox="0 0 120 40" className="h-10">
        <path d="M10 30 C 30 10, 60 10, 80 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <text x="0" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" fill="currentColor">Printory</text>
      </svg>
    )
  },
  { 
    name: "Zinfolio", 
    Logo: () => (
      <svg viewBox="0 0 130 40" className="h-10">
        <path d="M5 20 A 15 15, 0, 0, 1, 35 20" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <text x="45" y="30" fontFamily="Roboto, sans-serif" fontSize="28" fontWeight="500" fill="currentColor">Zinfolio</text>
      </svg>
    )
  },
];

export function TrustedBy() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto text-center">
        <h2 className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase" style={{ fontFamily: 'Roboto, sans-serif' }}>
          FEATURED ON & TRUSTED BY
        </h2>
        <div className="relative mt-12 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
          <div className="flex w-max marquee">
            {[...logos, ...logos].map(({ Logo, name }, index) => (
              <div key={`${name}-${index}`} className="flex-shrink-0 w-64 h-20 flex items-center justify-center">
                <div className="text-foreground/70 transition-all duration-300 hover:text-foreground hover:scale-105">
                  <Logo />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
