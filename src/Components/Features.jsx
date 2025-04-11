import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaVrCardboard, FaLightbulb } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaRocket size={40} />,
      title: "Launch Faster",
      desc: "Quickly build and deploy your VR experiences with ready-to-use tools.",
    },
    {
      icon: <FaVrCardboard size={40} />,
      title: "Seamless VR Integration",
      desc: "Easily integrate VR technology into your apps with our SDKs.",
    },
    {
      icon: <FaLightbulb size={40} />,
      title: "Innovate Freely",
      desc: "Bring your creative ideas to life without limits using cutting-edge tools.",
    },
  ];

  return (
    <div className="relative bg-white py-20 px-6">
      {/* Simple Background (No gradient) */}

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Discover Our <span className="text-orange-600">Features</span>
      </h2>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 shadow-md rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="text-orange-600 mb-6">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
