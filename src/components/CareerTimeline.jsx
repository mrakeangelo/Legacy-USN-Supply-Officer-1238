import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPackage, FiShip, FiAward, FiGlobe, FiUsers, FiTrendingUp } = FiIcons;

const timelineData = [
  {
    year: '2005',
    title: 'Naval Officer Candidate School',
    description: 'Commissioned as Ensign, Supply Corps',
    icon: FiAward,
    location: 'Newport, RI'
  },
  {
    year: '2006',
    title: 'USS Enterprise (CVN-65)',
    description: 'Assistant Supply Officer, Atlantic Fleet operations',
    icon: FiShip,
    location: 'Norfolk, VA'
  },
  {
    year: '2009',
    title: 'Naval Supply Systems Command',
    description: 'Logistics Management Specialist, Pacific Theater',
    icon: FiPackage,
    location: 'San Diego, CA'
  },
  {
    year: '2012',
    title: 'USS Bonhomme Richard (LHD-6)',
    description: 'Supply Officer, Western Pacific Deployment',
    icon: FiGlobe,
    location: 'Sasebo, Japan'
  },
  {
    year: '2015',
    title: 'Naval Postgraduate School',
    description: 'M.S. in Supply Chain Management',
    icon: FiTrendingUp,
    location: 'Monterey, CA'
  },
  {
    year: '2018',
    title: 'Naval Air Station Oceana',
    description: 'Department Head, Supply Department',
    icon: FiUsers,
    location: 'Virginia Beach, VA'
  },
  {
    year: '2022',
    title: 'Retirement Ceremony',
    description: '17 years of distinguished service',
    icon: FiAward,
    location: 'Norfolk, VA'
  }
];

const CareerTimeline = () => {
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
            Career Timeline
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-logistics-400 max-w-2xl mx-auto">
            A journey of leadership, precision, and unwavering commitment to naval excellence
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-logistics-300 hidden md:block"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-logistics-100 p-6 rounded-lg shadow-lg border-l-4 border-gold-500">
                  <div className="flex items-center mb-4">
                    <SafeIcon icon={item.icon} className="text-2xl text-gold-500 mr-3" />
                    <span className="text-gold-500 font-semibold text-lg">{item.year}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-logistics-400 mb-2">{item.description}</p>
                  <span className="text-sm text-gold-500 font-medium">{item.location}</span>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-lg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;