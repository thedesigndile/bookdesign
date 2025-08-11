
"use client";

import { motion } from "framer-motion";
import React from "react";

export const AnimatedHeroBackground = () => {
  const GRID_WIDTH = 25;
  const GRID_HEIGHT = 20;

  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40L40 40L40 0"
              fill="none"
              stroke="hsl(var(--primary) / 0.1)"
              strokeWidth="1"
            ></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 h-full w-full bg-gradient-to-b from-background via-background to-transparent"
      />
    </div>
  );
};
