import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiHeart, FiStar } = FiIcons;

const quotes = [
  "She delivered readiness every single day.",
  "Excellence in logistics, leadership in life.",
  "Order is operational power.",
  "Service before self, always.",
  "A legacy of precision and dedication."
];

const Footer = () => {
  const [currentQuote, setCurrentQuote] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Quote Carousel */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiAnchor} className="text-gold-500 text-3xl mr-4" />
              <div>
                <h3 className="font-display text-2xl font-bold text-gold-500">
                  LCDR Melissa A. Reyes
                </h3>
                <p className="text-logistics-200">U.S. Navy Supply Corps (Retired)</p>
              </div>
            </div>

            {/* Quote Carousel */}
            <div className="relative h-16 overflow-hidden">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center"
              >
                <blockquote className="font-display text-lg italic text-gold-300">
                  "{quotes[currentQuote]}"
                </blockquote>
              </motion.div>
            </div>

            {/* Quote Indicators */}
            <div className="flex space-x-2 mt-4">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentQuote ? 'bg-gold-500' : 'bg-logistics-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Service Summary */}
          <div className="bg-navy-800 p-6 rounded-lg border border-gold-500/20">
            <h4 className="font-semibold text-gold-500 mb-4 flex items-center">
              <SafeIcon icon={FiStar} className="mr-2" />
              Service Summary
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-logistics-300">Years of Service:</span>
                <span className="text-white font-medium">17 years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-logistics-300">Final Rank:</span>
                <span className="text-white font-medium">LCDR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-logistics-300">Specialty:</span>
                <span className="text-white font-medium">Supply Corps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-logistics-300">Deployments:</span>
                <span className="text-white font-medium">4 major</span>
              </div>
            </div>
          </div>
        </div>

        {/* Oak Leaf Divider */}
        <div className="border-t border-logistics-600 pt-8 mb-8">
          <div className="flex justify-center">
            <div className="bg-gold-500/10 p-4 rounded-full">
              <SafeIcon icon={FiAnchor} className="text-gold-500 text-2xl" />
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center space-y-4">
          <p className="text-logistics-300">
            A tribute to dedicated service, exceptional leadership, and unwavering commitment to naval excellence
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-sm">
            <span className="text-logistics-400">
              © 2024 • Built with respect and admiration
            </span>
            <div className="w-1 h-1 bg-logistics-400 rounded-full"></div>
            <div className="flex items-center text-logistics-400">
              Made with <SafeIcon icon={FiHeart} className="text-coral-300 mx-1" /> by Mrake Agency
            </div>
          </div>

          {/* Barcode-style Design Element */}
          <div className="flex justify-center space-x-1 mt-8">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`w-1 bg-gold-500/30 ${
                  i % 3 === 0 ? 'h-4' : i % 2 === 0 ? 'h-6' : 'h-3'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;