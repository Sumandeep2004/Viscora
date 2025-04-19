import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
} from "recharts";

const Insights = () => {
  const [reflections, setReflections] = useState([]);
  const [aiGuide, setAiGuide] = useState("Gazing into your future...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const moodValues = {
    "Very Happy": 5,
    Happy: 4,
    Neutral: 3,
    Sad: 2,
    "Very Sad": 1,
  };

  const COLORS = ["#14b8a6", "#22d3ee", "#2dd4bf", "#0d9488", "#0f766e"];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reflections")) || [];
    const sortedReflections = saved.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setReflections(sortedReflections);
    setLoading(true);

    const reflectionsText = sortedReflections
      .map(
        (item) =>
          `Date: ${item.date}\nMood: ${item.mood}\nEntry: ${item.entry}\nMessage: ${item.message}\n`
      )
      .join("\n");

    const prompt = `Based on the following past reflections:\n\n${reflectionsText}\n\nAnalyze patterns in mood and content, then suggest specific, actionable steps for future planning in a polite and motivational tone, assuming you are a crystal ball. Provide a concise guide in a short essay consisting of 5 short paragraphs. 

Each paragraph should:

- START with a **bold phrase using emoji** summarizing the paragraph’s key idea and start explanation from next line if possible in different font.
- Use **CAPITAL LETTERS** to highlight important concepts or advice.
- Use line spacing (line breaks) between paragraphs to enhance readability.

Keep the tone magical related to future advise with polite tone, reflective, and empowering.`;

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
        const aiText =
          response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
        setAiGuide(aiText || "The crystal ball is cloudy—try again later.");
      } catch (error) {
        console.error("Error fetching AI insight:", error);
        setError("Unable to peer into the future right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchAIInsight();
  }, []);

  const chartData = useMemo(() => {
    return reflections
      .filter((item) => moodValues[item.mood] !== undefined)
      .map((item) => ({
        date: new Date(item.date),
        mood: moodValues[item.mood],
      }));
  }, [reflections]);

  const moodDistribution = useMemo(() => {
    const moodCounts = reflections.reduce((acc, item) => {
      acc[item.mood] = (acc[item.mood] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(moodCounts).map(([mood, count]) => ({
      name: mood,
      value: count,
    }));
  }, [reflections]);

  const scatterData = useMemo(() => {
    return reflections
      .filter((item) => moodValues[item.mood] !== undefined)
      .map((item) => ({
        entryLength: item.entry.length,
        mood: moodValues[item.mood],
        date: item.date,
      }));
  }, [reflections]);

  // Save reflections and insights as a simple text file
  const saveInsightsAsText = () => {
    const reflectionsText = reflections
      .map(
        (item) =>
          `Date: ${item.date}\nMood: ${item.mood}\nEntry: ${item.entry}\nMessage: ${item.message}\n`
      )
      .join("\n");

    const content = `
    Crystal Ball Insights 🌟

    Reflections:
    ${reflectionsText}

    AI Guide:
    ${aiGuide}
    `;

    const fileBlob = new Blob([content], {
      type: "text/plain",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(fileBlob);
    link.download = "reflections_and_insights.txt";
    link.click();
  };

  return (
    <section className="min-h-screen px-6 py-12 text-gray-300 relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#22d3ee22_1px,#000a1f_1px)] bg-[size:22px_22px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_20%,#0f6e8225,#000)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold text-teal-400 drop-shadow-[0_0_15px_#14b8a6] animate-pulse">
          Crystal Ball Insights 🔮
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Peer into your past to shape a brilliant future with AI guidance.
        </p>

        <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-teal-900/50 to-black shadow-[0_0_25px_#14b8a6] border border-teal-700 text-lg leading-relaxed animate-fade-in">
          <h2 className="text-2xl font-semibold mb-3 text-teal-300">
            🌟 Your Future Path:
          </h2>
          {loading ? (
            <p className="text-teal-100">Loading insights...</p>
          ) : error ? (
            <p className="text-red-400">{error}</p>
          ) : (
            <div className="prose prose-invert prose-teal whitespace-pre-wrap max-w-none">
              <ReactMarkdown>{aiGuide}</ReactMarkdown>
            </div>
          )}
        </div>

        {chartData.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-3 text-teal-400">
              Mood Trends Over Time
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) => date.toLocaleDateString()}
                />
                <YAxis domain={[1, 5]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mood" stroke="#14b8a6" />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-400 mt-2">
              Scale: 5=Very Happy, 4=Happy, 3=Neutral, 2=Sad, 1=Very Sad
            </p>
          </div>
        )}

        {moodDistribution.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-3 text-teal-400">
              Mood Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={moodDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {moodDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        {scatterData.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-3 text-teal-400">
              Entry Length vs Mood
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid />
                <XAxis
                  type="number"
                  dataKey="entryLength"
                  name="Entry Length"
                  unit="chars"
                />
                <YAxis
                  type="number"
                  dataKey="mood"
                  name="Mood"
                  domain={[1, 5]}
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="Reflections" data={scatterData} fill="#14b8a6" />
              </ScatterChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-400 mt-2">
              Scale: 5=Very Happy, 4=Happy, 3=Neutral, 2=Sad, 1=Very Sad
            </p>
          </div>
        )}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-teal-400 mb-4">
          Your Reflections
        </h2>
        <div className="grid gap-6">
          {reflections.length === 0 ? (
            <p className="text-center text-gray-400">
              No reflections yet—start today to see your future unfold.
            </p>
          ) : (
            reflections.map((item, index) => (
              <div
                key={index}
                className="border border-teal-800 rounded-lg p-5 bg-[#0b0f14] shadow-[0_0_15px_#0f766e] transition-all hover:scale-[1.01]"
              >
                <h3 className="text-lg text-teal-400 font-bold">{item.date}</h3>
                <p className="text-sm text-teal-200 mb-2">Mood: {item.mood}</p>
                <p className="text-base italic mb-2 text-gray-300">
                  “{item.entry}”
                </p>
                <p className="text-sm text-teal-500">
                  💡 Message: {item.message}
                </p>
              </div>
            ))
          )}
        </div>

        <br />
        <div className="mt-12 text-sm text-gray-500">
          <p>
            🔒 <strong>Privacy Notice:</strong> This application does not store
            any of your reflections. All your data remains private to your
            browser. If you wish to save your insights, you can do so by
            clicking the button below.
          </p>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto mt-6 text-center">
          <button
            onClick={saveInsightsAsText}
            className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md shadow-md transition-all"
          >
            💾 Save as Text File
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
