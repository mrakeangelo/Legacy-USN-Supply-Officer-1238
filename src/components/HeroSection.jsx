import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowDown, FiAnchor } = FiIcons;

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
          alt="Naval Officer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-6">
            <SafeIcon icon={FiAnchor} className="text-gold-500 text-6xl" />
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            LCDR Melissa A. Reyes
          </h1>
          
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          
          <h2 className="font-body text-xl md:text-2xl text-gold-300 mb-6">
            U.S. Navy Supply Officer – Logistics & Operational Support
          </h2>
          
          <blockquote className="font-body text-lg md:text-xl italic text-logistics-200 mb-8 max-w-2xl mx-auto">
            "If it moved, launched, or ate — she made it happen."
          </blockquote>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 transition-colors"
          >
            Explore Her Supply Legacy
            <SafeIcon icon={FiArrowDown} className="text-xl" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <SafeIcon icon={FiArrowDown} className="text-white text-2xl opacity-70" />
      </motion.div>
    </section>
  );
};

export default HeroSection;