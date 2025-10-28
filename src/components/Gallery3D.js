import React from 'react';
import { gallery3D } from '../data/projectsData';

export default function Gallery3D() {
  return (
    <section id="3d-gallery" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          3D Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery3D.map((item, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 border border-gray-700">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-pink-400">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.software}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
