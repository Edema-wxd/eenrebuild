"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Utility for gradient text
const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-sky-500 to-green-400 bg-clip-text text-transparent">
    {children}
  </span>
);

// Count-up animation hook
function useCountUp(to: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    let frame: number;
    function animate(ts: number) {
      if (!start.current) start.current = ts;
      const progress = Math.min((ts - start.current) / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [to, duration]);

  return count;
}

function PHero() {
  // Stats
  const partners = useCountUp(3, 1000);
  const countries = useCountUp(140, 1200);
  const years = useCountUp(50, 1400);

  return (
    <section className="w-full bg-gradient-to-br from-sky-50 to-green-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] relative overflow-hidden">
      {/* Decorative background blobs - responsive positioning and sizing */}
      <motion.div
        className="absolute -top-16 sm:-top-24 md:-top-32 -left-16 sm:-left-24 md:-left-32 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl opacity-40 sm:opacity-60 animate-blob"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2 }}
        aria-hidden
      />
      <motion.div
        className="absolute -bottom-16 sm:-bottom-24 md:-bottom-32 -right-16 sm:-right-24 md:-right-32 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl opacity-40 sm:opacity-60 animate-blob animation-delay-2000"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        aria-hidden
      />

      {/* Headline - improved responsive typography */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 leading-tight animate-fade-in-up px-2 sm:px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="block sm:inline">Global Partnerships,</span>
        <br className="hidden xs:block sm:hidden" />
        <span className="text-sky-500">Local</span>
        <br className="hidden sm:block" />
        <GradientText>Excellence</GradientText>
      </motion.h1>

      {/* Subheadline - improved responsive spacing and sizing */}
      <motion.p
        className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4 leading-relaxed animate-fade-in-up"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        Through strategic partnerships with world-leading organizations, we
        bring international best practices and cutting-edge technology to
        Nigeria&apos;s sustainability market.
      </motion.p>

      {/* Stats Row - improved responsive layout and spacing */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 mt-2 sm:mt-4 md:mt-6 animate-fade-in-up px-2 sm:px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
      >
        <div className="flex flex-col items-center min-w-[120px] sm:min-w-[140px] md:min-w-[160px]">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sky-500">
            {partners}
          </span>
          <span className="text-gray-500 text-xs sm:text-sm md:text-base mt-1 text-center leading-tight">
            International Partners
          </span>
        </div>
        <div className="flex flex-col items-center min-w-[120px] sm:min-w-[140px] md:min-w-[160px]">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sky-500">
            {countries}+
          </span>
          <span className="text-gray-500 text-xs sm:text-sm md:text-base mt-1 text-center leading-tight">
            Countries Reached
          </span>
        </div>
        <div className="flex flex-col items-center min-w-[120px] sm:min-w-[140px] md:min-w-[160px]">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sky-500">
            {years}+
          </span>
          <span className="text-gray-500 text-xs sm:text-sm md:text-base mt-1 text-center leading-tight">
            Years Combined Experience
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default PHero;
