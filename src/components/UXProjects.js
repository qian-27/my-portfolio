import React from 'react';
import { uxProjects } from '../data/projectsData';

export default function UXProjects() {
  return (
    <section id="ux-projects" className="min-h-screen py-20 px-4 bg-gray-800 bg-opacity-30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          UX Projects
        </h2>
        <div className="space-y-16">
          {uxProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700">
              <div className="grid md:grid-cols-2 gap-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 text-purple-400">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-900 bg-opacity-50 text-purple-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition text-center"
                  >
                    View Figma Prototype →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
