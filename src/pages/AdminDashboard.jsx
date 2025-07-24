import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiLock, FiEdit, FiImage, FiMessageSquare, FiClock, FiLogOut } = FiIcons;

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple demo authentication
    if (credentials.email === 'admin@navy-tribute.com' && credentials.password === 'supply2024') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Use admin@navy-tribute.com / supply2024');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4"
        >
          <div className="text-center mb-8">
            <SafeIcon icon={FiLock} className="text-navy-900 text-4xl mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-navy-900">Admin Access</h2>
            <p className="text-logistics-400 mt-2">Authorized personnel only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className="w-full px-4 py-3 border border-logistics-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                placeholder="admin@navy-tribute.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-4 py-3 border border-logistics-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold-500 text-navy-900 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
            >
              Access Dashboard
            </button>
          </form>

          <div className="mt-6 p-4 bg-logistics-100 rounded-lg">
            <p className="text-sm text-logistics-400">
              <strong>Demo Credentials:</strong><br />
              Email: admin@navy-tribute.com<br />
              Password: supply2024
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-logistics-100">
      {/* Header */}
      <header className="bg-navy-900 text-white p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <SafeIcon icon={FiUser} className="text-gold-500 text-2xl mr-3" />
            <div>
              <h1 className="font-display text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-logistics-200">Content Management System</p>
            </div>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center text-logistics-200 hover:text-white transition-colors"
          >
            <SafeIcon icon={FiLogOut} className="mr-2" />
            Logout
          </button>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Timeline Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gold-500"
          >
            <SafeIcon icon={FiEdit} className="text-gold-500 text-2xl mb-4" />
            <h3 className="font-semibold text-lg text-navy-900 mb-2">Timeline Editor</h3>
            <p className="text-sm text-logistics-400 mb-4">Manage career milestones and events</p>
            <button className="w-full bg-gold-500 text-navy-900 py-2 rounded font-medium hover:bg-gold-400 transition-colors">
              Edit Timeline
            </button>
          </motion.div>

          {/* Gallery Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-coral-300"
          >
            <SafeIcon icon={FiImage} className="text-coral-300 text-2xl mb-4" />
            <h3 className="font-semibold text-lg text-navy-900 mb-2">Photo Gallery</h3>
            <p className="text-sm text-logistics-400 mb-4">Upload and organize mission photos</p>
            <button className="w-full bg-coral-300 text-navy-900 py-2 rounded font-medium hover:bg-coral-200 transition-colors">
              Manage Gallery
            </button>
          </motion.div>

          {/* Message Moderation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-navy-800"
          >
            <SafeIcon icon={FiMessageSquare} className="text-navy-800 text-2xl mb-4" />
            <h3 className="font-semibold text-lg text-navy-900 mb-2">Message Moderation</h3>
            <p className="text-sm text-logistics-400 mb-4">Review and approve guestbook entries</p>
            <button className="w-full bg-navy-800 text-white py-2 rounded font-medium hover:bg-navy-700 transition-colors">
              Review Messages
            </button>
          </motion.div>

          {/* Time Capsule Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-logistics-400"
          >
            <SafeIcon icon={FiClock} className="text-logistics-400 text-2xl mb-4" />
            <h3 className="font-semibold text-lg text-navy-900 mb-2">Time Capsule</h3>
            <p className="text-sm text-logistics-400 mb-4">Manage unlock dates and content</p>
            <button className="w-full bg-logistics-400 text-white py-2 rounded font-medium hover:bg-logistics-300 transition-colors">
              Manage Capsule
            </button>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="font-semibold text-xl text-navy-900 mb-6">Recent Activity</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-logistics-100 rounded-lg">
              <div>
                <p className="font-medium text-navy-900">New guestbook message</p>
                <p className="text-sm text-logistics-400">From: Captain James Morrison</p>
              </div>
              <span className="text-xs text-logistics-400">2 hours ago</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-logistics-100 rounded-lg">
              <div>
                <p className="font-medium text-navy-900">Photo uploaded to gallery</p>
                <p className="text-sm text-logistics-400">Category: Shipboard Operations</p>
              </div>
              <span className="text-xs text-logistics-400">1 day ago</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-logistics-100 rounded-lg">
              <div>
                <p className="font-medium text-navy-900">Timeline entry updated</p>
                <p className="text-sm text-logistics-400">2015 - Naval Postgraduate School</p>
              </div>
              <span className="text-xs text-logistics-400">3 days ago</span>
            </div>
          </div>
        </motion.div>

        {/* Site Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-navy-900 text-white p-6 rounded-lg shadow-lg mt-8"
        >
          <h3 className="font-semibold text-xl text-gold-500 mb-6">Site Statistics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-500">1,247</div>
              <div className="text-sm text-logistics-200">Total Visitors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-500">89</div>
              <div className="text-sm text-logistics-200">Guestbook Messages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-500">156</div>
              <div className="text-sm text-logistics-200">Gallery Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-500">3</div>
              <div className="text-sm text-logistics-200">Time Capsules</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;