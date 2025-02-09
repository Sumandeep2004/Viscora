import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 bg-[rgba(0,10,20,0.85)] border-b border-teal-800 
      p-4 shadow-lg backdrop-blur-xl"
    >
      {/* Navbar Content - Flex Container */}
      <div className="flex justify-between items-center max-w-6xl mx-auto w-full px-6">
        
        {/* Logo / Brand Name */}
        <div className="text-3xl font-bold relative bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-800 via-blue-400 to-teal-500 
          animate-[pulse_2s_infinite] drop-shadow-[0_0_10px_#14b8a6aa] 
          transition-all duration-300 ease-in-out 
          hover:text-white hover:drop-shadow-[0_0_20px_#14b8a6aa]"
        >
          Viscora ✨
        </div>

        {/* Hamburger Menu Button - Only Visible on Mobile */}
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

        {/* Navigation Links */}
        <div className="hidden md:flex gap-12 justify-center flex-grow">
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
            About
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-300 hover:text-teal-400 
            transition-colors duration-300 ease-in-out transform hover:scale-110 
            relative after:absolute after:left-0 after:bottom-[-2px] 
            after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all 
            after:duration-300 hover:after:w-full"
          >
            Team Viscora
          </a>
        </div>

        
        {/* <div className="hidden md:flex ml-auto items-center">
          <img
            src="src/assets/viscora.svg"
            alt="Viscora Logo"
            className="w-[90px] h-[90px] rounded-full transition-all duration-300 
              hover:scale-110 hover:shadow-[0_0_20px_#14b8a6aa]"
          />
        </div> */}
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[rgba(0,10,20,0.95)] py-4 shadow-xl">
          <div className="flex flex-col items-center gap-6">
            <a href="/" className="text-lg font-semibold text-gray-300 hover:text-teal-400 transition-colors duration-300">
              Home
            </a>
            <a href="#" className="text-lg font-semibold text-gray-300 hover:text-teal-400 transition-colors duration-300">
              About
            </a>
            <a href="#" className="text-lg font-semibold text-gray-300 hover:text-teal-400 transition-colors duration-300">
              Team Viscora
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
