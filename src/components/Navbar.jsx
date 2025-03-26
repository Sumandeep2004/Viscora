import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[rgba(0,0,20,1)] border-b border-teal-800 p-4 relative">
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

        {/* Hamburger Menu Button - Visible on Mobile */}
        <button
          className="md:hidden text-gray-300 hover:text-teal-400 focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-12 ml-auto">
          <Link
            to="/Home"
            className="text-lg font-semibold text-gray-300 hover:text-teal-400 
            transition-colors duration-300 ease-in-out transform hover:scale-110 
            relative after:absolute after:left-0 after:bottom-[-2px] 
            after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all 
            after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/manager"
            className="text-lg font-semibold text-gray-300 hover:text-teal-400 
            transition-colors duration-300 ease-in-out transform hover:scale-110 
            relative after:absolute after:left-0 after:bottom-[-2px] 
            after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all 
            after:duration-300 hover:after:w-full"
          >
            Submit Diary
          </Link>
          <Link
            to="/insights"
            className="text-lg font-semibold text-gray-300 hover:text-teal-400 
            transition-colors duration-300 ease-in-out transform hover:scale-110 
            relative after:absolute after:left-0 after:bottom-[-2px] 
            after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all 
            after:duration-300 hover:after:w-full"
          >
            Insights
          </Link>
          <Link
            to="/intellibot"
            className="text-lg font-semibold text-gray-300 hover:text-teal-400 
            transition-colors duration-300 ease-in-out transform hover:scale-110 
            relative after:absolute after:left-0 after:bottom-[-2px] 
            after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all 
            after:duration-300 hover:after:w-full"
          >
            IntelliBot 🤖
          </Link>
          <Link
            to="/Login"
            className="text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 
            px-4 py-1 rounded-full transition-all duration-300 ease-in-out 
            transform hover:scale-105 shadow-md hover:shadow-lg 
            border border-teal-400"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu - Slide in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[rgba(0,0,20,0.95)] 
          transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} 
          transition-transform duration-300 ease-in-out md:hidden z-40 
          border-l border-teal-800`}
      >
        <div className="flex flex-col items-center gap-8 pt-24">
          <Link
            to="/Home"
            className="text-lg font-semibold text-gray-300 hover:text-teal-400 
            transition-colors duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/manager"
            className="text-lg font-semibold text-gray-300 hover:text-teal-400 
            transition-colors duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setMenuOpen(false)}
          >
            Submit Diary
          </Link>
          <Link
            to="/insights"
            className="text-lg font-semibold text-gray-300 hover:text-teal-400 
            transition-colors duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setMenuOpen(false)}
          >
            Insights
          </Link>
          <Link
            to="/intellibot"
            className="text-lg font-semibold text-gray-300 hover:text-teal-400 
            transition-colors duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setMenuOpen(false)}
          >
            IntelliBot 🤖
          </Link>
          <Link
            to="/Login"
            className="text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 
            px-4 py-1 rounded-full transition-all duration-300 ease-in-out 
            transform hover:scale-105 shadow-md hover:shadow-lg 
            border border-teal-400"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>

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