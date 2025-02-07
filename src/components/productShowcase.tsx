import React from 'react';
import Image2 from "../../public/Mask group.png"
import Image3 from '../../public/Mask group (1).png';

interface ProductItemProps {
  title: string;
  imageSrc: string;
  alt: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ title, imageSrc, alt }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={imageSrc}
        alt={alt}
        className="w-full max-w-xs object-contain mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <a
        href="#"
        className="text-sm font-medium text-black underline hover:text-gray-600"
      >
        View More
      </a>
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center max-w-6xl mx-auto">
        {/* Product Item 1 */}
        <ProductItem
          title="Side table"
          imageSrc="/Mask group.png" // Add image to public folder
          alt="Side table"
        />

        {/* Product Item 2 */}
        <ProductItem
          title="Side table"
          imageSrc="/Mask group (1).png" // Add image to public folder
          alt="Side table"
        />
      </div>
    </section>
  );
};

export default ProductShowcase;
