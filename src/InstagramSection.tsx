import React from 'react';

const InstagramSection: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Our Instagram
        </h2>
        {/* Subtitle */}
        <p className="text-gray-500 text-sm mb-8">
          Follow our store on Instagram
        </p>

        {/* Follow Us Button */}
        <button className="bg-white shadow-md px-6 py-2 rounded-full text-black font-medium hover:shadow-lg transition duration-300">
          Follow Us
        </button>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/Rectangle 17.png')" }}></div>
    </section>
  );
};

export default InstagramSection;
