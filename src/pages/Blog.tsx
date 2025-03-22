import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Building Scalable Web Applications with React and TypeScript',
    excerpt: 'Learn how to create maintainable and scalable web applications using React and TypeScript.',
    category: 'Web Development',
    date: 'March 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Introduction to Machine Learning with TensorFlow',
    excerpt: 'A comprehensive guide to getting started with machine learning using TensorFlow.',
    category: 'AI & ML',
    date: 'March 10, 2024',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Modern CSS Techniques for Better Web Design',
    excerpt: 'Explore advanced CSS techniques to create beautiful and responsive web designs.',
    category: 'Web Design',
    date: 'March 5, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Getting Started with Cloud Computing',
    excerpt: 'Learn the basics of cloud computing and how to deploy your applications.',
    category: 'Cloud',
    date: 'March 1, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const Blog: React.FC = () => {
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
          Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Thoughts, tutorials and insights about technology
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative h-48">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                {post.category}
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <a href="#">{post.title}</a>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
                <Clock className="w-4 h-4 ml-4 mr-2" />
                {post.readTime}
              </div>
              
              <a
                href="#"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};