 "use client"


 import { useState } from "react";

//  export default function RelatedProduct() {
//    const [activeTab, setActiveTab] = useState("description");

 
 
//  {/* Related Products Section */}
//  <div className="max-w-7xl mx-auto mt-12">
//  <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Related Products</h2>
//  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//    {[
//      {
//        name: "Trenton modular sofa_3",
//        price: "Rs. 25,000.00",
//        image: "/images/related-1.jpg",
//      },
//      {
//        name: "Granite dining table with dining chair",
//        price: "Rs. 25,000.00",
//        image: "/images/related-2.jpg",
//      },
//      {
//        name: "Outdoor bar table and stool",
//        price: "Rs. 25,000.00",
//        image: "/images/related-3.jpg",
//      },
//      {
//        name: "Plain console with teak mirror",
//        price: "Rs. 25,000.00",
//        image: "/images/related-4.jpg",
//      },
//    ].map((product, index) => (
//      <div key={index} className="space-y-2 text-center">
//        <img
//          src={product.image}
//          alt={product.name}
//          className="w-full h-48 object-cover rounded-lg"
//        />
//        <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
//        <p className="text-sm font-semibold text-gray-600">{product.price}</p>
//      </div>
//    ))}
//  </div>
//  <div className="text-center mt-6">
//    <button className="text-sm font-medium text-gray-800 underline hover:text-gray-600">
//      View More
//    </button>
//  </div>
// </div>


// }

// pages/related-products.js

export default function RelatedProducts() {
    const products = [
      {
        name: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
        image: "/Group 18.png",
      },
      {
        name: "Granite dining table with dining chair",
        price: "Rs. 25,000.00",
        image: "/mainchairs.png",
      },
      {
        name: "Outdoor bar table and stool",
        price: "Rs. 25,000.00",
        image: "/maindyning.png",
      },
      {
        name: "Plain console with teak mirror",
        price: "Rs. 25,000.00",
        image: "/maintable.png",
      },
    ];
  
    return (
      <div className="min-h-screen bg-white px-4 py-6 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Related Products
          </h2>
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="space-y-2 text-center bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-sm font-medium text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm font-semibold text-gray-600">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
  
          {/* View More Button */}
          <div className="text-center mt-6">
            <button className="text-sm font-medium text-gray-800 underline hover:text-gray-600">
              View More
            </button>
          </div>
        </div>
      </div>
    );
  }
  