import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiStar } = FiIcons;

const testimonies = [
  {
    name: 'Captain James Morrison',
    rank: 'Commanding Officer, USS Enterprise',
    message: 'LCDR Reyes transformed our supply operations with her innovative approach and unwavering dedication. Her leadership during our Western Pacific deployment was exemplary.',
    category: 'Senior Leadership'
  },
  {
    name: 'LS1 Maria Rodriguez',
    rank: 'Logistics Specialist',
    message: 'Ma\'am always had our backs. She taught us that every inventory count, every requisition, every meal served was mission-critical. She made us proud to be part of the Supply team.',
    category: 'Enlisted Personnel'
  },
  {
    name: 'LCDR David Chen',
    rank: 'Operations Officer',
    message: 'Working alongside Melissa during humanitarian operations showed me what true logistical excellence looks like. Her ability to coordinate complex supply chains under pressure was remarkable.',
    category: 'Peer Officers'
  },
  {
    name: 'LSSN Jennifer Kim',
    rank: 'Logistics Specialist Seaman',
    message: 'LCDR Reyes was more than a department head—she was a mentor who believed in our potential. She pushed us to excel and always led by example.',
    category: 'Junior Personnel'
  },
  {
    name: 'CDR Patricia Williams',
    rank: 'Supply Corps Officer',
    message: 'Melissa\'s innovative approach to contract management saved the Navy millions while improving service quality. Her legacy in supply chain optimization will benefit the fleet for years.',
    category: 'Supply Corps'
  },
  {
    name: 'CS1 Robert Thompson',
    rank: 'Culinary Specialist',
    message: 'Under her leadership, our galley operations achieved the highest food service ratings in the fleet. She understood that good food equals good morale.',
    category: 'Food Service'
  }
];

const TestimonySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Voices from the Fleet
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-logistics-400 max-w-2xl mx-auto">
            Testimonies from shipmates, subordinates, and senior leadership who served alongside LCDR Reyes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonies.map((testimony, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-logistics-100 p-6 rounded-lg shadow-lg border-l-4 border-gold-500 hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="bg-gold-500 p-2 rounded-full mr-3">
                  <SafeIcon icon={FiUser} className="text-navy-900 text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">{testimony.name}</h3>
                  <p className="text-sm text-logistics-400">{testimony.rank}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block bg-coral-200 text-navy-900 text-xs font-medium px-2 py-1 rounded">
                  {testimony.category}
                </span>
              </div>

              {/* Message */}
              <blockquote className="text-logistics-400 italic leading-relaxed mb-4">
                "{testimony.message}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="text-gold-500 text-sm fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-navy-900 text-white p-8 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-4">Share Your Memory</h3>
            <p className="text-logistics-200 mb-6">
              Did you serve with LCDR Reyes? We'd love to hear your story and add it to this tribute.
            </p>
            <button className="bg-gold-500 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors">
              Add Your Testimony
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonySection;