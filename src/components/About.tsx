import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [showControls, setShowControls] = useState(false);

  return (
    <section id="about" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bright-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-glow to-magenta-pulse mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Introduction Box */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 space-y-6"
            >
              <h3 className="text-2xl font-bold text-cyan-glow mb-4">Introduction</h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  <span className="text-cyan-glow font-semibold">I'm a passionate Machine Learning and Deep Learning enthusiast</span> with experience in building intelligent models and a constant drive to learn new technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  As a <span className="text-cyan-glow font-semibold">Python developer</span>, I enjoy solving real-world problems and actively practice <span className="text-magenta-pulse">Data Structures, Algorithms, and competitive coding</span>.
                </p>
                <div className="glass-panel p-4 bg-space-blue/20">
                  <p className="text-lg leading-relaxed">
                    Outside academics, I participate in <span className="text-cyan-glow">hackathons</span>, <span className="text-cyan-glow">coding competitions</span>, and <span className="text-cyan-glow">seminars</span>. I was also a member of the cultural committee during my diploma.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-glow/20 text-cyan-glow text-sm">Traveling</span>
                  <span className="px-3 py-1 rounded-full bg-magenta-pulse/20 text-magenta-pulse text-sm">Cooking</span>
                  <span className="px-3 py-1 rounded-full bg-cyan-glow/20 text-cyan-glow text-sm">Music</span>
                  <span className="px-3 py-1 rounded-full bg-magenta-pulse/20 text-magenta-pulse text-sm">Photography</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Download CV
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  View Achievements
                </motion.button>
              </div>
            </motion.div>

            {/* Education Box */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 space-y-6"
            >
              <h3 className="text-2xl font-bold text-cyan-glow mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-cyan-glow pl-4">
                  <h4 className="text-lg font-semibold text-bright-white">Bachelor of Technology in Computer Science and Engineering</h4>
                  <p className="text-muted-gray">Techno Main Salt Lake</p>
                  <p className="text-sm text-muted-gray">2026 (Expected)</p>
                </div>
                <div className="border-l-2 border-cyan-glow pl-4">
                  <h4 className="text-lg font-semibold text-bright-white">Diploma in Computer Science and Technology</h4>
                  <p className="text-muted-gray">The Calcutta Technical School</p>
                  <p className="text-sm text-muted-gray">2023</p>
                </div>
                <div className="border-l-2 border-cyan-glow pl-4">
                  <h4 className="text-lg font-semibold text-bright-white">Schooling</h4>
                  <p className="text-muted-gray">Amta Pitambar High School</p>
                  <p className="text-sm text-muted-gray">2020</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Video Section with full-height background */}
          <div className="relative h-full min-h-[500px]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-cyan-glow/20 via-magenta-pulse/20 to-space-blue/40 rounded-lg -z-10"></div>
            <div className="md:sticky md:top-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-video"
              >
                <div
                  className="glass-panel p-4 w-full h-full flex items-center justify-center group rounded-xl overflow-hidden"
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => setShowControls(false)}
                  onFocus={() => setShowControls(true)}
                  onBlur={() => setShowControls(false)}
                  tabIndex={0}
                >
                  <video
                    className="w-full h-full rounded-xl"
                    src="/assets/videos/bg1.mp4"
                    controls={showControls}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/assets/images/bg.jpg"
                  />
                </div>
                {/* Holographic effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-glow/10 to-magenta-pulse/10 pointer-events-none"></div>
                <div className="absolute inset-0 animate-pulse opacity-30 bg-gradient-to-bl from-cyan-glow/5 to-magenta-pulse/5 pointer-events-none"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 