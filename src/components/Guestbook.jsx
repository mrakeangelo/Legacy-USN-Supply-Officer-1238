import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageCircle, FiUser, FiSend, FiHeart } = FiIcons;

const existingMessages = [
  {
    id: 1,
    name: 'Admiral Sarah Chen',
    rank: 'RADM, USN',
    message: 'LCDR Reyes exemplified the very best of naval leadership. Her dedication to excellence in logistics made every operation run smoother. Fair winds and following seas.',
    date: '2024-01-15',
    approved: true
  },
  {
    id: 2,
    name: 'David Rodriguez',
    rank: 'Former Shipmate',
    message: 'Served with Melissa aboard Enterprise. She always had our backs and made sure we were taken care of. A true leader and friend.',
    date: '2024-01-10',
    approved: true
  },
  {
    id: 3,
    name: 'Captain Michael Thompson',
    rank: 'CO, USS Bonhomme Richard',
    message: 'Outstanding supply officer who transformed our logistics operations. Her innovation and leadership were instrumental to our mission success.',
    date: '2024-01-08',
    approved: true
  },
  {
    id: 4,
    name: 'Lisa Martinez',
    rank: 'Navy Spouse',
    message: 'Melissa was an inspiration to all military families. She showed us how to balance service and family with grace and strength.',
    date: '2024-01-05',
    approved: true
  }
];

const Guestbook = () => {
  const [messages, setMessages] = useState(existingMessages);
  const [newMessage, setNewMessage] = useState({
    name: '',
    rank: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMessage(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.name || !newMessage.message) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const message = {
        id: messages.length + 1,
        ...newMessage,
        date: new Date().toISOString().split('T')[0],
        approved: false // Would need admin approval
      };

      setMessages(prev => [message, ...prev]);
      setNewMessage({ name: '', rank: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
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
            Guestbook
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-logistics-400 max-w-2xl mx-auto">
            Share your memories, tributes, and messages of appreciation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="font-display text-2xl font-bold text-navy-900 mb-6 flex items-center">
              <SafeIcon icon={FiMessageCircle} className="text-gold-500 mr-3" />
              Leave a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newMessage.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-logistics-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    Rank/Title
                  </label>
                  <input
                    type="text"
                    name="rank"
                    value={newMessage.rank}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-logistics-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="e.g., CDR, USN (Ret.)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={newMessage.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-logistics-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                  placeholder="Share your memories, appreciation, or tribute..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !newMessage.name || !newMessage.message}
                className="w-full bg-gold-500 text-navy-900 py-3 px-6 rounded-lg font-semibold hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <SafeIcon icon={FiSend} className="mr-2" />
                    Submit Message
                  </>
                )}
              </button>

              <p className="text-sm text-logistics-400 text-center">
                Messages are reviewed before publication
              </p>
            </form>
          </motion.div>

          {/* Message Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-bold text-navy-900 mb-6 flex items-center">
              <SafeIcon icon={FiHeart} className="text-coral-300 mr-3" />
              Messages of Appreciation
            </h3>

            <div className="space-y-6 max-h-96 overflow-y-auto">
              {messages.filter(msg => msg.approved).map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gold-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-navy-900 p-2 rounded-full mr-3">
                        <SafeIcon icon={FiUser} className="text-gold-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">{message.name}</h4>
                        {message.rank && (
                          <p className="text-sm text-logistics-400">{message.rank}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-logistics-400">{message.date}</span>
                  </div>

                  <blockquote className="text-logistics-400 italic leading-relaxed">
                    "{message.message}"
                  </blockquote>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-navy-900 text-white p-6 rounded-lg">
              <h4 className="font-semibold text-gold-500 mb-4">Guestbook Statistics</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gold-500">
                    {messages.filter(m => m.approved).length}
                  </div>
                  <div className="text-sm text-logistics-200">Published Messages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold-500">
                    {messages.filter(m => !m.approved).length}
                  </div>
                  <div className="text-sm text-logistics-200">Pending Review</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;