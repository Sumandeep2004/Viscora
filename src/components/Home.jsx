import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#000000] overflow-hidden relative">
      {/* Enhanced Background Styling */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#22d3ee22_1px,#000a1f_1px)] bg-[size:24px_24px] opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_20%,#0f6e8220,#000000)]" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        {/* Logo & Header Section */}
        <header className="w-full max-w-3xl flex flex-col items-center space-y-6 mb-12 sm:mb-16">
          <img
            src="src/assets/viscora.svg"
            alt="Viscora Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover 
                       transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#14b8a688]"
          />
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-light text-teal-300 
                        tracking-wider drop-shadow-[0_0_12px_#14b8a655] px-4 animate-[pulse_4s_infinite]">
            Turning Daily Moments into Smarter Choices
          </h1>
        </header>

        {/* Vision Section */}
        <section className="w-full max-w-4xl text-center text-gray-200 space-y-8 mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 
                         drop-shadow-[0_0_10px_#14b8a644] tracking-wide">
            Our Vision 🌟
          </h2>
          <div className="text-base sm:text-lg leading-loose max-w-3xl mx-auto space-y-4">
            <p>
              At Viscora, we’re all about <span className="text-teal-300 font-medium">helping you grow</span>—one step at a time.
            </p>
            <p>
              Using cutting-edge tech, we guide you to <span className="text-teal-300 font-medium">uncover your strengths</span>, 
              make confident decisions, and shape a life that feels truly yours.
            </p>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="w-full max-w-4xl text-center text-gray-200 space-y-8 mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 
                         drop-shadow-[0_0_10px_#14b8a644] tracking-wide">
            Our Mission Unveiled 💡
          </h2>
          <div className="text-base sm:text-lg leading-loose max-w-3xl mx-auto space-y-6">
            <p>
              Life’s tricky moments? We get it—they can feel overwhelming. 
              Some turn to star signs or gut vibes for answers. 
              But here’s where we stand out: 
              <span className="text-teal-300 font-medium"> we trust in the power of AI</span>. 🤖
            </p>
            <p>
              No crystal balls needed. 
              We use <span className="text-teal-300 font-medium">smart algorithms of machine learning </span> 
              to light the way —helping you find clarity, tap into your purpose, 
              and make choices that stick. <br />
              <span className="italic text-teal-200">  -Science over guesswork.</span>
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-12">
          <Link
            to="/manager"
            className="relative group inline-block px-8 py-4 text-lg font-medium 
                       bg-teal-600 text-gray-900 rounded-xl shadow-[0_5px_20px_rgba(20,184,166,0.3)] 
                       transition-all duration-300 hover:bg-teal-500 hover:shadow-[0_5px_25px_rgba(20,184,166,0.5)] 
                       focus:outline-none focus:ring-2 focus:ring-teal-400/50"
          >
            <span className="relative z-10 tracking-wide">Start Your Journey 🚀</span>
            <div
              className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#14b8a6_0%,#0f172a_50%,#14b8a6_100%)] 
                         opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-spin-slow"
            />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;