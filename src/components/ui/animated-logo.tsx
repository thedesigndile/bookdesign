
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
        <motion.div
          variants={containerVariants}
          className="flex"
          animate={{
            rotate: [0, -5, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
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
      </motion.div>
  );
};

export default AnimatedLogo;
