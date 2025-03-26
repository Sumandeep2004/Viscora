import React from "react";
import { Link } from "react-router-dom";

const IntelliBot = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-gray-300 relative bg-[#000000] overflow-hidden">
      {/* Background Styling */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#22d3ee22_1px,#000a1f_1px)] bg-[size:22px_22px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_20%,#0f6e8225,#000)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-teal-400 drop-shadow-[0_0_15px_#14b8a6] animate-[pulse_5s_infinite]">
          IntelliBot 🤖
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl">
          Your AI companion, designed to decode life’s choices and light the path ahead with the power of Machine Learning.  
          No vague prophecies, no crystal balls — just pure data-driven clarity.  
        </p>

        {/* Glowing Orb Animation (Optional) */}
        <div className="mt-10 w-40 h-40 bg-[radial-gradient(circle,#14b8a6aa,#000)] rounded-full shadow-[0_0_20px_#14b8a6] animate-pulse mx-auto"></div>

        {/* Call-to-Action (Optional) */}
        <Link
          to="/intellibot"
          className="mt-8 inline-block px-6 py-3 text-lg font-medium text-white bg-teal-500 rounded-lg 
                    hover:bg-teal-400 transition-all duration-300 shadow-md hover:shadow-lg 
                    transform hover:scale-105"
        >
          Chat with IntelliBot
        </Link>
      </div>
    </section>
  );
};

export default IntelliBot;
