import React from "react";


const steps = [
  {
    title: "Assessment",
    description: "Comprehensive audit of your current systems and efficiency",
  },
  {
    title: "Planning",
    description: "Custom solutions designed for your specific needs and budget",
  },
  {
    title: "Implementation",
    description: "Professional installation with minimal disruption",
  },
  {
    title: "Support",
    description: "Ongoing maintenance and optimization services",
  },
];

function SProcess() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1aa3dd08] to-[#73c16708]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-700">
            Our Proven Process
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto">
            From initial assessment to ongoing support, we ensure your
            sustainability journey is smooth and successful.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative flex flex-col md:grid md:grid-cols-4 gap-8 mt-12">
          {/* Connector Bar (animated) */}
          <div
            className="
              hidden
              md:block
              absolute
              top-10
              left-[12.5%]
              w-[75%]
              h-1
              bg-gradient-to-r from-[#1aa3dd] to-[#73c167]
              z-0
              animate-[growBar_1s_ease-in]
            "
            style={{
              // Custom animation using Tailwind's arbitrary values
              animationName: "growBar",
              animationDuration: "1s",
              animationTimingFunction: "ease-in",
            }}
          />

          {/* Steps */}
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="
                flex flex-col items-center text-center relative z-10
                group
                animate-fadeInUp
                transition-all duration-300
              "
              style={{
                animationDelay: `${0.2 + idx * 0.15}s`,
                animationFillMode: "both",
              }}
            >
              <div
                className="
                  w-20 h-20 bg-white border-4 border-gray-200 rounded-full
                  flex items-center justify-center mb-6 text-2xl font-bold text-[#1aa3dd]
                  transition-all duration-300
                  group-hover:bg-gradient-to-br group-hover:from-[#1aa3dd] group-hover:to-[#73c167]
                  group-hover:text-white group-hover:border-transparent
                  group-hover:scale-110
                  shadow-md hover:rounded-full
                "
              >
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-700">
                {step.title}
              </h3>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom keyframes for fadeInUp and growBar */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          @keyframes growBar {
            0% { width: 0; opacity: 0;}
            100% { width: 75%; opacity: 1;}
          }
        `}
      </style>
    </section>
  );
}

export default SProcess;
