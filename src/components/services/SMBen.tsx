import React from "react";

const benefits = [
  {
    icon: "💰",
    title: "Cost Reduction",
    desc: "Identify and eliminate energy waste, optimize usage patterns, and reduce peak demand charges.",
    metrics: [
      { value: "30%", label: "Average Savings" },
      { value: "6 mo", label: "Typical ROI" },
    ],
  },
  {
    icon: "🛡️",
    title: "Equipment Protection",
    desc: "Detect electrical anomalies early, prevent equipment failures, and extend asset lifespans.",
    metrics: [
      { value: "85%", label: "Failure Prevention" },
      { value: "2x", label: "Equipment Life" },
    ],
  },
];

export default function SMBen() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-700">
            Measurable Business Impact
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Smart metering delivers immediate visibility that translates into
            real savings and operational improvements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="bg-white p-10 rounded-2xl shadow-lg relative overflow-hidden animate-fadeInUp"
              style={{
                animationDelay: `${0.1 + i * 0.12}s`,
                animationFillMode: "both",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#6B46C1] to-[#0066CC] rounded-xl flex items-center justify-center text-2xl text-white">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-700">{b.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{b.desc}</p>
              <div className="flex gap-6">
                {b.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex-1 text-center bg-[#f5f5f5] rounded-lg p-4"
                  >
                    <div className="text-2xl font-extrabold text-[#6B46C1]">
                      {m.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
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
