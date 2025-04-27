import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Java',
    issuer: 'Udemy',
    date: 'August 2024',
    image: 'https://dac.digital/wp-content/uploads/2023/04/backend-java-1920x1200-optimized.png',
    link: 'https://drive.google.com/file/d/1FKzyP_vfMGAfKBYmeYkF2nL3UtX9zbqj/view?usp=sharing'
  },
  {
    id: 2,
    title: 'C Programming',
    issuer: 'Great Learning',
    date: 'August 2023',
    image: 'https://i0.wp.com/moodle.sit.ac.in/blog/wp-content/uploads/2023/06/c.png?w=709',
    link: 'https://drive.google.com/file/d/1MB37gJ1pN_8gd-Q_fMn8pt1nz3N3x6p1/view?usp=sharing'
  },
  {
    id: 3,
    title: 'AI Foundations Associate',
    issuer: 'Oracle',
    date: 'August 2024',
    image: 'https://dxc.scene7.com/is/image/dxc/OracleRedwood2?',
    link: 'https://drive.google.com/file/d/19AhJja08TU3EtwgPyvhZPvdhcdJu1FRY/view?usp=sharing'
  },
  {
    id: 4,
    title: 'Career Edge- Professional',
    issuer: 'TCS-ION',
    date: 'August 2023',
    image: 'https://evessio.s3.amazonaws.com/customer/f6ac7efa-3821-45db-b7e9-604a1025db1f/event/d3d85cc9-ac6d-456d-8352-454ef5ba5451/media/309157e4-profile_TCS-logo-1024x768-1-optimized.jpg_Large.webp',
    link: 'https://drive.google.com/file/d/16muLIxEccpVtE2YzQ1x7OW8IPvuM3Hyd/view?usp=sharing'
  },
  {
    id: 5,
    title: 'APEX Cloud Developer',
    issuer: 'Oracle',
    date: 'August 2024',
    image: 'https://dxc.scene7.com/is/image/dxc/OracleRedwood2?',
    link: 'https://drive.google.com/file/d/19AhJja08TU3EtwgPyvhZPvdhcdJu1FRY/view?usp=sharing'
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
