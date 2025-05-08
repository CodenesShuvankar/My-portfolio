import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  pdfUrl: string;
  skills: string[];
  previewImage: string;
  gradientColor: string;
}

const Certifications: React.FC = () => {
  const [activePdf, setActivePdf] = useState<string | null>(null);

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  const [flippedCards, setFlippedCards] = useState<{ [title: string]: boolean }>({});

  const handleCardFlip = (title: string) => {
    if (isMobile) {
      setFlippedCards((prev) => ({ ...prev, [title]: !prev[title] }));
    }
  };

  const certifications: Certification[] = [
    {
      title: 'AI-ML Virtual Internship',
      issuer: 'TechLearn India',
      date: '2024',
      pdfUrl: 'assets/certificates/ai-ml-internship.pdf',
      skills: ['Machine Learning', 'Deep Learning', 'Python', 'Data Analysis'],
      previewImage: 'assets/certificates/ai-ml-internship-preview.png',
      gradientColor: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      title: 'Python And Flask Framework',
      issuer: 'Coursera',
      date: '2023',
      pdfUrl: 'assets/certificates/python-flask.pdf',
      skills: ['Python', 'Flask', 'Web Development', 'REST APIs'],
      previewImage: 'assets/certificates/python-flask-preview.png',
      gradientColor: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'SMART INDIA HACKATHON',
      issuer: 'Government of India',
      date: '2023',
      pdfUrl: 'assets/certificates/sih.pdf',
      skills: ['Problem Solving', 'Team Work', 'Innovation', 'Project Management'],
      previewImage: 'assets/certificates/sih-preview.png',
      gradientColor: 'from-orange-500/20 to-red-500/20'
    },
    {
      title: 'Google Developer Groups Workshop',
      issuer: 'Google',
      date: '2023',
      pdfUrl: 'assets/certificates/gdg-workshop.pdf',
      skills: ['Web Development', 'Cloud Computing', 'Android', 'Firebase'],
      previewImage: 'assets/certificates/gdg-workshop-preview.png',
      gradientColor: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      title: 'Ethical Hacking Essentials (EHE)',
      issuer: 'EC-Council',
      date: '2023',
      pdfUrl: 'assets/certificates/ehe.pdf',
      skills: ['Cybersecurity', 'Network Security', 'Penetration Testing', 'Ethical Hacking'],
      previewImage: 'assets/certificates/ehe-preview.png',
      gradientColor: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Flutter Chat App',
      issuer: 'Udemy',
      date: '2024',
      pdfUrl: 'assets/certificates/flutter-chat-app.pdf',
      skills: ['Flutter', 'Dart', 'Firebase', 'Chat Application'],
      previewImage: 'assets/certificates/flutter-chat-app-preview.png',
      gradientColor: 'from-gray-500/20 to-slate-500/20'
    }
  ];

  return (
    <section id="certifications" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bright-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-glow to-magenta-pulse mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const isFlipped = isMobile ? flippedCards[cert.title] : false;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group perspective"
                onClick={() => isMobile && handleCardFlip(cert.title)}
              >
                <motion.div
                  whileHover={!isMobile ? { rotateY: 180 } : {}}
                  animate={isFlipped ? { rotateY: 180 } : { rotateY: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative preserve-3d w-full aspect-[4/3]"
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className={`glass-panel h-full p-6 flex flex-col justify-between relative overflow-hidden group-hover:shadow-lg transition-all duration-300`}>
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradientColor} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-bright-white mb-4 group-hover:text-cyan-glow transition-colors duration-300">{cert.title}</h3>
                        <p className="text-muted-gray mb-4 group-hover:text-bright-white transition-colors duration-300">
                          Issued by {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      <div className="relative z-10 flex flex-wrap gap-2">
                        {cert.skills.map(skill => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-sm rounded-full bg-dusty-purple-accent/50 text-bright-white group-hover:bg-cyan-glow/30 transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="glass-panel h-full p-6 flex flex-col">
                      <div className={`flex-1 flex items-center justify-center bg-gradient-to-br ${cert.gradientColor} rounded-lg overflow-hidden`}>
                        <img
                          src={cert.previewImage}
                          alt={`${cert.title} Preview`}
                          className="w-full h-full object-contain rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                          onClick={() => cert.pdfUrl !== '#' && setActivePdf(cert.pdfUrl)}
                        />
                      </div>
                      <div className="flex justify-center mt-4">
                        {cert.pdfUrl !== '#' && (
                          <button
                            onClick={() => setActivePdf(cert.pdfUrl)}
                            className="btn-primary hover:bg-cyan-glow/80 transition-colors duration-300 w-full max-w-[200px]"
                          >
                            View Certificate
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* PDF Modal */}
        {activePdf && activePdf !== '#' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep-space-blue/90 p-4"
            onClick={() => setActivePdf(null)}
          >
            <div 
              className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 h-12 bg-gray-100 flex items-center justify-between px-4 border-b">
                <h3 className="text-deep-space-blue font-semibold">Certificate Preview</h3>
                <button
                  className="text-deep-space-blue hover:text-muted-gray transition-colors"
                  onClick={() => setActivePdf(null)}
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
              <div className="h-[calc(90vh-3rem)] mt-12">
                <iframe
                  src={`${activePdf}#toolbar=0&view=FitH`}
                  className="w-full h-full"
                  title="Certificate PDF"
                />
                <div className="text-center mt-4">
                  <a
                    href={activePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Open PDF in New Tab
                  </a>
                  <p className="text-xs text-muted-gray mt-2">
                    If the certificate is not visible, tap the button above to view or download it.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications; 