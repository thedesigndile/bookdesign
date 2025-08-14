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
    }, 5000); // 5s duration

    // Prevent scrolling while the intro is visible
    document.body.style.overflow = 'hidden';

    return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto'; // Ensure scroll is re-enabled on component unmount
    };
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5
      }
    },
    exit: { opacity: 0, transition: { duration: 1 } }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const glowVariants = {
    pulse: {
      textShadow: [
        '0px 0px 4px hsl(var(--primary))',
        '0px 0px 12px hsl(var(--primary))',
        '0px 0px 4px hsl(var(--primary))'
      ],
      transition: { repeat: Infinity, duration: 1.5 }
    }
  }

  const text = [
    { word: 'Design', className: 'text-foreground' },
    { word: ' ', className: '' },
    { word: 'Dile', className: 'text-primary' }
  ]

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight flex font-playfair"
            initial="visible"
            animate="visible"
          >
            {text.map(({ word, className }, idx) => (
                <span key={idx} className="flex">
                    {[...word].map((letter, i) => (
                    <motion.span
                        key={`${idx}-${i}`}
                        variants={{ ...letterVariants, ...(className === 'text-primary' ? glowVariants : {}) }}
                        className={className}
                        animate={className === 'text-primary' ? 'pulse' : undefined}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                    ))}
                </span>
            ))}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
