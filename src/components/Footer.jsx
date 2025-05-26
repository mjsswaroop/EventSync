import React from 'react';
import { Heart } from 'lucide-react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`${isDarkMode ? 'bg-purple-900/40' : 'bg-white/40'} backdrop-blur-xl border-t-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} mt-12`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-4`}>
              EventSync
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
              Your ultimate event management solution. Organize, track, and never miss important moments.
            </p>
          </div>
          
          <div>
            <h4 className={`text-md font-semibold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-3`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className={`${isDarkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'} text-sm transition-colors`}>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/calendar" className={`${isDarkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'} text-sm transition-colors`}>
                  Calendar
                </a>
              </li>
              <li>
                <a href="/profile" className={`${isDarkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'} text-sm transition-colors`}>
                  Profile
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className={`text-md font-semibold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-3`}>
              About Us
            </h4>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-3`}>
              We're passionate about helping you stay organized and never miss important events.
            </p>
            <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
              Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for productivity
            </div>
          </div>
        </div>
        
        <div className={`border-t ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} mt-8 pt-6 text-center`}>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
            © 2025 EventSync. This page belongs to Jyothi Sai Swaroop Mareedu.  Created for Flam Assignment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;