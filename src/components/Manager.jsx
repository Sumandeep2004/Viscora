import React, { useEffect, useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

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
  const [reflections, setReflections] = useState([]);

  useEffect(() => {
    setDate(new Date().toISOString().split("T")[0]);
    const savedReflections = localStorage.getItem("reflections");
    if (savedReflections) {
      setReflections(JSON.parse(savedReflections));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !mood || !entry || !message) {
      toast.error("Please fill all fields!");
      return;
    }

    const newReflection = {
      id: uuidv4(),
      date,
      mood,
      entry,
      message,
    };

    const updatedReflections = [...reflections, newReflection];
    setReflections(updatedReflections);
    localStorage.setItem("reflections", JSON.stringify(updatedReflections));

    notify(); // Show the toast
    setMood("");
    setEntry("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative text-white">
      <ToastContainer />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#22d3ee22_1px,#000a1f_1px)] bg-[size:24px_24px] opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_20%,#0f6e8220,#000000)]" />
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center px-4 pt-16 pb-12">
        <header className="w-full max-w-3xl flex flex-col items-center space-y-6 mb-12">
          <img
            src="src/assets/viscora.svg"
            alt="Viscora Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#14b8a688]"
          />
          <h1 className="text-teal-300 text-2xl sm:text-3xl font-light tracking-wide">
            Your Daily Reflection
          </h1>
        </header>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-[#020617]/95 backdrop-blur-2xl rounded-2xl border border-teal-900/40 shadow-lg p-6 sm:p-8"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-teal-400 text-sm font-medium">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#0f172a]/80 text-teal-200 border border-teal-800/40 rounded-lg px-4 py-3"
              />
            </div>
            <div>
              <label className="block text-teal-400 text-sm font-medium">
                Current Mood
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full bg-[#0f172a]/80 text-teal-200 border border-teal-800/40 rounded-lg px-4 py-3"
              >
                <option value="">Select mood</option>
                <option value="😊 Happy">😊 Happy</option>
                <option value="😔 Sad">😔 Sad</option>
                <option value="😠 Angry">😠 Angry</option>
                <option value="😌 Calm">😌 Calm</option>
                <option value="😕 Confused">😕 Confused</option>
                <option value="😩 Frustrated">😩 Frustrated</option>
                <option value="😴 Exhausted">😴 Exhausted</option>
                <option value="😐 Normal">😐 Normal</option>
              </select>
            </div>

            <div>
              <label className="block text-teal-400 text-sm font-medium">
                Reflection Entry
              </label>
              <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                rows={4}
                className="w-full bg-[#0f172a]/80 text-teal-200 border border-teal-800/40 rounded-lg px-4 py-3"
                placeholder="Write your thoughts..."
              />
            </div>
            <div>
              <label className="block text-teal-400 text-sm font-medium">
                Message to Self
              </label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#0f172a]/80 text-teal-200 border border-teal-800/40 rounded-lg px-4 py-3"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-teal-600 hover:bg-teal-500 text-white font-medium py-2 px-6 rounded-lg transition"
            >
              Save Reflection
            </button>
          </div>
        </form>

        {/* Display Saved Reflections */}
        <div className="w-full max-w-4xl mt-10">
          <h2 className="text-xl text-teal-400 mb-4">Saved Reflections</h2>
          {reflections.length === 0 ? (
            <p className="text-gray-400">No reflections saved yet.</p>
          ) : (
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="text-teal-500 border-b border-teal-700">
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Mood</th>
                  <th className="py-2 px-4">Entry</th>
                  <th className="py-2 px-4">Message</th>
                </tr>
              </thead>
              <tbody>
                {reflections.map((r) => (
                  <tr key={r.id} className="border-b border-teal-800">
                    <td className="py-2 px-4">{r.date}</td>
                    <td className="py-2 px-4">{r.mood}</td>
                    <td className="py-2 px-4">{r.entry}</td>
                    <td className="py-2 px-4">{r.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default Manager;
