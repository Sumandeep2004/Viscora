import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen relative bg-[#000000] overflow-hidden">
      {/* Background Styling */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#22d3ee22_1px,#000a1f_1px)] bg-[size:22px_22px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_20%,#0f6e8225,#000)]" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center pt-12 sm:pt-12 md:pt-22 px-4 sm:px-6">
        {/* Logo & Header Section */}
        <header className="w-full max-w-2xl flex flex-col items-center space-y-4 mb-8 sm:mb-12">
          <img
            src="src/assets/viscora.svg"
            alt="Viscora Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_#14b8a6aa]"
          />
          <h1 className="text-center text-xl sm:text-xl md:text-3xl font-medium text-teal-400 tracking-wide drop-shadow-[0_0_15px_#14b8a6] px-4 animate-[pulse_5s_infinite]">
            Unveiling the Right Choices from Daily Experiences
          </h1>
        </header>

        {/* Vision Section */}
        <section className="w-full max-w-4xl text-center text-gray-300 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 drop-shadow-[0_0_15px_#14b8a6]">
            Our Vision 🌟
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            Viscora is dedicated to guiding individuals through self-discovery
            and decision-making. We believe in harnessing the power of
            technology to help people make better life choices, understand their
            potential, and navigate personal and professional growth.
          </p>
        </section>

        {/* Purpose Section */}
        <section className="w-full max-w-4xl mt-10 text-center text-gray-300 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 drop-shadow-[0_0_15px_#14b8a6]">
            Our Mission Unveiled 💡
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            Let’s face it — navigating life’s crossroads isn’t always a breeze.
            Some seek answers in the cosmos, flipping through star charts,
            chatting with celestial whisperers, or chasing those elusive “gut
            feelings.” Others lean on cosmic guides claiming planetary patterns
            hold the keys to tomorrow. But we? We’re wired differently — we bet
            on the brilliance of Machine Learning. 🤖
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            Forget gazing into mystical orbs! We harness razor-sharp algorithms,
            insights carved from data, and a sprinkle of AI wizardry (the
            tangible kind) to light your path. Discover your strengths, unearth
            your purpose, and make decisions that vibe with you — all rooted in
            pure science. No guesswork, no hocus-pocus — just clarity, courage,
            and a roadmap to thrive.
          </p>
        </section>

        {/* Call to Action */}
        <div className="mt-12">
          <Link
            to="/insights"
            className="px-8 py-3 text-lg font-semibold bg-teal-500 text-gray-900 rounded-lg shadow-lg hover:bg-teal-400 transition-all duration-300"
          >
            Discover Your Path 🚀
          </Link>
        </div>
        <br />
      </main>
    </div>
  );
};

export default Home;
