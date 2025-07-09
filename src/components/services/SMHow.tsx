import React from "react";

const steps = [
  {
    icon: "🔍",
    title: "Site Assessment",
    desc: "Evaluate your electrical infrastructure and identify monitoring points",
  },
  {
    icon: "📐",
    title: "System Design",
    desc: "Custom monitoring solution designed for your specific needs",
  },
  {
    icon: "🔧",
    title: "Installation",
    desc: "Professional installation with minimal disruption to operations",
  },
  {
    icon: "📱",
    title: "Go Live",
    desc: "System activation, app setup, and training for your team",
  },
];

export default function SMHow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-700">
            Simple Installation Process
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            From assessment to insights, we handle everything to get you
            monitoring in days, not weeks.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {/* Connector */}
          <div className="hidden md:block absolute top-16 left-[12.5%] w-[75%] h-1 bg-gradient-to-r from-[#6B46C1] to-[#0066CC] z-0" />
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="text-center relative z-10 animate-fadeInUp"
              style={{
                animationDelay: `${0.1 + i * 0.12}s`,
                animationFillMode: "both",
              }}
            >
              <div className="w-28 h-28 bg-white border-4 border-[#f5f5f5] rounded-full flex flex-col items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#6B46C1] group-hover:to-[#0066CC] group-hover:text-white group-hover:border-transparent group-hover:scale-110 shadow">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-xs font-bold">Step {i + 1}</div>
              </div>
              <h3 className="font-bold mb-2 text-gray-700">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
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
      </div>
    </section>
  );
}
