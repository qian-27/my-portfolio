import React from 'react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Liuwei
          </div>
          <div className="flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#it-projects" className="hover:text-blue-400 transition">IT Projects</a>
            <a href="#ux-projects" className="hover:text-purple-400 transition">UX Projects</a>
            {/* <a href="#3d-gallery" className="hover:text-pink-400 transition">3D Gallery</a> */}
            <a href="#contact" className="hover:text-green-400 transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
