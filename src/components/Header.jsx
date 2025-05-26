import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Home, User, Sun, Moon } from 'lucide-react';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`${isDarkMode ? 'bg-purple-900/60' : 'bg-white/60'} backdrop-blur-xl border-b-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} sticky top-0 z-40`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${isDarkMode ? 'from-pink-400 to-pink-500' : 'from-pink-500 to-pink-600'} rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                EventFlow
              </h1>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Manage your events with style
              </p>
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive('/') 
                  ? `${isDarkMode ? 'bg-pink-400/20 text-pink-400' : 'bg-pink-500/20 text-pink-600'}` 
                  : `${isDarkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'}`
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/calendar"
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive('/calendar') 
                  ? `${isDarkMode ? 'bg-pink-400/20 text-pink-400' : 'bg-pink-500/20 text-pink-600'}` 
                  : `${isDarkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'}`
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Calendar</span>
            </Link>
            
            <Link
              to="/profile"
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive('/profile') 
                  ? `${isDarkMode ? 'bg-pink-400/20 text-pink-400' : 'bg-pink-500/20 text-pink-600'}` 
                  : `${isDarkMode ? 'text-gray-300 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'}`
              }`}
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
          </nav>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-3 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-yellow-400' : 'bg-black/10 hover:bg-black/20 text-gray-600'} rounded-xl transition-all duration-300 hover:scale-110`}
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;