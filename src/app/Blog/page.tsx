import React from 'react'

export const Blogpage = () => {

  return (
    <div>
      import React from "react";
      import { FiClock, FiCalendar } from "react-icons/fi";
      
      interface BlogCardProps {
        imageSrc: string;
        title: string;
        date: string;
        duration: string;
      }
      
      
          <div className="flex flex-col items-center text-center">
            {/* Blog Image */}
            <div className="w-full h-60 overflow-hidden rounded-md mb-4">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
      
            {/* Blog Content */}
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <a
              href="#"
              className="text-sm font-medium text-black mt-2 underline hover:text-gray-600"
            >
              Read More
            </a>
      
            {/* Blog Meta */}
            <div className="flex items-center space-x-4 mt-3 text-gray-500 text-sm">
              <div className="flex items-center">
                <FiClock className="mr-1" /> {duration}
              </div>
              <div className="flex items-center">
                <FiCalendar className="mr-1" /> {date}
              </div>
            </div>
          </div>
        );
      };
      
      const BlogSection: React.FC = () => {
        return (
          <section className="py-12 px-6 bg-white">
            <div className="max-w-7xl mx-auto text-center">
              {/* Header */}
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Blogs</h2>
              <p className="text-gray-500 mb-8">
                Find a bright ideal to suit your taste with our great selection
              </p>
      
              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <BlogCard
                  imageSrc="/Rectangle 13.png"
                  title="Going all-in with millennial design"
                  duration="5 min"
                  date="12th Oct 2022"
                />
                <BlogCard
                  imageSrc="/Rectangle 14.png"
                  title="Going all-in with millennial design"
                  duration="5 min"
                  date="12th Oct 2022"
                />
                <BlogCard
                  imageSrc="/Rectangle 15.png"
                  title="Going all-in with millennial design"
                  duration="5 min"
                  date="12th Oct 2022"
                />
              </div>
      
              {/* View All Post */}
              <div className="mt-8">
                <a
                  href="#"
                  className="text-sm font-medium text-black underline hover:text-gray-600"
                >
                  View All Post
                </a>
              </div>
            </div>
          </section>
          </div>
      
      
     
    
  )
}


