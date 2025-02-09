import React from "react";

const Manager = () => {
  return (
    <div className="min-h-screen relative bg-[#000000] overflow-hidden">
      {/* Background Styling */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#22d3ee22_1px,#000a1f_1px)] bg-[size:22px_22px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_20%,#0f6e8225,#000)]" />
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6">
        {/* Logo & Header Section */}
        <header className="w-full max-w-2xl flex flex-col items-center space-y-4 mb-8 sm:mb-12">
          <img
            src="src/assets/viscora.svg"
            alt="Viscora Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full transition-all duration-300 
              hover:scale-110 hover:shadow-[0_0_20px_#14b8a6aa]"
          />
          <h1 className="text-center text-xl sm:text-xl md:text-3xl font-medium text-teal-400 
            tracking-wide drop-shadow-[0_0_15px_#14b8a6] px-4 animate-pulse">
            Unveiling the Right Choices from Daily Experiences
          </h1>
        </header>

        {/* Diary Form Section */}
        <section className="w-full max-w-2xl bg-[#020617]/90 backdrop-blur-xl rounded-xl shadow-2xl 
          border border-teal-900/50 p-6 sm:p-8 space-y-6">
          {/* Form Fields */}
          <div className="space-y-6">
            {/* Date Input */}
            <div className="space-y-2">
              <label className="block text-teal-400 text-sm font-medium">Date</label>
              <input 
                type="date" 
                className="w-full bg-[#0f172a]/90 text-teal-300 border-2 border-teal-800/50 rounded-lg 
                          px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30
                          transition-all duration-200 placeholder-teal-600" 
              />
            </div>

            {/* Diary Entry */}
            <div className="space-y-2">
              <label className="block text-teal-400 text-sm font-medium">Diary Entry</label>
              <textarea 
                rows="5" 
                className="w-full bg-[#0f172a]/90 text-teal-300 border-2 border-teal-800/50 rounded-lg 
                          px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30
                          transition-all duration-200 placeholder-teal-600" 
                placeholder="Write about your day..."
              />
            </div>

            {/* Mood Selection */}
            <div className="space-y-2">
              <label className="block text-teal-400 text-sm font-medium">Current Mood</label>
              <select 
                className="w-full bg-[#0f172a]/90 text-teal-300 border-2 border-teal-800/50 rounded-lg 
                          px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30
                          transition-all duration-200"
              >
                <option>Happy 😊</option>
                <option>Sad 😢</option>
                <option>Excited 🎉</option>
                <option>Angry 😠</option>
                <option>Relaxed 😌</option>
                <option>Motivated 💪</option>
                <option>Stressed 😖</option>
                <option>Neutral 🥱</option>
              </select>
            </div>

            {/* Self Message */}
            <div className="space-y-2">
              <label className="block text-teal-400 text-sm font-medium">
                Today's Message to Yourself
              </label>
              <input 
                type="text" 
                className="w-full bg-[#0f172a]/90 text-teal-300 border-2 border-teal-800/50 rounded-lg 
                          px-4 py-3 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30
                          transition-all duration-200 placeholder-teal-600" 
                placeholder="Your personal encouragement..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full relative group overflow-hidden rounded-xl bg-teal-900/30 
            border border-teal-800/50 hover:border-teal-500/50 transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-teal-500/50">
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#14b8a6_50%,#0f172a_100%)] 
              opacity-0 group-hover:opacity-30 animate-spin-slow transition-opacity duration-300" />
            <div className="relative flex items-center justify-center px-8 py-4 backdrop-blur-lg">
              <span className="text-sm font-medium text-teal-300/90">
                Submit
              </span>
            </div>
          </button>
        </section>
      </main>
    </div>
  );
};

export default Manager;