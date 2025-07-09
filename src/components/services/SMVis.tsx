import React from "react";

export default function VisibilityProblem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-700">
            The Hidden Cost of Energy Blindness
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Without real-time monitoring, businesses waste 30-40% more on
            electricity through inefficiencies they can&apos;t see.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-8 rounded-2xl border-2 border-red-100 bg-gradient-to-br from-red-100/20 to-red-200/10 text-center animate-fadeInUp">
            <div className="text-4xl mb-4">🚫</div>
            <h3 className="text-xl font-bold mb-4 text-gray-700">
              Without Smart Metering
            </h3>
            <ul className="text-left text-sm space-y-2">
              {[
                "Monthly bill surprises",
                "No idea when peak usage occurs",
                "Equipment failures go unnoticed",
                "Can't identify energy vampires",
                "No data for cost reduction",
                "Reactive maintenance only",
              ].map((item) => (
                <li key={item} className="relative pl-6">
                  <span className="absolute left-0 text-red-500 font-bold">
                    ✗
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-100/20 to-blue-100/10 text-center animate-fadeInUp">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-4 text-gray-700">
              With Smart Metering
            </h3>
            <ul className="text-left text-sm space-y-2">
              {[
                "Real-time cost tracking",
                "Identify peak usage patterns",
                "Instant alerts for anomalies",
                "Pinpoint energy waste sources",
                "Data-driven optimization",
                "Predictive maintenance possible",
              ].map((item) => (
                <li key={item} className="relative pl-6">
                  <span className="absolute left-0 text-green-600 font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
