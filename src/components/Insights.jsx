import React, { useEffect, useState } from "react";
import axios from "axios";

const Insights = () => {
  const [reflections, setReflections] = useState([]);
  const [aiGuide, setAiGuide] = useState("Generating your AI-guided path...");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reflections")) || [];
    setReflections(saved);

    // Prepare reflections prompt for Gemini
    const reflectionsText = saved
      .map(
        (item) =>
          `Date: ${item.date}\nMood: ${item.mood}\nEntry: ${item.entry}\nMessage: ${item.message}\n`
      )
      .join("\n");

    const prompt = `Considering all the entries date-wise:\n\n${reflectionsText}\n\nIn a very short paragraph, generate a motivational guide for the future.`;

    // Gemini API call
    const fetchAIInsight = async () => {
      try {
        const response = await axios.post(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAGgB0TYEpdeK8mt5XGZJgbUp_sQATBMD4",
          {
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const aiText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
        setAiGuide(aiText || "Couldn't fetch AI insights.");
      } catch (error) {
        console.error("Error fetching AI insight:", error);
        setAiGuide("AI insight unavailable at the moment.");
      }
    };

    fetchAIInsight();
  }, []);

  return (
    <section className="min-h-screen px-6 py-12 text-gray-300 relative bg-[#000000] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#22d3ee22_1px,#000a1f_1px)] bg-[size:22px_22px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_20%,#0f6e8225,#000)]"></div>
      </div>

      {/* Header & AI Insight */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold text-teal-400 drop-shadow-[0_0_15px_#14b8a6] animate-pulse">
          Insights 🌟
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Dive into your reflections, and let AI guide your next steps.
        </p>

        {/* AI-Generated Motivation */}
        <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-teal-900/50 to-black shadow-[0_0_25px_#14b8a6] border border-teal-700 text-teal-300 text-lg animate-fade-in">
          <h2 className="text-2xl font-semibold mb-3">🔮 AI-Generated Guide:</h2>
          <p>{aiGuide}</p>
        </div>
      </div>

      {/* Reflections List */}
      <div className="relative z-10 max-w-4xl mx-auto mt-12 grid gap-6">
        {reflections.length === 0 ? (
          <p className="text-center text-gray-400">No reflections yet.</p>
        ) : (
          reflections
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((item, index) => (
              <div
                key={index}
                className="border border-teal-800 rounded-lg p-5 bg-[#0b0f14] shadow-[0_0_15px_#0f766e] transition-all hover:scale-[1.01]"
              >
                <h3 className="text-lg text-teal-400 font-bold">{item.date}</h3>
                <p className="text-sm text-teal-200 mb-2">Mood: {item.mood}</p>
                <p className="text-base italic mb-2 text-gray-300">“{item.entry}”</p>
                <p className="text-sm text-teal-500">💡 Message: {item.message}</p>
              </div>
            ))
        )}
      </div>
    </section>
  );
};

export default Insights;
