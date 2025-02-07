import React from "react";

interface BreadcrumbItem {
  label: string;
  link?: string;
  active?: boolean;
}

const Breadcrumb: React.FC = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", link: "#" },
    { label: "Shop", link: "#" },
    { label: "Asgaard sofa", active: true },
  ];

  return (
    <nav aria-label="breadcrumb" className="py-4 px-4 bg-white">
      <ul className="flex items-center space-x-2 text-sm">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.link && !item.active ? (
              <a
                href={item.link}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-900 font-semibold">{item.label}</span>
            )}

            {index < breadcrumbItems.length - 1 && (
              <span className="mx-2 text-gray-400">&gt;</span>
            )}
          </li>
        ))}
        <div className="ml-4 w-px h-5 bg-gray-300"></div>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
