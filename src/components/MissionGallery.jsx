import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const galleryData = [
  {
    category: 'Shipboard Operations',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        title: 'Supply Department Operations',
        description: 'Managing inventory and logistics aboard USS Enterprise'
      },
      {
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        title: 'Department Head Meeting',
        description: 'Strategic planning session with ship leadership'
      }
    ]
  },
  {
    category: 'Port Operations',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop',
        title: 'Cargo Loading Operations',
        description: 'Overseeing critical supply deliveries in port'
      },
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
        title: 'Warehouse Management',
        description: 'Coordinating logistics at Naval Supply Center'
      }
    ]
  },
  {
    category: 'Humanitarian Operations',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop',
        title: 'Disaster Relief Coordination',
        description: 'Leading humanitarian supply operations in the Pacific'
      },
      {
        url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
        title: 'Community Outreach',
        description: 'Supporting local communities during deployment'
      }
    ]
  }
];

const MissionGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Shipboard Operations');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = galleryData.find(cat => cat.category === selectedCategory)?.images || [];

  const openLightbox = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    setLightboxImage(allImages[imageIndex]);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % allImages.length
      : (currentImageIndex - 1 + allImages.length) % allImages.length;
    
    setCurrentImageIndex(newIndex);
    setLightboxImage(allImages[newIndex]);
  };

  return (
    <section className="py-20 bg-logistics-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Mission Gallery
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-logistics-400 max-w-2xl mx-auto">
            Visual documentation of operational excellence and leadership in action
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryData.map((category) => (
            <button
              key={category.category}
              onClick={() => setSelectedCategory(category.category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === category.category
                  ? 'bg-gold-500 text-navy-900'
                  : 'bg-white text-logistics-400 hover:bg-logistics-200'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {allImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                {/* Navigation */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
                >
                  <SafeIcon icon={FiChevronLeft} className="text-2xl" />
                </button>
                
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
                >
                  <SafeIcon icon={FiChevronRight} className="text-2xl" />
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
                >
                  <SafeIcon icon={FiX} className="text-2xl" />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                  <h3 className="font-semibold text-lg">{lightboxImage.title}</h3>
                  <p className="text-sm opacity-90">{lightboxImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MissionGallery;