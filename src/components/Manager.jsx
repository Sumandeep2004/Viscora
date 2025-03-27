import React, { useEffect, useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";


const notify = () => {
  toast("Reflection saved successfully! ✔️ ", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    style: {
      background: "#020617", 
      color: "#14b8a6", 
      border: "1px solid #14b8a6", 
      fontSize: "16px",
      boxShadow: "0 0 15px rgba(20, 184, 166, 0.5)", 
    },
    progressStyle: {
      background: "#14b8a6", 
    },
  });
};

const Manager = () => {
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("");
  const [entry, setEntry] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", { date, mood, entry, message });
    notify(); // Show the toast notification
  };

  return (
    <div className="min-h-screen bg-[#000000] overflow-hidden relative">
      {/* Enhanced Background Styling */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#22d3ee22_1px,#000a1f_1px)] bg-[size:24px_24px] opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_20%,#0f6e8220,#000000)]" />
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Header Section */}
        <header className="w-full max-w-3xl flex flex-col items-center space-y-6 mb-12">
          <img
            src="src/assets/viscora.svg"
            alt="Viscora Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover 
                       transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#14b8a688]"
          />
          <h1 className="text-teal-300 text-2xl sm:text-3xl font-light tracking-wide">
            Your Daily Reflection
          </h1>
        </header>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-[#020617]/95 backdrop-blur-2xl rounded-2xl 
                     border border-teal-900/40 shadow-[0_10px_40px_rgba(20,184,166,0.1)] 
                     p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_10px_50px_rgba(20,184,166,0.15)]"
        >
          <div className="space-y-8">
            {/* Date Input */}
            <div className="space-y-2">
              <label className="block text-teal-400 text-sm font-medium tracking-wide">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#0f172a]/80 text-teal-200 border border-teal-800/40 
                          rounded-lg px-4 py-3 transition-all duration-200 
                          focus:outline-none focus:border-teal-600 focus:ring-2 
                          focus:ring-teal-500/20 hover:border-teal-700/60"
              />
            </div>

            {/* Mood Selection */}
            <div className="space-y-2">
              <label className="block text-teal-400 text-sm font-medium tracking-wide">
                Current Mood
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full bg-[#0f172a]/80 text-teal-200 border border-teal-800/40 
                          rounded-lg px-4 py-3 transition-all duration-200 
                          focus:outline-none focus:border-teal-600 focus:ring-2 
                          focus:ring-teal-500/20 hover:border-teal-700/60 appearance-none"
              >
                <option value="">Select your mood</option>
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

            {/* Diary Entry */}
            <div className="space-y-2">
              <label className="block text-teal-400 text-sm font-medium tracking-wide">
                Diary Entry
              </label>
              <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                rows="6"
                className="w-full bg-[#0f172a]/80 text-teal-200 border border-teal-800/40 
                          rounded-lg px-4 py-3 transition-all duration-200 
                          focus:outline-none focus:border-teal-600 focus:ring-2 
                          focus:ring-teal-500/20 hover:border-teal-700/60 resize-y"
                placeholder="Reflect on your day..."
              ></textarea>
            </div>

            {/* Message to Self */}
            <div className="space-y-2">
              <label className="block text-teal-400 text-sm font-medium tracking-wide">
                Today's Message to Yourself
              </label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#0f172a]/80 text-teal-200 border border-teal-800/40 
                          rounded-lg px-4 py-3 transition-all duration-200 
                          focus:outline-none focus:border-teal-600 focus:ring-2 
                          focus:ring-teal-500/20 hover:border-teal-700/60"
                placeholder="A kind word for yourself..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full relative group overflow-hidden rounded-xl 
                        bg-teal-900/20 border border-teal-800/40 py-3 px-6 
                        transition-all duration-300 hover:bg-teal-900/30 
                        hover:border-teal-600/60 focus:outline-none 
                        focus:ring-2 focus:ring-teal-500/40"
            >
              <div
                className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#14b8a6_50%,#0f172a_100%)] 
                          opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-spin-slow"
              />
              <span className="relative text-teal-300 font-medium tracking-wide">
                Save Reflection
              </span>
            </button>
          </div>
        </form>
        <ToastContainer />
      </main>
    </div>
  );
};

export default Manager;
