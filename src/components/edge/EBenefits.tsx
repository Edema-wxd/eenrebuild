import React from "react";

const roiMetrics = [
  { label: "Certification Cost", value: "₦2.5M" },
  { label: "Annual Energy Savings", value: "₦4.8M" },
  { label: "Annual Water Savings", value: "₦1.2M" },
  { label: "Property Value Increase", value: "15%" },
];

const benefits = [
  {
    icon: "💰",
    title: "Lower Operating Costs",
    description:
      "Reduce utility bills by 20-30% through efficient design and systems, providing immediate cash flow improvements.",
  },
  {
    icon: "📈",
    title: "Higher Property Values",
    description:
      "EDGE-certified buildings command premium rents and sale prices, with faster lease-up rates.",
  },
  {
    icon: "🌍",
    title: "ESG Compliance",
    description:
      "Meet international sustainability standards and attract ESG-conscious investors and tenants.",
  },
  {
    icon: "🏆",
    title: "Market Differentiation",
    description:
      "Stand out in Nigeria's competitive real estate market with internationally recognized green certification.",
  },
];

function EBenefits() {
  return (
    <section className="py-20 bg-white" id="benefits-roi">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Benefits &amp; Return on Investment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            EDGE certification delivers immediate financial benefits while
            positioning your property for long-term success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* ROI Calculator */}
          <div className="bg-gradient-to-br from-green-500 to-blue-500 p-8 rounded-2xl text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Typical ROI for Office Building
            </h3>
            <div className="flex flex-col gap-6">
              {roiMetrics.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center pb-4 border-b border-white/20"
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xl font-extrabold">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-4 text-center">
              <div className="text-4xl font-extrabold mb-2">5 Months</div>
              <p className="text-lg">Average Payback Period</p>
            </div>
          </div>
          {/* Benefits List */}
          <div className="flex flex-col gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10 text-2xl flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-700 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EBenefits;
