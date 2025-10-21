"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaPhone, FaEnvelope } from "react-icons/fa";

const leaders = [
  {
    initials: "UG",
    image: "/images/Unoma.jpg",
    name: "Unoma Grant",
    title: "Co-Founder / Chief Executive Officer",
    titleColor: "text-sky-600",
    description:
      "Certified EDGE Expert with a background in Mechanical Engineering and Business Management, combining technical expertise with strategic insight to drive EEN's growth.",
    email: "unoma@eenconsult.com.ng",
    phone: "+2348094563216",
  },
  {
    initials: "OU",
    image: "/images/obi.png", // Image not available, will fallback to initials
    name: "Obinna Ukwa",
    title: "Co-Founder / Managing Director",
    titleColor: "text-sky-600",
    description:
      "Certified EDGE Expert in Mechanical and Civil Engineering, delivering sustainable building solutions with technical precision and passion.",
    email: "obinna@eenconsult.com.ng",
    phone: "+2348099719533",
  },

  {
    initials: "FW",
    image: "/images/Francis.jpg",
    name: "Francis Woods",
    title: "Sustainablity Implementation Engineer",
    titleColor: "text-sky-600",
    description:
      "Civil Engineer and Sustainability Implementation Engineer, integrating green building strategies to meet EDGE standards and maximize project impact.",
    email: "francis@eenconsult.com.ng",
    phone: "+2348127576854",
  },
];

// Component to handle image with fallback to initials
function TeamMemberImage({ leader }: { leader: (typeof leaders)[0] }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // If image failed to load, show initials
  if (imageError || !leader.image) {
    return (
      <div className="flex items-center justify-center h-40 bg-gradient-to-br from-sky-500 to-green-400">
        <span className="text-5xl font-bold text-white">{leader.initials}</span>
      </div>
    );
  }

  // Show image with fallback
  return (
    <div className="relative h-[500px] bg-gray-100">
      <Image
        src={leader.image}
        alt={`${leader.name} - ${leader.title}`}
        fill
        className={`object-cover transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        sizes="(max-width: 768px) 100vw, 50vw"
        unoptimized // As requested, images are unoptimized
      />
      {/* Fallback initials overlay while loading */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-500 to-green-400">
          <span className="text-5xl font-bold text-white">
            {leader.initials}
          </span>
        </div>
      )}
    </div>
  );
}

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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-gray-600 text-lg">
            Our team is passionate about Nigeria&apos;s sustainable development.
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
              {/* Team Member Image with Fallback */}
              <TeamMemberImage leader={leader} />
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
                    href={`mailto:${leader.email}`}
                    className="rounded-full border border-gray-200 p-2 hover:bg-gray-100 transition"
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href={`tel:${leader.phone}`}
                    className="rounded-full border border-gray-200 p-2 hover:bg-gray-100 transition"
                    aria-label="Phone"
                  >
                    <FaPhone />
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
