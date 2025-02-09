import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[rgba(0,0,20,1)] border-b border-teal-800 
      p-4"
    >
      {/* Navbar Content - Flex Container */}
      <div className="flex justify-between items-center max-w-6xl mx-auto w-full px-6">
        
        {/* Brand Name - Aligned Left */}
        <div className="text-3xl font-bold relative bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-800 via-blue-400 to-teal-500 
          animate-[pulse_5s_infinite] drop-shadow-[0_0_10px_#14b8a6aa] 
          transition-all duration-300 ease-in-out 
          hover:text-white hover:drop-shadow-[0_0_20px_#14b8a6aa]"
        >
          Viscora ✨
        </div>

        {/* Navigation Links - Aligned Right */}
        <div className="hidden md:flex items-center gap-12 ml-auto">
          <a
            href="/"
            className="text-lg font-semibold text-gray-300 hover:text-teal-400 
            transition-colors duration-300 ease-in-out transform hover:scale-110 
            relative after:absolute after:left-0 after:bottom-[-2px] 
            after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all 
            after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-300 hover:text-teal-400 
            transition-colors duration-300 ease-in-out transform hover:scale-110 
            relative after:absolute after:left-0 after:bottom-[-2px] 
            after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all 
            after:duration-300 hover:after:w-full"
          >
            Insights
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-300 hover:text-teal-400 
            transition-colors duration-300 ease-in-out transform hover:scale-110 
            relative after:absolute after:left-0 after:bottom-[-2px] 
            after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all 
            after:duration-300 hover:after:w-full"
          >
            IntelliBot 🤖
          </a>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[rgba(0,10,20,0.95)] py-4 shadow-xl">
          <div className="flex flex-col items-center gap-6">
            <a href="/" className="text-lg font-semibold text-gray-300 hover:text-teal-400 transition-colors duration-300">
              Home
            </a>
            <a href="#" className="text-lg font-semibold text-gray-300 hover:text-teal-400 transition-colors duration-300">
              Insights
            </a>
            <a href="#" className="text-lg font-semibold text-gray-300 hover:text-teal-400 transition-colors duration-300">
              IntelliBot 🤖 
            </a>
          </div>
        </div>
      )}

      {/* Subtle Neon Glow Under Navbar */}
      <div
        className="absolute bottom-0 left-1/2 w-[60%] h-[2px] 
          bg-gradient-to-r from-transparent via-teal-500 to-transparent 
          -translate-x-1/2 opacity-50"
      ></div>
    </nav>
  );
};

export default Navbar;
