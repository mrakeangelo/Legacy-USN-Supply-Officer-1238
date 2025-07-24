import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiHome, FiGlobe, FiBookOpen } = FiIcons;

const PersonalSection = () => {
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
            Beyond the Uniform
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-logistics-400 max-w-2xl mx-auto">
            The woman behind the officer—balancing service, family, and personal growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop"
              alt="Personal moment"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-gold-500 p-4 rounded-lg shadow-lg">
              <SafeIcon icon={FiHeart} className="text-navy-900 text-2xl" />
            </div>
          </motion.div>

          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-navy-900">
                Balancing Service and Family
              </h3>
              <p className="text-logistics-400 leading-relaxed">
                Throughout her naval career, LCDR Reyes exemplified the delicate balance of 
                being a dedicated officer, loving mother, and supportive wife. Her ability 
                to manage the demands of military life while nurturing her family became 
                an inspiration to countless women in the service.
              </p>
              <p className="text-logistics-400 leading-relaxed">
                During deployments, she maintained strong family connections through 
                technology and creative communication, ensuring her children felt her 
                presence even when duty called her away. Her husband's unwavering support 
                enabled her to pursue excellence in her naval career while maintaining 
                the foundation of a strong family unit.
              </p>
            </div>

            {/* Personal Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-logistics-100 p-4 rounded-lg">
                <SafeIcon icon={FiHome} className="text-gold-500 text-2xl mb-2" />
                <h4 className="font-semibold text-navy-900 mb-1">Family First</h4>
                <p className="text-sm text-logistics-400">Mother of two, military spouse advocate</p>
              </div>
              
              <div className="bg-logistics-100 p-4 rounded-lg">
                <SafeIcon icon={FiBookOpen} className="text-gold-500 text-2xl mb-2" />
                <h4 className="font-semibold text-navy-900 mb-1">Lifelong Learner</h4>
                <p className="text-sm text-logistics-400">M.S. Supply Chain Management, NPS</p>
              </div>
              
              <div className="bg-logistics-100 p-4 rounded-lg">
                <SafeIcon icon={FiGlobe} className="text-gold-500 text-2xl mb-2" />
                <h4 className="font-semibold text-navy-900 mb-1">Cultural Bridge</h4>
                <p className="text-sm text-logistics-400">Mentored international officers</p>
              </div>
              
              <div className="bg-logistics-100 p-4 rounded-lg">
                <SafeIcon icon={FiHeart} className="text-gold-500 text-2xl mb-2" />
                <h4 className="font-semibold text-navy-900 mb-1">Community Leader</h4>
                <p className="text-sm text-logistics-400">Volunteer coordinator, Navy spouse groups</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Letter to Children */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-navy-900 text-white p-8 rounded-lg"
        >
          <h3 className="font-display text-2xl font-bold text-gold-500 mb-6 text-center">
            A Mother's Message
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg leading-relaxed italic mb-6">
              "To my beautiful children—Emma and Michael—you are my greatest achievement, 
              my proudest legacy. Every deployment, every challenge, every moment of service 
              was made meaningful by the thought of coming home to you. You taught me that 
              strength isn't just about leading sailors or managing supply chains—it's about 
              being present, being patient, and being the kind of mother who shows you that 
              dreams are worth pursuing, no matter how challenging the path."
            </blockquote>
            
            <blockquote className="text-lg leading-relaxed italic">
              "I hope you remember not just the uniform I wore, but the values I tried to 
              live by: integrity, courage, and commitment—not just to the Navy, but to you, 
              to our family, and to making the world a little better than we found it. 
              You are my anchor, my inspiration, and my greatest source of pride."
            </blockquote>
            
            <div className="text-right mt-6">
              <span className="text-gold-300">— With all my love, Mom</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalSection;