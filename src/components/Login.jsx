import React from "react";

const Login = () => {
  // Placeholder functions for handling login (in future it would be replaced with real auth logic)
  const handleGoogleSignIn = () => {
    console.log("Google Sign-In Clicked!");
    // Add Google Sign-In logic here
  };

  const handleGitHubSignIn = () => {
    console.log("GitHub Sign-In Clicked!");
    // Add GitHub Sign-In logic here
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-gray-300 relative bg-[#000000] overflow-hidden">
      {/* Background Styling */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#22d3ee22_1px,#000a1f_1px)] bg-[size:22px_22px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_20%,#0f6e8225,#000)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-md bg-[rgba(0,10,20,0.95)] p-8 rounded-lg shadow-lg border border-teal-800">
        {/* Header */}
        <h1 className="text-4xl font-bold text-teal-400 drop-shadow-[0_0_15px_#14b8a6] animate-[pulse_5s_infinite]">
          Welcome to Viscora ✨
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg">Sign in to unveil personalized AI insights and start your journey!</p>

        {/* Sign-In Buttons */}
        <div className="mt-8 space-y-4">
          {/* Google Sign-In */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 text-lg font-medium text-white bg-gray-700 rounded-lg 
                      hover:bg-red-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google Icon" className="w-6 h-6" />
            Sign in with Google
          </button>

          {/* GitHub Sign-In */}
          <button
            onClick={handleGitHubSignIn}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 text-lg font-medium text-white bg-gray-700 rounded-lg 
                      hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub Icon" className="w-6 h-6" />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
