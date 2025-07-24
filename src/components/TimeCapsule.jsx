import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUnlock, FiClock, FiMail, FiX } = FiIcons;

const timeCapsuleItems = [
  {
    id: 1,
    title: 'Letter to Future Supply Officers',
    recipient: 'Next Generation Leaders',
    unlockDate: new Date('2025-05-15'),
    preview: 'Wisdom and guidance for those who will carry the Supply Corps forward...',
    isLocked: true,
    content: `Dear Future Supply Corps Officers,

As I write this letter, I'm reflecting on 17 years of service and the incredible journey that brought me to this moment of retirement. You are inheriting a proud tradition of logistical excellence that spans generations of naval service.

The Supply Corps has always been the backbone of naval operations. We are the ones who ensure that ships can sail, aircraft can fly, and sailors can focus on their missions knowing that their basic needs are met. This responsibility is both humbling and empowering.

My advice to you:

1. Never underestimate the strategic importance of logistics. Every meal you serve, every part you procure, every contract you manage has a direct impact on naval readiness.

2. Lead with empathy. Your sailors are not just numbers on a roster—they are individuals with unique strengths, challenges, and aspirations. Invest in their growth.

3. Embrace innovation. The supply chain of tomorrow will look different from today. Be willing to challenge traditional methods and implement new technologies.

4. Remember that integrity is non-negotiable. In a field where you manage millions of dollars and critical resources, your character is your most valuable asset.

5. Build bridges. Work closely with your operational counterparts. The best supply officers are those who understand the mission beyond the warehouse.

The challenges you'll face may be different from mine, but the core principles remain the same: excellence, accountability, and service before self.

Fair winds and following seas,
LCDR Melissa A. Reyes, SC, USN (Ret.)`
  },
  {
    id: 2,
    title: 'Family Time Capsule',
    recipient: 'Emma & Michael',
    unlockDate: new Date('2030-12-25'),
    preview: 'Memories, lessons, and love from your mother\'s naval journey...',
    isLocked: true,
    content: `My Dearest Emma and Michael,

If you're reading this, you've reached an age where you can truly understand the complexity of the choices your mother made during her naval career. I wanted to capture these thoughts while the memories are still fresh, so you can understand not just what I did, but why I did it.

Emma, you were just two years old when I received orders to Japan. I remember holding you at the airport, wondering if I was making the right choice. But I also remember the pride in your eyes years later when you saw me in my dress blues at the Navy Ball. You taught me that children are more resilient than we give them credit for, and that love transcends distance.

Michael, you were born during my shore duty in San Diego, and you've never known a life without the Navy. You've moved five times, attended three different schools, and made friends all over the world. You've shown me that home isn't a place—it's the people you love.

Both of you have sacrificed for my career in ways that I hope you'll understand were worth it. Every deployment, every long day at work, every time I missed a school event because of duty—these weren't choices I made lightly. I served because I believed in something bigger than myself, and I wanted to show you that women can lead, can serve, and can make a difference.

But more than anything, I want you to know that you were always my first priority. Every decision I made was filtered through the question: "What kind of example am I setting for my children?" I hope the answer is one of service, integrity, and the courage to pursue your dreams.

The Navy gave me a career, but you gave me purpose.

All my love, always and forever,
Mom`
  },
  {
    id: 3,
    title: 'Retirement Reflection',
    recipient: 'Future Self',
    unlockDate: new Date('2027-06-01'),
    preview: 'Personal reflections on a career of service and what comes next...',
    isLocked: true,
    content: `Dear Future Melissa,

As I write this on my retirement day, I'm filled with a mixture of pride, nostalgia, and excitement for what lies ahead. I hope that when you read this letter, you can look back on this transition with the same sense of fulfillment I feel today.

The Navy gave me more than I ever expected when I first raised my right hand 17 years ago. It gave me:

- Leadership skills that I never knew I possessed
- Friendships that will last a lifetime
- The opportunity to serve something greater than myself
- Confidence to tackle any challenge
- A global perspective on service and sacrifice

But most importantly, it gave me the chance to make a difference in the lives of the sailors I led and the operations I supported.

I hope that in the years since retirement, you've:

- Continued to serve your community in meaningful ways
- Maintained the friendships forged in uniform
- Used your leadership skills to mentor the next generation
- Found new challenges that utilize your naval experience
- Remained proud of your service

Remember the lessons you learned:
- Integrity is everything
- Leadership is about people, not positions
- Excellence is a habit, not an accident
- Service before self is not just a motto—it's a way of life

I hope you've found peace in the transition from active duty to civilian life, and that you've discovered new ways to contribute to the world around you.

Thank you for your service, and congratulations on the journey that brought you here.

With respect and admiration,
Your Naval Self`
  }
];

const TimeCapsule = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const isUnlocked = (unlockDate) => {
    return new Date() >= unlockDate;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
            Time Capsule
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-logistics-200 max-w-2xl mx-auto">
            Sealed messages and reflections, to be opened at special moments in time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {timeCapsuleItems.map((item, index) => {
            const unlocked = isUnlocked(item.unlockDate);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-navy-800 p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  unlocked 
                    ? 'border-gold-500 hover:border-gold-400' 
                    : 'border-logistics-400 hover:border-logistics-300'
                }`}
                onClick={() => unlocked && setSelectedItem(item)}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <SafeIcon 
                    icon={unlocked ? FiUnlock : FiLock} 
                    className={`text-2xl ${unlocked ? 'text-gold-500' : 'text-logistics-400'}`} 
                  />
                  <span className={`text-sm font-medium ${unlocked ? 'text-gold-300' : 'text-logistics-300'}`}>
                    {unlocked ? 'UNLOCKED' : 'SEALED'}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-xl mb-2 text-gold-300">
                  {item.title}
                </h3>
                
                <div className="flex items-center mb-4">
                  <SafeIcon icon={FiMail} className="text-logistics-300 mr-2" />
                  <span className="text-sm text-logistics-300">To: {item.recipient}</span>
                </div>

                <p className={`text-sm mb-4 ${unlocked ? 'text-logistics-200' : 'text-logistics-400'}`}>
                  {item.preview}
                </p>

                {/* Unlock Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <SafeIcon icon={FiClock} className="text-logistics-400 mr-2" />
                    <span className="text-xs text-logistics-400">
                      {unlocked ? 'Unlocked' : 'Unlocks'}: {formatDate(item.unlockDate)}
                    </span>
                  </div>
                  
                  {unlocked && (
                    <span className="text-xs text-gold-500 font-medium">
                      Click to read
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for reading unlocked content */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-navy-800 p-8 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto border border-gold-500/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold text-gold-500">
                    {selectedItem.title}
                  </h3>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="text-logistics-400 hover:text-white transition-colors"
                  >
                    <SafeIcon icon={FiX} className="text-2xl" />
                  </button>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-logistics-300">To: {selectedItem.recipient}</span>
                </div>

                <div className="prose prose-invert max-w-none">
                  <div className="text-logistics-200 leading-relaxed whitespace-pre-line">
                    {selectedItem.content}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-logistics-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-logistics-400">
                      Unlocked: {formatDate(selectedItem.unlockDate)}
                    </span>
                    <SafeIcon icon={FiUnlock} className="text-gold-500" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TimeCapsule;