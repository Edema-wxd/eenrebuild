import React from "react";
import Image from "next/image";

const cases = [
  {
    image: <Image src="/images/access.png" alt="Access Bank HQ" width={500} height={500} />,
    type: "Commercial",
    title: "Access Bank Headquarters",
    desc: "Complete retrofit of 250+ water points across corporate headquarters.",
    metrics: [
      { value: "35%", label: "Water Saved" },
      { value: "₦3.2M", label: "Annual Savings" },
    ],
  },
  {
    image: <Image src="/images/sterling.png" alt="Sterling Bank HQ" width={500} height={500} />,
    type: "Commercial",
    title: "Sterling Bank Headquarters",
    desc: "Complete retrofit of 120+ water points across corporate headquarters.",
    metrics: [
      { value: "25%", label: "Water Saved" },
      { value: "₦1.2M", label: "Annual Savings" },
    ],
  },
 
  {
    image: "Paelon Hospital",
    type: "Healthcare",
    title: "Paelon Memorial Hospital",
    desc: "Water-saving implementation across patient rooms and public areas.",
    metrics: [
      { value: "58%", label: "Water Saved" },
      { value: "₦2.1M", label: "Annual Savings" },
    ],
  },
];

function WCase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-700">
            Success Stories
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from Nigerian businesses saving water and money with
            Neoperl solutions.
          </p>
        </div>
        {/* Case Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-8">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className="bg-[#f6f8fa] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl animate-fadeInUp"
              style={{
                animationDelay: `${0.1 + i * 0.15}s`,
                animationFillMode: "both",
              }}
            >
              <div className="h-fit flex items-center justify-center bg-gradient-to-br from-[#4ecb71] to-[#1aa3dd] text-white text-xl font-bold">
                {c.image}
              </div>
              <div className="p-8">
                <div className="uppercase text-[#00A8E8] font-semibold text-xs mb-2">
                  {c.type}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-700">
                  {c.title}
                </h3>
                <p className="text-gray-600">{c.desc}</p>
                <div className="flex gap-8 my-6">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="flex-1">
                      <div className="text-xl font-extrabold text-[#73c167]">
                        {m.value}
                      </div>
                      <div className="text-xs text-gray-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
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

export default WCase;
