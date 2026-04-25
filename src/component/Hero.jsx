import React from 'react'
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <div
      className="h-screen bg-contain bg-center flex items-center justify-center relative mt-18"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <h1 className="relative text-white text-5xl z-10 leading-relaxed">
        " If you never try, <br />
        you'll never know. "<br />
        <p className="relative text-2xl text-gray-400 mt-4 text-center z-10">
          — Start building today
        </p>
      </h1>
    </div>
  );
}

export default Hero