import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div  className="flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-20 mb-0 bg-gray-900">
        <h1>I'm a software engineer.</h1>
      </div>
    </>
  );
};

export default HeroSection;
