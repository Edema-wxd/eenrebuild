"use client";

import React from "react";
import { motion } from "framer-motion";

// Dummy data for leaders
const leaders = [
  {
    initials: "OU",
    name: "Obinna Ukwa",
    title: "Co-Founder / Managing Director",
    titleColor: "text-sky-600",
    description:
      "Certified EDGE Expert with a background in Mechanical & Civil Engineering. Obinna brings deep technical expertise and a passion for sustainable building solutions to every project.",
    email: "#",
    phone: "#",
  },
  {
    initials: "UG",
    name: "Unoma Grant",
    title: "Co-Founder / Chief Executive Officer",
    titleColor: "text-sky-600",
    description:
      "Certified EDGE Expert with a background in Mechanical Engineering & Business Management. Unoma combines technical knowledge with strategic business acumen to drive EEN's growth.",
    email: "#",
    phone: "#",
  },
];

// Simple icon SVGs
const MailIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2m18 0v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0-9 6-9-6" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M3 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm0 14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2zm14-14a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5zm0 14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2z" />
  </svg>
);

function Team() {
  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Meet Our Leadership
          </h2>
          <p className="text-gray-600 text-lg">
            Certified EDGE Experts passionate about Nigeria&apos;s sustainable
            development.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-xl bg-white overflow-hidden flex flex-col"
            >
              {/* Gradient Initials */}
              <div className="flex items-center justify-center h-40 bg-gradient-to-br from-sky-500 to-green-400">
                <span className="text-5xl font-bold text-white">
                  {leader.initials}
                </span>
              </div>
              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-800">
                  {leader.name}
                </h3>
                <div className={`mb-2 font-medium ${leader.titleColor}`}>
                  {leader.title}
                </div>
                <p className="text-gray-600 mb-4">{leader.description}</p>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={leader.email}
                    className="rounded-full border border-gray-200 p-2 hover:bg-gray-100 transition"
                    aria-label="Email"
                  >
                    <MailIcon />
                  </a>
                  <a
                    href={leader.phone}
                    className="rounded-full border border-gray-200 p-2 hover:bg-gray-100 transition"
                    aria-label="Phone"
                  >
                    <PhoneIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
