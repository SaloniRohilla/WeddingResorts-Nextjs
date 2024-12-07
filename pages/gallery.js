import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/images/gallery/wedding1.jpg', alt: 'Romantic Wedding Venue', category: 'Venues' },
  { src: '/images/gallery/ceremony1.jpg', alt: 'Beautiful Ceremony Setup', category: 'Ceremonies' },
  { src: '/images/gallery/reception1.jpg', alt: 'Elegant Reception', category: 'Receptions' },
  // Add more images here
];

const Gallery = () => {
  const [filter, setFilter] = React.useState('All');

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Wedding Gallery</h1>
        
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded ${
                filter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <Image 
                src={image.src} 
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
                layout="responsive"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Gallery;