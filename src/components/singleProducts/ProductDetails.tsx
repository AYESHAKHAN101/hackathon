"use client"


// Install necessary dependencies before starting: 
// shadcn/tailwindcss setup (refer to https://shadcn.dev/ for exact setup)
// Tailwind CSS installation: https://tailwindcss.com/docs/installation

// pages/product.js

import { useState } from "react";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("blue");

  const handleQuantityChange = (action) => {
    setQuantity((prev) => (action === "increment" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Product Images */}
        <div className="space-y-4">
          <img
            src="/Asgaard sofa 1.png"
            alt="Asgaard Sofa"
            className="rounded-lg w-full object-cover h-96"
          />
          <div className="flex space-x-4">
            {["/mainguestroom.png", "/sofa (2).png", "/sofa3.png", "/sofa (4).png"].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Asgaard Sofa Thumbnail"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800">Asgaard Sofa</h1>
          <p className="text-2xl font-bold text-gray-900">Rs. 250,000.00</p>

          <div className="flex items-center space-x-2">
            <span className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-yellow-400"
                >
                  <path d="M12 .587l3.668 7.431L24 9.168l-6 5.853L19.335 24 12 19.771 4.665 24 6 15.021 0 9.168l8.332-1.15z" />
                </svg>
              ))}
            </span>
            <span className="text-gray-600">5 Customer Reviews</span>
          </div>

          <p className="text-gray-700">
            Setting the bar as one of the loudest speakers in its class, the Asgaard sofa is
            designed for ultimate comfort with balanced ergonomics.
          </p>

          <div className="flex space-x-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Size</h3>
              <div className="flex space-x-2 mt-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 border rounded-md text-sm font-medium ${
                      selectedSize === size ? "bg-gray-800 text-white" : "text-gray-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700">Color</h3>
              <div className="flex space-x-2 mt-2">
                {["blue", "black", "yellow"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "border-gray-800" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4 py-2 text-gray-700 bg-white">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>

            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              Add To Cart
            </button>
          </div>

          <div className="space-y-2 text-sm text-gray-500">
            <p>SKU: SS001</p>
            <p>Category: Sofas</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

