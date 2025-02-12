import React from "react";

const Footer = () => {
  return (
<>
<footer className="w-full py-6 text-center text-teal-300 text-sm bg-[radial-gradient(#22d3ee22_1px,#000a1f_1px)] border-t border-teal-900/50 shadow-lg">
<h1 className="text-center text-xl sm:text-xl md:text-xl font-medium text-teal-400 tracking-wide drop-shadow-[0_0_15px_#14b8a6] px-4 animate-[pulse_5s_infinite]">
            Unveiling the Right Choices from Daily Experiences
          </h1>
      <p className="mt-5">&copy; {new Date().getFullYear()} Viscora. All Rights Reserved.</p>
    </footer></>
  );
};
export default Footer;