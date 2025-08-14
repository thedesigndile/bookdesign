// components/LogoIntro.tsx
"use client";

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils';

export default function LogoIntro() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Hide the intro after a delay and re-enable scrolling
    const timer = setTimeout(() => {
        setShow(false);
        document.body.style.overflow = 'auto';
    }, 5200); // 5.2s duration

    // Prevent scrolling while the intro is visible
    document.body.style.overflow = 'hidden';

    return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto'; // Ensure scroll is re-enabled on component unmount
    };
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.08
      }
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 1 } }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const glowVariants = {
    pulse: {
      textShadow: [
        '0 0 6px hsl(var(--primary))',
        '0 0 20px hsl(var(--primary))',
        '0 0 6px hsl(var(--primary))'
      ],
      transition: { repeat: Infinity, duration: 1.4 }
    }
  }
  
  const bgVariants = {
    hidden: {  },
    visible: {
      transition: { duration: 3 }
    }
  }

  const textParts = [
    { word: 'Design', className: 'text-foreground', glow: false },
    { word: ' ', className: '', glow: false },
    { word: 'Dile', className: 'text-primary', glow: true }
  ]

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          variants={bgVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="flex font-playfair"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {textParts.map(({ word, className, glow }, idx) =>
              [...word].map((letter, i) => (
                <motion.span
                  key={`${idx}-${i}`}
                  variants={glow ? { ...letterVariants, pulse: glowVariants.pulse } : letterVariants}
                  animate={glow ? 'pulse' : 'visible'}
                  className={cn("text-5xl md:text-7xl font-extrabold tracking-tight", className)}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
