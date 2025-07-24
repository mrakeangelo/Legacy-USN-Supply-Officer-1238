import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTruck, FiDollarSign, FiUsers, FiPackage } = FiIcons;

const legacyStats = [
  {
    icon: FiTruck,
    number: '847',
    label: 'Missions Supported',
    description: 'Critical supply operations across Pacific and Atlantic theaters'
  },
  {
    icon: FiDollarSign,
    number: '$47M',
    label: 'Contracts Managed',
    description: 'Total value of procurement and logistics contracts overseen'
  },
  {
    icon: FiUsers,
    number: '2,400+',
    label: 'Sailors Fed Daily',
    description: 'Average daily meal service during carrier deployment'
  },
  {
    icon: FiPackage,
    number: '156K',
    label: 'Supply Items Managed',
    description: 'Individual stock keeping units in department inventory'
  }
];

const achievements = [
  {
    title: 'Supply Chain Innovation',
    description: 'Implemented predictive inventory management system that reduced stockouts by 40% and saved $1.2M annually',
    impact: 'Fleet-wide adoption'
  },
  {
    title: 'Food Service Excellence',
    description: 'Led galley operations to achieve highest food service rating in fleet for three consecutive years',
    impact: 'Crew morale boost'
  },
  {
    title: 'Humanitarian Leadership',
    description: 'Coordinated emergency supply distribution for Typhoon Haiyan relief operations in Philippines',
    impact: '50,000 civilians aided'
  },
  {
    title: 'Contract Management',
    description: 'Negotiated multi-year service contracts resulting in 15% cost savings while improving service quality',
    impact: '$3.2M saved'
  }
];

const LogisticsLegacy = () => {
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
            Logistics Legacy
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-logistics-400 max-w-2xl mx-auto">
            Quantifying the impact of exceptional supply leadership and operational excellence
          </p>
        </motion.div>

        {/* Statistics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {legacyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-gold-500"
            >
              <div className="bg-navy-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <SafeIcon icon={stat.icon} className="text-gold-500 text-2xl" />
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="font-display text-3xl font-bold text-navy-900 mb-2"
              >
                {stat.number}
              </motion.div>
              
              <h3 className="font-semibold text-lg text-gold-500 mb-2">{stat.label}</h3>
              <p className="text-sm text-logistics-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="font-display text-3xl font-bold text-navy-900 mb-8 text-center">
            Key Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-4 border-gold-500 pl-6"
              >
                <h4 className="font-semibold text-xl text-navy-900 mb-3">
                  {achievement.title}
                </h4>
                <p className="text-logistics-400 mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="bg-coral-100 text-navy-900 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  Impact: {achievement.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legacy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-navy-900 text-white p-8 rounded-lg">
            <blockquote className="font-display text-2xl md:text-3xl italic mb-6">
              "Excellence in logistics isn't measured just in numbers—it's measured in 
              the readiness of the fleet and the confidence of every sailor who knows 
              their Supply Officer has their back."
            </blockquote>
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogisticsLegacy;