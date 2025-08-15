"use client";
import React from "react";
import Image from "next/image";

const techs = [
  {
    icon: (
      <Image src="/images/mikado.webp" alt="Mikado" width={335} height={188} />
    ),
    title: "MIKADO",
    desc: "Creates a visually enchanting water stream that turns hand washing into a premium experience while saving water.",
  },
  {
    icon: (
      <Image
        src="/images/aerated.webp"
        alt="Aerated"
        width={335}
        height={188}
      />
    ),
    title: "AERATED",
    desc: "Introduces air into the water stream making it soft to touch and non-splashing for comfortable use.",
  },
  {
    icon: (
      <Image src="/images/spray.webp" alt="Spray" width={335} height={188} />
    ),
    title: "SPRAY",
    desc: "Produces a miniature shower pattern providing full hand coverage during washing with minimal water use.",
  },
  {
    icon: (
      <Image
        src="/images/Atomizer.webp"
        alt="Atomized"
        width={335}
        height={188}
      />
    ),
    title: "ATOMIZED",
    desc: "Disperses water into tiny droplets for extremely low flow rates while maintaining washing effectiveness.",
  },
];

function WTech() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-700">
            Advanced Neoperl Technologies
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative flow technologies that deliver exceptional water savings
            without compromising user experience.
          </p>
        </div>
        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {techs.map((tech, i) => (
            <div
              key={tech.title}
              className="text-center p-8 rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-fadeInUp"
              style={{
                animationDelay: `${0.1 + i * 0.12}s`,
                animationFillMode: "both",
              }}
            >
              <div className="w-fit h-fit p-4  bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl  ">
                {tech.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-700">
                {tech.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Custom keyframes for fadeInUp */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
        `}
      </style>
    </section>
  );
}

export default WTech;
