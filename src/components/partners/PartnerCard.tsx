"use client";

import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";

interface PartnerCardProps {
  logo: string;
  name: string;
  description: string;
  heading?: string;
  tagline?: string;
  linkUrl?: string;
  linkText?: string;
  badgeColor?: string;
  linkColor?: string; // e.g., "text-blue-600", "text-green-600"
  badges?: string[];
  features?: string[];
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  logo,
  name,
  description,
  heading,
  tagline,
  linkUrl,
  linkText = "Learn more",
  badgeColor  ,
  linkColor = "#1aa3dd",
  badges = [],
  features = [],
}) => (
  <motion.div
    whileHover={{
      y: -8,
      scale: 1.05,
      boxShadow:
        "0 8px 32px rgba(34,197,94,0.15), 0 1.5px 8px rgba(0,0,0,0.08)",
      borderColor: "#22c55e",
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`
      w-full max-w-4xl 
      min-h-[300px]
      border border-gray-200
      bg-white rounded-3xl
      overflow-hidden
      flex flex-col md:flex-row
      shadow-md
      group
      transition-colors duration-300
    `}
  >
    {/* Left: Logo, Name, Tagline */}
    <div className="bg-blue-50 flex flex-col items-center justify-center md:w-1/3 p-8 text-center">
      <motion.img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain mb-3"
        loading="lazy"
      />
      <h3 className="font-bold text-xl text-blue-900 mb-1">{name}</h3>
      {/* Optional tagline */}
      <span className="text-gray-500 text-sm">{tagline}</span>
    </div>

    {/* Right: Content */}
    <div className="flex-1 p-6 flex flex-col justify-center gap-4">
      {/* Badges */}
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className={` text-white text-xs font-semibold px-4 py-2 rounded-full ${badgeColor} `}
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      <h4 className="font-semibold text-lg mb-2">
{heading}      </h4>
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Features List */}
      {features.length > 0 && (
        <ul className="text-left mb-4 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 ">
              <svg
                className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 20 20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 10l3 3 5-5"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Link */}
      {linkUrl && (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-[${linkColor}] hover:underline font-medium`}
        >
          {linkText}
        </a>
      )}
    </div>
  </motion.div>
);

export default PartnerCard;
