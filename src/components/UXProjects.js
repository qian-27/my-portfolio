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
                <div className="flex items-center justify-center p-4">
                  <img src={project.image} alt={project.title} className="w-full h-auto max-w-[500px] max-h-[500px] object-contain" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 text-purple-400">{project.title}</h3>
                  <div className="text-gray-300 mb-6 leading-relaxed space-y-3">
                    {Array.isArray(project.description)
                      ? project.description.map((para, i) => <p key={i}>{para}</p>)
                      : <p>{project.description}</p>
                    }
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-900 bg-opacity-50 text-purple-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.figmaLink && (
                      <a
                        href={project.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition text-center"
                      >
                        View Figma Prototype →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition text-center"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition text-center"
                      >
                        Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
