import React from "react";

function WHero() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#00a8e80d] to-[#1aa3dd0d]">
      {/* Decorative radial background */}
      <div
        className="pointer-events-none absolute right-[-10%] top-1/2 w-[600px] h-[600px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,168,232,0.10) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block bg-[#73c167] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              West Africa Exclusive Distributor
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 leading-tight">
              Save Up to <span className="text-[#00A8E8]">70% Water</span>{" "}
              Without Compromising Performance
            </h1>
            <p className="text-lg text-gray-500 mb-8 max-w-xl">
              Premium Neoperl® flow regulators and aerators delivering
              exceptional water savings while maintaining superior user
              experience.
            </p>
            <div className="hidden   gap-4 mb-8">
              <a
                href="#products"
                className="bg-[#00A8E8] text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-[#0090c1] transition"
              >
                View Products
              </a>
              <a
                href="#calculator"
                className="border-2 border-[#00A8E8] text-[#00A8E8] font-semibold px-8 py-3 rounded-full hover:bg-[#00A8E8] hover:text-white transition"
              >
                Calculate Your Savings
              </a>
            </div>
          </div>
          {/* Right: Visual */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Standard Tap */}
                <div className="flex flex-col items-center">
                  <div className="font-bold text-gray-700 mb-2">
                    Standard Tap
                  </div>
                  <div className="relative h-24 w-12 flex items-end justify-center mb-2">
                    {/* 5 animated drops */}
                    <span className="absolute left-[45%] w-1 h-6 rounded-b-full bg-[#00A8E8] opacity-80 animate-[waterDrop_2s_linear_infinite]" />
                    <span className="absolute left-[50%] w-1 h-6 rounded-b-full bg-[#00A8E8] opacity-80 animate-[waterDrop_2s_linear_infinite] animate-delay-[0.2s]" />
                    <span className="absolute left-[55%] w-1 h-6 rounded-b-full bg-[#00A8E8] opacity-80 animate-[waterDrop_2s_linear_infinite] animate-delay-[0.4s]" />
                    <span className="absolute left-[47%] w-1 h-6 rounded-b-full bg-[#00A8E8] opacity-80 animate-[waterDrop_2s_linear_infinite] animate-delay-[0.6s]" />
                    <span className="absolute left-[53%] w-1 h-6 rounded-b-full bg-[#00A8E8] opacity-80 animate-[waterDrop_2s_linear_infinite] animate-delay-[0.8s]" />
                  </div>
                  <div className="text-3xl font-extrabold text-[#00A8E8] mb-1">
                    15 L/min
                  </div>
                  <div className="text-gray-400 text-sm">₦450/month</div>
                </div>
                {/* With Neoperl */}
                <div className="flex flex-col items-center">
                  <div className="font-bold text-gray-700 mb-2">
                    With Neoperl
                  </div>
                  <div className="relative h-24 w-12 flex items-end justify-center mb-2">
                    {/* 2 animated drops */}
                    <span className="absolute left-[48%] w-1 h-6 rounded-b-full bg-[#00A8E8] opacity-80 animate-[waterDrop_2s_linear_infinite]" />
                    <span className="absolute left-[52%] w-1 h-6 rounded-b-full bg-[#00A8E8] opacity-80 animate-[waterDrop_2s_linear_infinite] animate-delay-[0.5s]" />
                  </div>
                  <div className="text-3xl font-extrabold text-[#00A8E8] mb-1">
                    4.5 L/min
                  </div>
                  <div className="text-gray-400 text-sm">₦135/month</div>
                </div>
              </div>
              {/* Custom keyframes for water drop animation */}
              <style>
                {`
                  @keyframes waterDrop {
                    0% { top: 0; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                  }
                  .animate-\\[waterDrop_2s_linear_infinite\\] {
                    animation: waterDrop 2s linear infinite;
                  }
                  .animate-delay-\\[0\\.2s\\] { animation-delay: 0.2s; }
                  .animate-delay-\\[0\\.4s\\] { animation-delay: 0.4s; }
                  .animate-delay-\\[0\\.5s\\] { animation-delay: 0.5s; }
                  .animate-delay-\\[0\\.6s\\] { animation-delay: 0.6s; }
                  .animate-delay-\\[0\\.8s\\] { animation-delay: 0.8s; }
                `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WHero;
