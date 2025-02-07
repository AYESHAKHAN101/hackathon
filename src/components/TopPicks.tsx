import React from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  imageSrc: string;
  alt: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageSrc, alt }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={imageSrc}
        alt={alt}
        className="w-full max-w-[150px] object-contain mb-4"
      />
      <h3 className="text-sm md:text-base font-medium text-gray-800">{title}</h3>
      <p className="text-lg font-semibold text-black mt-2">{price}</p>
    </div>
  );
};

const TopPicks: React.FC = () => {
  return (
    <section className="py-12 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black">Top Picks For You</h2>
          <p className="text-gray-500 mt-2">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center justify-items-center">
          <ProductCard
            title="Trenton modular sofa_3"
            price="Rs. 25,000.00"
            imageSrc="/Group 18.png"
            alt="Trenton modular sofa"
          />
          <ProductCard
            title="Granite dining table with dining chair"
            price="Rs. 25,000.00"
            imageSrc="/mainchairs.png"
            alt="Granite dining table"
          />
          <ProductCard
            title="Outdoor bar table and stool"
            price="Rs. 25,000.00"
            imageSrc="/Mask group (3).png"
            alt="Outdoor bar table"
          />
          <ProductCard
            title="Plain console with teak mirror"
            price="Rs. 25,000.00"
            imageSrc="/maintable.png"
            alt="Plain console with mirror"
          />
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-black text-sm font-medium underline hover:text-gray-600 transition"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
