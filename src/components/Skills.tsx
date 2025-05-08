import React, { useState } from 'react';
import { motion } from 'framer-motion';

type SkillCategory = 'languages' | 'frameworks' | 'platforms' | 'tools' | 'libraries';

interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

interface SpokenLanguage {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('languages');

  const skills: Skill[] = [
    // Languages
    { name: 'Python', level: 90, category: 'languages' },
    { name: 'Java', level: 80, category: 'languages' },
    { name: 'C', level: 80, category: 'languages' },
    { name: 'SQL', level: 85, category: 'languages' },
    { name: 'CSS', level: 85, category: 'languages' },
    { name: 'HTML', level: 85, category: 'languages' },
    { name: 'JavaScript', level: 60, category: 'languages' },

    // Frameworks
    { name: 'Flask', level: 85, category: 'frameworks' },
    { name: 'TensorFlow', level: 80, category: 'frameworks' },
    { name: 'PyTorch', level: 75, category: 'frameworks' },

    // Platforms
    { name: 'Jupyter Notebook', level: 70, category: 'platforms' },
    { name: 'PyCharm Professional', level: 95, category: 'platforms' },
    { name: 'Visual Studio Code', level: 80, category: 'platforms' },
    { name: 'GitHub', level: 85, category: 'platforms' },
    { name: 'Kaggle', level: 80, category: 'platforms' },
    { name: 'Hugging Face', level: 75, category: 'platforms' },

    // Tools
    { name: 'MongoDB', level: 80, category: 'tools' },
    { name: 'Firebase', level: 75, category: 'tools' },
    { name: 'Supabase', level: 70, category: 'tools' },
    { name: 'MySQL', level: 70, category: 'tools' },

    // Libraries
    { name: 'Pandas', level: 90, category: 'libraries' },
    { name: 'NumPy', level: 90, category: 'libraries' },
    { name: 'Scikit-learn', level: 85, category: 'libraries' },
    { name: 'Keras', level: 85, category: 'libraries' },
    { name: 'OpenCV', level: 85, category: 'libraries' },
    { name: 'Matplotlib', level: 85, category: 'libraries' },
    { name: 'Seaborn', level: 85, category: 'libraries' },
    { name: 'SciPy', level: 85, category: 'libraries' },
  ];

  const spokenLanguages: SpokenLanguage[] = [
    { name: 'English', level: 90 },
    { name: 'Hindi', level: 90 },
    { name: 'Bengali', level: 100 },
  ];


  const categoryColors: Record<SkillCategory, string> = {
    languages: 'from-rose-500 to-violet-600',
    frameworks: 'from-red-400 to-pink-500',
    platforms: 'from-green-400 to-blue-500',
    tools: 'from-orange-400 to-yellow-500',
    libraries: 'from-green-400 to-violet-500',
  };

  const categoryTitles: Record<SkillCategory, string> = {
    languages: 'Programming Languages',
    frameworks: 'Frameworks',
    platforms: 'Platforms & IDEs',
    tools: 'Tools & Databases',
    libraries: 'Libraries',
  };

  const categories: SkillCategory[] = ['languages', 'frameworks', 'platforms', 'tools', 'libraries'];

  return (
    <section id="skills" className="py-8 pb-4 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-bright-white">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? `bg-gradient-to-r ${categoryColors[category]} text-white shadow-lg`
                  : 'bg-space-blue/30 text-moon-gray hover:bg-space-blue/50'
              }`}
            >
              {categoryTitles[category]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-stretch mb-16"
        >
          {skills
            .filter(skill => skill.category === activeCategory)
            .map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel p-4 relative group h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold mb-2 text-bright-white">{skill.name}</h3>
                  
                  <div className="relative h-1.5 bg-space-blue/30 rounded-full mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`absolute h-full bg-gradient-to-r ${categoryColors[activeCategory]} rounded-full`}
                    />
                  </div>
                </div>

                <div className="flex justify-between text-xs text-moon-gray">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Spoken Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-bright-white">Spoken</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-stretch mb-8"
        >
          {spokenLanguages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-4 relative group h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold mb-2 text-bright-white">{language.name}</h3>
                
                <div className="relative h-1.5 bg-space-blue/30 rounded-full mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${language.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="absolute h-full bg-gradient-to-r from-blue-400 to-green-500 rounded-full"
                  />
                </div>
              </div>

              <div className="flex justify-between text-xs text-moon-gray">
                <span>Proficiency</span>
                <span>{language.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 