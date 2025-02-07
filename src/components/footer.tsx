import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        {/* Address Section */}
        <div>
          <p className="text-sm leading-relaxed">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-500">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Newsletter</h3>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-300 px-3 py-2 w-full text-sm rounded-md focus:outline-none focus:ring focus:ring-gray-400"
            />
            <button className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-600">
        <p>2022 Meubel House. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
