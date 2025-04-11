import React from "react";

const pricingPlans = [
  {
    title: "Starter",
    price: "$19",
    features: ["Basic VR tools", "Email Support", "Limited Access"],
  },
  {
    title: "Pro",
    price: "$49",
    features: ["All Starter Features", "Advanced VR tools", "Priority Support"],
    highlight: true, // for special design
  },
  {
    title: "Enterprise",
    price: "$99",
    features: ["All Pro Features", "Custom Solutions", "Dedicated Support"],
  },
];

const PricingCard = () => {
  return (
    <div className="bg-white py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Choose Your <span className="text-orange-600">Plan</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`
              group border p-8 rounded-2xl shadow-md hover:shadow-2xl transition 
              transform hover:-translate-y-2 duration-300 ease-in-out 
              ${plan.highlight ? "border-orange-600 shadow-orange-200" : "border-gray-300"}
            `}
          >
            <h3 className="text-2xl font-semibold text-center mb-4">{plan.title}</h3>
            <p className="text-center text-4xl font-bold text-orange-600 mb-8">
              {plan.price}
              <span className="text-base text-gray-500 font-normal">/mo</span>
            </p>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center">
              <button className={`px-6 py-3 rounded-full font-semibold text-white transition 
                ${plan.highlight ? "bg-orange-600 hover:bg-orange-700" : "bg-gray-800 hover:bg-gray-900"}`}>
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
