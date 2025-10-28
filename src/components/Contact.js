import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800 bg-opacity-30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Interested in collaborating? Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:your.email@example.com" className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition">
            Email Me
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-lg transition">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
