import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
            Hello!
          </h1>
          <h2 className="text-indigo-400 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Welcome to my Website.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;