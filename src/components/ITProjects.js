import React from 'react';
import { itProjects } from '../data/projectsData';

export default function ITProjects() {
  return (
    <section id="it-projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          IT Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {itProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition duration-300 border border-gray-700">
              <h3 className="text-2xl font-bold mb-3 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition font-medium">
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition font-medium">
                    Live Demo →
                  </a>
                )}
                {project.linkedin && (
                  <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition font-medium">
                    LinkedIn →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
