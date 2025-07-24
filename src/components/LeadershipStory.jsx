import React from 'react';
import { motion } from 'framer-motion';

const LeadershipStory = () => {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Why I Chose Supply
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="text-lg leading-relaxed space-y-6">
            <p>
              When I first stepped into the Supply Corps, I didn't just see inventory sheets and requisition forms. 
              I saw the heartbeat of naval operations—the intricate dance of logistics that keeps our fleet 
              mission-ready and our sailors fed, equipped, and prepared for whatever challenges lay ahead.
            </p>

            <blockquote className="border-l-4 border-gold-500 pl-6 italic text-xl text-gold-300 my-8">
              "Order is operational power. Every meal served, every part delivered, 
              every contract executed is a force multiplier for naval readiness."
            </blockquote>

            <p>
              Leading in the supply domain taught me that logistics isn't just about moving things from point A 
              to point B. It's about understanding the human element—knowing that behind every requisition is a 
              sailor who needs that part to keep their equipment running, or a crew that depends on a well-managed 
              galley to maintain morale during long deployments.
            </p>

            <p>
              Throughout my career, I've had the privilege of leading diverse teams across multiple platforms—from 
              aircraft carriers to expeditionary units. Each assignment reinforced my belief that excellence in 
              logistics requires not just technical expertise, but emotional intelligence, cultural awareness, 
              and the ability to inspire others to take ownership of the mission.
            </p>

            <p>
              The Supply Corps gave me the opportunity to be both a strategic thinker and a hands-on leader. 
              Whether negotiating complex contracts, managing multi-million dollar budgets, or ensuring food 
              service operations met the highest standards, every day presented new challenges that demanded 
              innovation, precision, and unwavering commitment to our sailors.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-navy-800 p-6 rounded-lg border border-gold-500/20"
          >
            <h3 className="font-display text-2xl font-bold text-gold-500 mb-4">Leadership Philosophy</h3>
            <p className="text-lg">
              "True leadership in logistics means empowering your team to see beyond the transaction to the 
              transformation—how their precision and dedication directly impacts naval readiness and the 
              safety of their shipmates."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipStory;