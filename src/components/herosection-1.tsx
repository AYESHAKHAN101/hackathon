
import React from 'react';
import Image from 'next/image';
import image1 from "../../public/image1.png"
const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-yellow-200 min-h-[400px] flex items-center justify-center px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Rocket single seater
          </h1>
          <button className="text-sm font-medium text-black underline hover:text-gray-700 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/image1.png" // Ensure you place the image here
            alt="Rocket Single Seater"
            className="w-full max-w-md md:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
