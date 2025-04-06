import React from "react";
import { aboutText } from "../data/about";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-400 mb-8 text-center">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide">
          {aboutText}
        </p>
      </div>
    </div>
  );
};

export default AboutPage;