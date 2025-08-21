
"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo = ({ className }: AnimatedLogoProps) => {
  const text = "Design Dile";
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className={cn("flex items-center text-2xl font-semibold tracking-tight cursor-pointer font-playfair", className)}
      aria-label="Design Dile"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <span className="text-foreground">
        {words[0].split('').map((letter, i) => (
          <motion.span key={i} variants={letterVariants} className="inline-block">
            {letter}
          </motion.span>
        ))}
      </span>
      <span className="w-1.5" />
      <span className="text-primary">
        {words[1].split('').map((letter, i) => (
          <motion.span key={i} variants={letterVariants} className="inline-block">
            {letter}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
};

export default AnimatedLogo;
