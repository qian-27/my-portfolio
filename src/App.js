import React, { useRef } from 'react';
import useThreeBackground from './hooks/useThreeBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ITProjects from './components/ITProjects';
import UXProjects from './components/UXProjects';
import Gallery3D from './components/Gallery3D';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const canvasRef = useRef();

  // Initialize Three.js background
  useThreeBackground(canvasRef);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Three.js Background Canvas */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-30" />

      {/* Components */}
      <Navigation />
      <Hero />
      <ITProjects />
      <UXProjects />
      <Gallery3D />
      <Contact />
      <Footer />
    </div>
  );
}
