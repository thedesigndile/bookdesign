
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
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
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
            variants={letterVariants}
            className="text-foreground"
            >
            {char}
          </motion.span>
        ))}
        <span className="w-1.5" />
        <motion.span
          variants={containerVariants}
          className="flex"
        >
          {word2.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="text-primary"
              animate={{
                opacity: [0.7, 1, 0.7],
                transition: {
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: index * 0.1,
                }
              }}
              >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
  );
};

export default AnimatedLogo;
