

import React from "react";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";

const FilterSortBar: React.FC = () => {
  return (
    <div className="bg-gray-50 py-4 px-6 flex flex-col md:flex-row items-center justify-between border border-gray-200">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Filter Button */}
        <button className="flex items-center text-gray-600 hover:text-black">
          <FiFilter className="w-5 h-5 mr-1" />
          <span className="text-sm font-medium">Filter</span>
        </button>

        {/* Grid and List View Icons */}
        <div className="flex items-center space-x-2">
          <button className="text-gray-600 hover:text-black">
            <FiGrid className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-black">
            <FiList className="w-5 h-5" />
          </button>
        </div>

        {/* Showing Results Text */}
        <span className="text-gray-500 text-sm">
          Showing 1–16 of 32 results
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        {/* Show Dropdown */}
        <div className="flex items-center">
          <span className="text-gray-500 text-sm mr-2">Show</span>
          <select
            className="border border-gray-300 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
            defaultValue="16"
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="48">48</option>
          </select>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center">
          <span className="text-gray-500 text-sm mr-2">Short by</span>
          <select
            className="border border-gray-300 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
            defaultValue="Default"
          >
            <option value="Default">Default</option>
            <option value="PriceLow">Price: Low to High</option>
            <option value="PriceHigh">Price: High to Low</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSortBar;
