// components/LogoIntro.tsx
"use client";

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LogoIntro() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Hide the intro after a delay and re-enable scrolling
    const timer = setTimeout(() => {
        setShow(false);
        document.body.style.overflow = 'auto';
    }, 3000); // 3s duration

    // Prevent scrolling while the intro is visible
    document.body.style.overflow = 'hidden';

    return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto'; // Ensure scroll is re-enabled on component unmount
    };
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-playfair"
          >
            Design Dile
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
