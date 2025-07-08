"use client";

import React from "react";
import { motion } from "framer-motion";

interface AboutHeroProps {
  title: string;
  description: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ title, description }) => (
  <section className="w-full bg-gradient-to-r from-sky-100 to-green-100 py-12 md:py-20 px-4 flex flex-col items-center justify-center text-center min-h-[40vh]">
    <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1aa3dd] mb-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {title}
    </motion.h1>
    <motion.p
      className="text-[#606163] text-base sm:text-lg md:text-xl max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
    >
      {description}
    </motion.p>
  </section>
);

export default AboutHero;
