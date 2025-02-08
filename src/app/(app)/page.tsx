"use client";
import React from "react";
import { motion } from "framer-motion";
export default function SparklesPreview() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center">
      <div className="w-full relative inset-0 h-screen">
      </div>
      <motion.h1
        transition={{ duration: 1 }}
        variants={variants1}
        className="absolute text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Welcome to Pexllecn
      </motion.h1>
    </div>
  );
}