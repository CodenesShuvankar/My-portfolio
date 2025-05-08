import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  videoUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'Ml' | 'mobile' | '3d' | 'other';
  isShowMore?: boolean;
  backgroundImage: string;
}

const Projects: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<Project['category'] | 'all'>('all');

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  const [showControls, setShowControls] = useState(isMobile);
  const [flippedCards, setFlippedCards] = useState<{ [title: string]: boolean }>({});

  useEffect(() => {
    setShowControls(isMobile);
  }, [isMobile]);

  const handleCardFlip = (title: string) => {
    if (isMobile) {
      setFlippedCards((prev) => ({ ...prev, [title]: !prev[title] }));
    }
  };

  const projects: Project[] = [
    {
      title: 'Gemini-2.0-flash Chatbot',
      description: 'An intelligent chatbot powered by Google\'s Gemini 2.0-flash model, capable of natural conversations and task assistance.',
      technologies: ['Python', 'Gemini 2.0-flash', 'Streamlit', 'LangChain', 'Vector DB'],
      videoUrl: '/assets/videos/gemini_chat_bot.mp4',
      category: 'Ml',
      githubUrl: 'https://github.com/CodenesShuvankar/Chat_Bot_Gemini',
      liveUrl: 'https://chatbotgemini-by-shuvankar.streamlit.app/',
      backgroundImage: '/assets/images/chatbot.png'
    },
    {
      title: '3D Portfolio Website',
      description: 'A personal portfolio website with Three.js animations and interactive 3D elements.',
      technologies: ['React', 'Three.js', 'TypeScript', 'Tailwind CSS'],
      videoUrl: '/assets/videos/web.mp4',
      category: '3d',
      githubUrl: 'https://github.com/username/portfolio',
      liveUrl: 'https://portfolio.example.com',
      backgroundImage: '/assets/images/CodenesSpace.jpeg'
    },
    {
      title: 'Text Extractor (NLP)',
      description: 'Advanced NLP system for extracting key information from documents using BERT and custom entity recognition , extract metadata and summarize the content.',
      technologies: ['Python', 'SpaCy', 'PyTorch', 'Streamlit'],
      videoUrl: '/assets/videos/text-extractor.mp4',
      category: 'Ml',
      githubUrl: 'https://github.com/CodenesShuvankar/NLP_Project',
      liveUrl: 'https://www.kaggle.com/code/svdhara/perform-ocr',
      backgroundImage: '/assets/images/text-extractor.png'
    },
    {
      title: 'Song Lyrics Generator',
      description: 'An AI-powered lyrics generator using gpt2-medium that creates unique song lyrics based on genre, mood, and theme inputs. This project is currently under development.',
      technologies: ['Python', 'gpt2-medium', 'Streamlit'],
      videoUrl: '/assets/videos/Lyrics_generator.mp4',
      category: 'Ml',
      githubUrl: 'https://github.com/CodenesShuvankar/Lyrics-generator',
      liveUrl: 'https://www.kaggle.com/code/svdhara/generate-lyrics',
      backgroundImage: '/assets/images/lyrics.png',
      // isComingSoon: true
    },
    {
      title: 'Image Colourization Model(Coming Soon)',
      description: 'A deep learning model for image colourization using transfer learning with ResNet50.',
      technologies: ['Python', 'pytorch', 'OpenCV', 'NumPy'],
      videoUrl: '/assets/videos/ml-demo.mp4',
      category: 'Ml',
      githubUrl: 'https://github.com/CodenesShuvankar/HyperGAN_Sar_imageColorization',
      liveUrl: 'https://ml-demo.example.com',
      backgroundImage: '/assets/images/image-classification-bg.jpg'
    },
    {
      title: 'Show More Projects',
      description: 'Explore more of my projects on GitHub, including additional ML models, web applications, and experimental projects.',
      technologies: ['GitHub', 'Open Source', 'Projects'],
      videoUrl: '',
      category: 'other',
      githubUrl: 'https://github.com/CodenesShuvankar',
      isShowMore: true,
      backgroundImage: ''
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Ml', label: 'ML Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: '3d', label: '3D Projects' },
    { id: 'other', label: 'Other' },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bright-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-glow to-magenta-pulse mx-auto"></div>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-cyan-glow to-magenta-pulse text-deep-space-blue font-semibold'
                  : 'glass-panel text-muted-gray hover:text-bright-white'
              }`}
              onClick={() => setActiveFilter(category.id as Project['category'] | 'all')}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFlipped = isMobile ? flippedCards[project.title] : false;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group perspective ${project.isShowMore ? 'cursor-pointer' : ''}`}
                onClick={() => {
                  if (project.isShowMore) {
                    window.open(project.githubUrl, '_blank');
                  } else if (isMobile) {
                    handleCardFlip(project.title);
                  }
                }}
              >
                <motion.div
                  whileHover={!isMobile && !project.isShowMore ? { rotateY: 180 } : {}}
                  animate={isFlipped ? { rotateY: 180 } : { rotateY: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative preserve-3d w-full aspect-[4/3]"
                  onHoverStart={() => {
                    if (!isMobile && !project.isShowMore) {
                      const video = document.querySelector(`video[src=\"${project.videoUrl}\"]`) as HTMLVideoElement;
                      if (video) {
                        video.currentTime = 0;
                        video.play().catch(error => console.log('Video autoplay failed:', error));
                      }
                    }
                  }}
                  onHoverEnd={() => {
                    if (!isMobile && !project.isShowMore) {
                      const video = document.querySelector(`video[src=\"${project.videoUrl}\"]`) as HTMLVideoElement;
                      if (video) {
                        video.pause();
                        video.currentTime = 0;
                      }
                    }
                  }}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden">
                    <div 
                      className={`glass-panel h-full p-6 flex flex-col justify-between relative overflow-hidden ${
                        project.isShowMore ? 'bg-gradient-to-br from-cyan-glow/20 to-magenta-pulse/20' : ''
                      }`}
                    >
                      {!project.isShowMore && (
                        <div 
                          className="absolute inset-0 z-0 opacity-20"
                          style={{
                            backgroundImage: `url(${project.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(2px)'
                          }}
                        />
                      )}
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-bright-white mb-4">{project.title}</h3>
                        <p className="text-muted-gray mb-4">{project.description}</p>
                      </div>
                      <div className="relative z-10 flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-dusty-purple-accent/50 text-bright-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.isShowMore && (
                        <div className="relative z-10 mt-4 text-center">
                          <span className="text-cyan-glow text-lg font-semibold">Click to view more →</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Back of card - Only show for non-show-more projects */}
                  {!project.isShowMore && (
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <div className="glass-panel h-full p-6 flex flex-col">
                        <video
                          className="w-full h-48 object-cover rounded-lg mb-4"
                          src={project.videoUrl}
                          muted
                          autoPlay
                          loop
                          playsInline
                          preload="auto"
                          controls={isMobile || showControls}
                          onClick={() => setActiveVideo(project.videoUrl)}
                        />
                        <div className="flex justify-center space-x-4 mt-auto">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary"
                            >
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary"
                            >
                              View Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Video modal */}
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep-space-blue/90"
            onClick={() => setActiveVideo(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <video
                className="w-full h-full rounded-lg"
                src={activeVideo || ''}
                autoPlay
                controls
                loop
                playsInline
              />
              <button
                className="absolute top-4 right-4 text-bright-white hover:text-muted-gray"
                onClick={() => setActiveVideo(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects; 