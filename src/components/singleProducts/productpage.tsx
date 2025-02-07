// pages/product.js
"use client"
import { useState } from "react";

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-8 md:px-16">
      {/* Product Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Product Images */}
        <div className="space-y-4">
          {/* <img
            src="/images/sofa-main.jpg"
            alt="Product"
            className="rounded-lg w-full object-cover h-96"
          /> */}
          {/* <div className="flex space-x-4">
            {["/images/sofa-1.jpg", "/images/sofa-2.jpg"].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Product Thumbnail"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div> */}
        </div>

        {/* Right Section - Product Tabs */}
        <div className="flex flex-col space-y-6">
          {/* Tabs Navigation */}
          <div className="flex space-x-6 border-b border-gray-300">
            {[
              { label: "Description", key: "description" },
              { label: "Additional Information", key: "additional-info" },
              { label: "Reviews [5]", key: "reviews" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-2 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === tab.key
                    ? "text-gray-800 border-gray-800"
                    : "text-gray-500 border-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "description" && (
            <div className="space-y-4 text-gray-700">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active
                stereo speaker takes the unmistakable look and sound of Marshall, unplugs the
                chords, and takes the show on the road.
              </p>
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
                engineering. Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both articulate and
                pronounced. The analogue knobs allow you to fine tune the controls to your personal
                preferences while the guitar-influenced leather strap enables easy and stylish
                travel.
              </p>
            </div>
          )}

          {activeTab === "additional-info" && (
            <div className="text-gray-700">
              <p>Additional information about the product will go here.</p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="text-gray-700">
              <p>Customer reviews and ratings will be displayed here.</p>
            </div>
          )}
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {["/Group 106.png", "/Group 107.png"].map((src, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center h-64"
          >
            <img src={src} alt={`Sofa ${index + 1}`} className="object-contain w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
