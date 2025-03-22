import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Database, Server } from 'lucide-react';

const skills = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Frontend Development',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Backend Development',
    items: ['Node.js', 'Python', 'Express', 'FastAPI']
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase']
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI & ML',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP']
  }
];

const experiences = [
  {
    year: '2023 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    description: 'Leading development of enterprise-scale applications using React and Node.js.'
  },
  {
    year: '2021 - 2023',
    title: 'AI Engineer',
    company: 'AI Solutions Ltd.',
    description: 'Developed and deployed machine learning models for real-world applications.'
  },
  {
    year: '2019 - 2021',
    title: 'Full Stack Developer',
    company: 'Digital Creators Co.',
    description: 'Built and maintained various web applications using modern technologies.'
  }
];

export const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-12 max-w-4xl mx-auto"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I'm a passionate Full Stack Developer and AI enthusiast with 5+ years of experience in building modern web applications and implementing AI solutions.
        </p>
      </motion.div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
            >
              <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                {skill.icon}
                <h3 className="ml-3 font-semibold">{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 dark:text-gray-300">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-6 items-start"
            >
              <div className="w-32 flex-shrink-0">
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">{exp.year}</div>
              </div>
              <div className="flex-1 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                <h3 className="font-semibold mb-2">{exp.title}</h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.company}</div>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};