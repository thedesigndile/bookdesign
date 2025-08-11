
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo = ({ className }: AnimatedLogoProps) => {
  const word = "Design";
  const word2 = "Dile";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
      <motion.div
        className={cn("flex items-center text-2xl font-semibold tracking-tight cursor-pointer font-playfair", className)}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label="Design Dile"
      >
        {word.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="text-foreground"
            >
            {char}
          </motion.span>
        ))}
        <span className="w-1.5" />
        {word2.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="text-primary"
            >
            {char}
          </motion.span>
        ))}
      </motion.div>
  );
};

export default AnimatedLogo;
