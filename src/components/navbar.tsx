

import React from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    
    <nav className="bg-yellow-200 p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left - Page Title */}
        <div className="text-gray-400 text-3xl font-light"></div>
        
        {/* Center - Menu Links */}
        <ul className="hidden md:flex space-x-8 text-black text-sm font-medium">
          <li>
            <a href="#" className="hover:text-gray-600">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">Shop</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">Contact</a>
          </li>
        </ul>
        
        {/* Right - Icons */}
        <div className="flex space-x-6 text-black text-lg">
          <FaUser className="cursor-pointer hover:text-gray-600" />
          <FaSearch className="cursor-pointer hover:text-gray-600" />
          <FaHeart className="cursor-pointer hover:text-gray-600" />
          <FaShoppingCart className="cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
