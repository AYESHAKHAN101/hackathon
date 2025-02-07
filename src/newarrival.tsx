import React from 'react';
import Image from 'next/image';
import Asgaaard from "../public/Asgaard sofa 1.png"

const NewArrivals: React.FC = () => {
  return (
    <section className="bg-yellow-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left - Image */}
        <div className="w-full md:w-2/3 flex justify-center">
          <img
            src="/Asgaard sofa 1.png" // Add your image here
            alt="Asgaard sofa"
            className="w-full max-w-lg object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 text-center md:text-left">
          <p className="text-gray-500 text-sm mb-2">New Arrivals</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Asgaard sofa
          </h1>
          <button className="border border-gray-800 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
