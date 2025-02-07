import React from "react";

const ShopHero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-64 flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/shopheader.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="text-yellow-500 text-4xl mb-4">
          &#x1F3D7; {/* Placeholder for an icon */}
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800">Shop</h1>

        {/* Breadcrumb */}
        <nav className="mt-2 text-gray-600 text-sm">
          <a href="#" className="hover:text-gray-800">
            Home
          </a>
          <span className="mx-2"> &gt; </span>
          <span className="text-gray-800">Shop</span>
        </nav>
      </div>
    </section>
  );
};

export default ShopHero;
