
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
    hover: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    initial: { y: 0 },
    hover: { y: -4, transition: { type: 'spring', stiffness: 300, damping: 10 } },
  };

  return (
    <motion.div
      className={cn("flex items-center text-2xl font-semibold tracking-tight cursor-pointer font-playfair", className)}
      aria-label="Design Dile"
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
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
