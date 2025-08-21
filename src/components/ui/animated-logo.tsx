
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
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: i * 0.04 },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Design Dile"
    >
      {word.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="text-foreground"
        >
          {char}
        </motion.span>
      ))}
      <motion.span variants={childVariants} className="w-1.5" />
      {word2.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="text-primary"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedLogo;
