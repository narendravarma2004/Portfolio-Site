import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'February 2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: 'https://aws.amazon.com/certification/'
  },
  {
    id: 2,
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'December 2023',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.tensorflow.org/certificate'
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    date: 'October 2023',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: 'https://www.freecodecamp.org/'
  },
  {
    id: 4,
    title: 'React Native Specialist',
    issuer: 'Meta',
    date: 'August 2023',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: 'https://developers.facebook.com/certification/'
  }
];

export const Certifications: React.FC = () => {
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
          Certifications
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Professional certifications and achievements
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
          >
            <div className="relative h-48">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <Award className="absolute top-4 left-4 w-8 h-8 text-white" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.issuer}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{cert.date}</span>
                </div>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};