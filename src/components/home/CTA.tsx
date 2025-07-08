"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 60, damping: 12 },
  },
};

function CTA() {
  return (
    <motion.section
      className="w-full bg-gradient-to-r from-sky-400 to-green-400 py-12 px-4 flex flex-col items-center justify-center text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-4"
        variants={item}
      >
        Ready to Build Green?
      </motion.h2>
      <motion.p
        className="text-white text-base md:text-lg mb-8 max-w-2xl"
        variants={item}
      >
        Join Nigeria&apos;s sustainability revolution with expert guidance every
        step of the way.
      </motion.p>
      <Link href="/contact-us" passHref legacyBehavior>
        <motion.a
          className="inline-block bg-white text-sky-600 font-semibold rounded-full px-8 py-3 shadow-md transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Schedule a Consultation
        </motion.a>
      </Link>
    </motion.section>
  );
}

export default CTA;
