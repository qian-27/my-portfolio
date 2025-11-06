import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Software Developer <br />
          & <br />
          UX Designer
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Crafting beautiful digital experiences through code and design.
        </p>
        <div className="flex justify-center space-x-3">
          <a href="#it-projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
            View IT Projects
          </a>
          <a href="#ux-projects" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition">
            View UX Work
          </a>
          {/* <a href="#3d-gallery" className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition">
            3D Gallery
          </a> */}
        </div>
      </div>
    </section>
  );
}
