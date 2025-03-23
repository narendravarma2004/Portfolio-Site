import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Fertilizer Recommendation System Using Deep Learning',
    description: 'A deep learning-based system for accurate fertilizer recommendations to optimize crop yield and soil health.',
    category: 'AI',
    image: 'https://eu-images.contentstack.com/v3/assets/bltdd43779342bd9107/blt774aabba0a27a730/6634049ea251ee3ca2384655/0506T-3672A-1800x1012.jpg',
    technologies: ['Python', 'TensorFlow', 'Colab'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 2,
    title: 'CAKEIRIS - Online Cake Ordering Site',
    description: 'Online cake ordering platform that allows users to browse, customize, and order cakes for delivery.',
    category: 'Web Development',
    image: 'https://cdn.pixabay.com/photo/2024/01/26/21/41/ai-generated-8534773_1280.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 3,
    title: 'Solar-Powered Auto Door with Light Sensing',
    description: 'A solar-powered automatic door system that opens and closes based on ambient light intensity using light sensors.',
    category: 'IoT',
    image: 'https://images.squarespace-cdn.com/content/v1/56f2e1da45bf21a9d51fe345/1461353400256-WM3GH2UUB7VWMSWIY1EW/Lima01.jpg',
    technologies: ['Arduino', 'Raspberry Pi', 'C++',],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 4,
    title: 'BumpStrong - Stay Active and Prepare for Motherhood',
    description: 'BumpStrong is a mobile app designed to help expecting mothers stay active, healthy, and prepared for motherhood with guided exercises and wellness tips.',
    category: 'Application',
    image: 'https://static1.squarespace.com/static/5f100e61fe3f1e54eac2844a/t/66ad78a7f3b6d50bb662b7ac/1722644650208/logo+stacked+%282%29.png',
    technologies: ['Android Studio', 'Java', 'XML', 'MySQL'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

const categories = ['All', 'AI', 'Web Development', 'IoT','Application'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-12 max-w-6xl mx-auto"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Explore my latest works and side projects
        </p>
      </motion.div>

      <div className="flex justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
