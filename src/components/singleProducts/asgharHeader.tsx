import React from "react";

interface BreadcrumbProps {
  items: { label: string; link?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="py-4 px-6 bg-white">
      <ul className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {/* Link or Active Text */}
            {item.link ? (
              <a
                href={item.link}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-black font-medium">{item.label}</span>
            )}
            {/* Separator */}
            {index < items.length - 1 && (
              <span className="text-gray-400 mx-2">&gt;</span>
            )}
          </li>
        ))}
        {/* Vertical Divider */}
        <div className="ml-4 w-px h-5 bg-gray-300"></div>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
