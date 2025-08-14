
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
        staggerChildren: 0.05
      }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 1 } }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 90, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] }
    }
  }

  const glowVariants = {
    pulse: {
      textShadow: [
        '0 0 4px hsl(var(--primary))',
        '0 0 20px hsl(var(--primary))',
        '0 0 4px hsl(var(--primary))'
      ],
      transition: { repeat: Infinity, duration: 1.2 }
    }
  }

  const wordSlideVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1], staggerChildren: 0.05 }
    }
  }

  const zoomOutVariants = {
    visible: { scale: 1 },
    zoom: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 1, delay: 4 }
    }
  }

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
          <motion.div
            className="overflow-hidden flex font-playfair"
            variants={zoomOutVariants}
            animate={['visible', 'zoom']}
          >
            <motion.div
              className="flex mr-2"
              variants={wordSlideVariants}
            >
              {[...'Design'].map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="flex"
              variants={wordSlideVariants}
            >
              {[...'Dile'].map((letter, i) => (
                <motion.span
                  key={i}
                  variants={{...letterVariants, pulse: glowVariants.pulse}}
                  animate={["visible", "pulse"]}
                  className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
