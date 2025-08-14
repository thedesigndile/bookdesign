
"use client";

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils';

export default function LogoIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the intro after a delay and re-enable scrolling
    const timer = setTimeout(() => {
        setShow(false);
        document.body.style.overflow = 'auto';
    }, 5600); // 5.6s total duration

    // Prevent scrolling while the intro is visible
    document.body.style.overflow = 'hidden';

    return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto'; // Ensure scroll is re-enabled on component unmount
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
      }
    },
    exit: { opacity: 0, transition: { duration: 0.6, delay: 5.0 } }
  };

  const wordContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 1.2,
      },
    },
  };

  const designLetterVariants = {
    hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const dileLetterVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9, 
      rotateX: "12deg",
      textShadow: '0 0 0px hsl(var(--primary-raw)), 0 0 0px hsl(var(--primary-raw))',
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: "0deg",
      textShadow: [
        '0 0 1px hsl(var(--primary-raw)), 0 0 2px hsl(var(--primary-raw))', // Neon stroke
        '0 0 8px hsl(var(--primary-raw)), 0 0 16px hsl(var(--primary-raw))', // Fill with bloom
        '0 0 12px hsl(var(--primary-raw)), 0 0 24px hsl(var(--primary-raw))', // Pulse ripple
        '0 0 8px hsl(var(--primary-raw)), 0 0 16px hsl(var(--primary-raw))', // Relax
      ],
      transition: {
        delay: 0.4,
        duration: 1.4,
        ease: [0.19, 1, 0.22, 1],
        textShadow: {
            duration: 1.2,
            times: [0, 0.5, 0.8, 1],
            delay: 1.4,
        }
      },
    },
  };

  const cameraVariants = {
    initial: { scale: 1, rotateX: 0 },
    animate: {
      scale: 1.02,
      rotateX: -3,
      transition: {
        duration: 1,
        delay: 3.4,
        ease: 'easeOut',
      }
    }
  }

  const word = "Design";
  const word2 = "Dile";
  const numParticles = 30;

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
          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: numParticles }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-primary/50"
                initial={{ 
                    opacity: 0, 
                    x: `${Math.random() * 100}vw`, 
                    y: `${Math.random() * 100}vh`,
                }}
                animate={{
                    opacity: [0, 1, 0.5, 0],
                    x: `+=${(Math.random() - 0.5) * 100}px`,
                    y: `+=${(Math.random() - 0.5) * 100}px`,
                    scale: Math.random() * 1.5 + 0.5,
                }}
                transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: i * 0.1
                }}
              />
            ))}
          </div>

          {/* Light Streak */}
          <motion.div 
            className="absolute top-1/2 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: [0, 1, 0.5, 0] }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          />

          <motion.div variants={cameraVariants} initial="initial" animate="animate">
            <motion.div
              className={cn(
                "flex items-center text-5xl md:text-7xl font-extrabold tracking-tight font-sans",
              )}
              variants={wordContainerVariants}
            >
              {word.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={designLetterVariants}
                  className="text-foreground"
                >
                  {char}
                </motion.span>
              ))}
              <span className="w-4" />
              {word2.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={dileLetterVariants}
                  className="text-primary"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Lens Flare */}
          <motion.div
            className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-transparent to-white/10"
            initial={{ x: "calc(-100% - 50vw)", skewX: -30 }}
            animate={{ x: "calc(100vw + 100%)" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 4.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
