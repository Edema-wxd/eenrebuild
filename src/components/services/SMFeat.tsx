import React from "react";
import {
  GiChart,
  GiSmartphone,
  GiOnTarget,
  GiElectric,
  GiRingingBell,
} from "react-icons/gi";


const features = [
  {
    icon: <GiChart className="text-7xl text-[#1aa3dd]" />,
    title: "Real-Time Analytics",
    desc: "Monitor electricity usage as it happens with second-by-second updates and instant notifications for unusual consumption.",
  },
  {
    icon: <GiSmartphone className="text-7xl text-[#1aa3dd]" />,
    title: "Mobile App Access",
    desc: "Check your energy usage from anywhere, anytime. Get alerts, view reports, and control systems remotely.",
  },
  {
    icon: <GiOnTarget className="text-7xl text-[#1aa3dd]" />,
    title: "Automated Reporting",
    desc: "Receive daily, weekly, and monthly reports showing consumption patterns, costs, and optimization opportunities.",
  },
  {
    icon: <GiElectric className="text-7xl text-[#1aa3dd]" />,
    title: "Circuit-Level Monitoring",
    desc: "Track individual circuits and equipment to identify exactly where energy is being consumed in your facility.",
  },
  {
    icon: <GiRingingBell className="text-7xl text-[#1aa3dd]" />,
    title: "Smart Alerts",
    desc: "Set custom thresholds and receive immediate notifications for overconsumption, equipment issues, or unusual patterns.",
  },
  {
      icon: <GiChart className="text-7xl text-[#1aa3dd]" />,
    title: "Predictive Analytics",
    desc: "AI-powered insights predict future consumption and identify opportunities for energy and cost savings.",
  },
];

export default function MeteringFeatures() {
  return (
    <section className="py-20 bg-[#f5f5f5]" id="features">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-700">
            Advanced Monitoring Capabilities
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Our smart metering solution provides comprehensive insights into
            every aspect of your electrical consumption.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white p-10 rounded-2xl text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-fadeInUp"
              style={{
                animationDelay: `${0.1 + i * 0.12}s`,
                animationFillMode: "both",
              }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#6B46C11a] to-[#0066CC1a] rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-700">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
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
