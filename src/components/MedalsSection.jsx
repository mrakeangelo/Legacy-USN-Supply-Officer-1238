import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiStar, FiShield, FiInfo } = FiIcons;

const medals = [
  {
    name: 'Navy and Marine Corps Commendation Medal',
    description: 'For meritorious service during Western Pacific deployment',
    icon: FiAward,
    category: 'Service Medals',
    details: 'Awarded for exceptional leadership in coordinating humanitarian relief operations in the Philippines, managing over $2M in emergency supplies.'
  },
  {
    name: 'Navy Achievement Medal (2)',
    description: 'Outstanding performance in supply operations',
    icon: FiStar,
    category: 'Achievement',
    details: 'First award for implementing innovative inventory management system. Second award for excellence in food service operations.'
  },
  {
    name: 'Supply Corps Oak Leaf',
    description: 'Supply Corps officer insignia',
    icon: FiShield,
    category: 'Corps Insignia',
    details: 'The distinctive insignia of the Navy Supply Corps, representing expertise in logistics, contracting, and operational support.'
  },
  {
    name: 'Surface Warfare Officer Pin',
    description: 'Qualified Surface Warfare Officer',
    icon: FiShield,
    category: 'Warfare Qualification',
    details: 'Earned through comprehensive training and demonstration of expertise in surface ship operations and tactics.'
  },
  {
    name: 'Navy Expeditionary Medal',
    description: 'Service in expeditionary operations',
    icon: FiAward,
    category: 'Service Medals',
    details: 'Awarded for participation in expeditionary operations supporting Operation Enduring Freedom.'
  },
  {
    name: 'National Defense Service Medal',
    description: 'Service during periods of national emergency',
    icon: FiStar,
    category: 'Service Medals',
    details: 'Awarded for honorable active service during the Global War on Terrorism.'
  }
];

const rankProgression = [
  { rank: 'ENS', year: '2005', title: 'Ensign' },
  { rank: 'LTJG', year: '2007', title: 'Lieutenant Junior Grade' },
  { rank: 'LT', year: '2009', title: 'Lieutenant' },
  { rank: 'LCDR', year: '2015', title: 'Lieutenant Commander' },
];

const MedalsSection = () => {
  const [selectedMedal, setSelectedMedal] = useState(null);

  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Honors & Recognition
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-logistics-200 max-w-2xl mx-auto">
            A distinguished record of service excellence and professional achievement
          </p>
        </motion.div>

        {/* Medals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {medals.map((medal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-navy-800 p-6 rounded-lg border border-gold-500/20 cursor-pointer hover:border-gold-500/40 transition-colors"
              onClick={() => setSelectedMedal(medal)}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gold-500 p-3 rounded-full mr-4">
                  <SafeIcon icon={medal.icon} className="text-navy-900 text-xl" />
                </div>
                <div>
                  <span className="text-xs text-gold-300 font-medium">{medal.category}</span>
                </div>
              </div>
              
              <h3 className="font-semibold text-lg mb-2 text-gold-300">{medal.name}</h3>
              <p className="text-logistics-200 text-sm mb-4">{medal.description}</p>
              
              <div className="flex items-center text-gold-500 text-sm">
                <SafeIcon icon={FiInfo} className="mr-2" />
                <span>Click for details</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rank Progression */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-navy-800 p-8 rounded-lg border border-gold-500/20"
        >
          <h3 className="font-display text-2xl font-bold text-gold-500 mb-6 text-center">
            Rank Progression
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {rankProgression.map((rank, index) => (
              <div key={index} className="text-center">
                <div className="bg-gold-500 text-navy-900 w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mb-2">
                  {rank.rank}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gold-300">{rank.title}</div>
                  <div className="text-logistics-200">{rank.year}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Medal Detail Modal */}
        {selectedMedal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedal(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-navy-800 p-8 rounded-lg max-w-md w-full border border-gold-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gold-500 p-4 rounded-full mr-4">
                  <SafeIcon icon={selectedMedal.icon} className="text-navy-900 text-2xl" />
                </div>
                <div>
                  <span className="text-xs text-gold-300 font-medium">{selectedMedal.category}</span>
                  <h3 className="font-semibold text-xl text-gold-300">{selectedMedal.name}</h3>
                </div>
              </div>
              
              <p className="text-logistics-200 leading-relaxed mb-6">{selectedMedal.details}</p>
              
              <button
                onClick={() => setSelectedMedal(null)}
                className="w-full bg-gold-500 text-navy-900 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MedalsSection;