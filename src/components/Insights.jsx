import React from "react";

const Insights = () => {
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
          Insights 🌟
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl">
          Dive deep into your daily experiences with AI-driven insights.  
          Understand patterns, uncover possibilities, and shape your future — guided by data, not destiny.  
        </p>

        {/* Glowing Orb Animation (Optional) */}
        <div className="mt-10 w-40 h-40 bg-[radial-gradient(circle,#14b8a6aa,#000)] rounded-full shadow-[0_0_20px_#14b8a6] animate-pulse mx-auto"></div>
      </div>
    </section>
  );
};

export default Insights;
