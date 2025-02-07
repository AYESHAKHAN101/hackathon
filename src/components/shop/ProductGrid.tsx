import React from "react";

interface ProductItemProps {
  title: string;
  price: string;
  imageSrc: string;
  alt: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ title, price, imageSrc, alt }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      {/* Product Image */}
      <img
        src={imageSrc}
        alt={alt}
        className="w-32 h-32 object-contain mb-2"
      />
      {/* Product Title */}
      <h3 className="text-sm font-medium text-gray-800">{title}</h3>
      {/* Product Price */}
      <p className="text-lg font-bold text-gray-900">{price}</p>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  const products = [
    { title: "Trenton modular sofa_3", price: "Rs. 25,000.00", imageSrc: "/Group 18.png", alt: "Sofa" },
    { title: "Granite dining table with dining chair", price: "Rs. 25,000.00", imageSrc: "/mainchairs.png", alt: "Dining Table" },
    { title: "Outdoor bar table and stool", price: "Rs. 25,000.00", imageSrc: "/Mask group (3).png", alt: "Bar Table" },
    { title: "Plain console with teak mirror", price: "Rs. 25,000.00", imageSrc: "/maintable.png", alt: "Console" },
    { title: "Grain coffee table", price: "Rs. 15,000.00", imageSrc: "/maindex.png", alt: "Coffee Table" },
    { title: "Kent coffee table", price: "Rs. 225,000.00", imageSrc: "/maindexflower.png", alt: "Kent Table" },
    { title: "Round coffee table_color 2", price: "Rs. 251,000.00", imageSrc: "/maindexchai.png", alt: "Round Table" },
    { title: "Reclaimed teak coffee table", price: "Rs. 25,200.00", imageSrc: "/maindexwork.png", alt: "Teak Table" },
    { title: "Plain console", price: "Rs. 258,200.00", imageSrc: "/maindexsit.png", alt: "Plain Console" },
    { title: "Reclaimed teak Sideboard", price: "Rs. 20,000.00", imageSrc: "/maindexalmari.png", alt: "Sideboard" },
    { title: "SJP_0825", price: "Rs. 200,000.00", imageSrc: "/maindexchairs.png", alt: "SJP Product" },
    { title: "Bella chair and table", price: "Rs. 100,000.00", imageSrc: "/maindexchair.png", alt: "Chair and Table" },
    { title: "Side table", price: "Rs. 25,000.00", imageSrc: "/maindexstool.png", alt: "Side Table" },
    { title: "Asgaard sofa", price: "Rs. 50,000.00", imageSrc: "/Asgaard sofa 1.png", alt: "Asgaard Sofa" },
    { title: "Modern sofa", price: "Rs. 75,000.00", imageSrc: "/mainarea,.png", alt: "Modern Sofa" },
    { title: "Luxury lounge chairs", price: "Rs. 150,000.00", imageSrc: "/mainguestroom.png", alt: "Lounge Chairs" },
  ];

  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductItem
              key={index}
              title={product.title}
              price={product.price}
              imageSrc={product.imageSrc}
              alt={product.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
