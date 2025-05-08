import React from 'react';
// Keep imports even if Canvas is commented out for easier toggling
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6"
    >
      {/* Layer 1: Static Background Image (Blurred) */}
      <div className="absolute inset-0 z-0 filter brightness-60 blur-xxs">
        <video
          src="/assets/videos/bg4.mp4"
          autoPlay
          muted
          loop
          playsInline={true}
          preload="auto"
          className="w-full h-full object-cover"
        >
          {/* Fallback for browsers that don't support video */}
          <source src="/assets/videos/bg.mp4" type="video/mp4" />
          <img 
            src="/assets/images/CodenesSpace.jpeg" 
            alt="Background" 
            className="w-full h-full object-cover" 
          />
        </video>
      </div>
      {/* Layer 1.5: Dark Overlay for Contrast */}
      <div className="absolute inset-0 z-[5] bg-deep-space-blue opacity-50"></div>

      {/* Layer 2: Local Canvas with Stars (Commented Out Again) */}
      {/* 
      <Canvas className="absolute inset-0 z-10 pointer-events-none">
        <ambientLight intensity={0.1} /> 
        <Stars radius={80} depth={40} count={4000} factor={5} saturation={0} fade speed={0.8} />
      </Canvas>
      */}

      {/* Main Content with Avatar */}
      <div className="absolute z-20 flex flex-col items-center justify-center text-center max-w-4xl w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Avatar */}
        <div className="mb-4 -mt-20 w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-glow shadow-xl mx-auto">
          <img
            src="/assets/images/avatar.jpg"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Text Centered */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hi, I'm <span className="text-cyan-glow animate-glow">Shuvankar Dhara</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-white/80 mb-6">
          Python Developer
        </h2>

        <p className="text-lg text-gray-300 max-w-2xl mb-10 mx-auto">
          I build modern Machine Learniing models, web applications with a focus on performance, accessibility, and user experience.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-cyan-glow text-deep-space-blue font-semibold hover:bg-cyan-glow/80 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-cyan-glow text-cyan-glow rounded-lg font-medium hover:bg-cyan-glow/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;