
"use client";

import { cn } from '@/lib/utils';

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo = ({ className }: AnimatedLogoProps) => {
<<<<<<< HEAD
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
=======
  return (
    <div
      className={cn("flex items-center cursor-pointer font-playfair", className)}
      aria-label="Design Dile"
    >
      {/* Main Logo Container */}
      <div className="relative flex items-center">
        {/* Design Text */}
        <div className="relative">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            Design
          </span>
          {/* Subtle underline effect */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary/80 to-transparent rounded-full"></div>
        </div>
        
        {/* Spacing */}
        <span className="w-2" />
        
        {/* Dile Text with enhanced styling */}
        <div className="relative">
          <span className="text-2xl font-bold tracking-tight text-primary relative">
            Dile
          </span>
          {/* Enhanced background highlight */}
          <div className="absolute inset-0 bg-primary/10 rounded-lg -z-10 transform scale-x-110 scale-y-125"></div>
          {/* Subtle shadow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg -z-20 blur-sm"></div>
        </div>
        
        {/* Decorative accent */}
        <div className="ml-2 w-1.5 h-6 bg-gradient-to-b from-primary via-primary/80 to-transparent rounded-full"></div>
      </div>
    </div>
>>>>>>> origin/master
  );
};

export default AnimatedLogo;
