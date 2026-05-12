import React, { useEffect, useState } from 'react'
import heroBg from "../assets/hero-bg.jpg";

const Hero = ({ quotes }) => {

  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    if (quotes.length === 0) return;

    const interval = setInterval(() => {
      const randomId = Math.floor(Math.random() * quotes.length);

      setRandomIndex(randomId)
    }, 6000);

    return ()=>clearInterval(interval)
  }, [quotes])
  
  const quote = quotes[randomIndex]
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative mt-18"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <h1 className="max-w-3xl text-center text-white text-4xl z-10 leading-relaxed">
        "{quote?.content}"
      </h1>
      <p className="text-2xl text-gray-300 mt-4 text-center z-10">
        —— {quote?.author}
      </p>
    </div>
  );
}

export default Hero