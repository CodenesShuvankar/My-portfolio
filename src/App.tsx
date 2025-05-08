import React, { Suspense } from 'react';
// Remove Canvas imports again
// import { Canvas } from '@react-three/fiber'; 
// import { Stars } from '@react-three/drei';

// Components
const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  return (
    // Removed h-full
    <div className="relative min-h-screen">
      {/* Global Canvas Removed */}

      {/* Content */}
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-star-white"></div>
        </div>
      }>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
      </Suspense>
    </div>
  );
};

export default App; 