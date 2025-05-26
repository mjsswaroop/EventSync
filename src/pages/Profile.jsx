import React, { useState } from 'react';
import { User, Settings, Bell, Palette, Save, Camera, Mail, Phone, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [userInfo, setUserInfo] = useState({
    name: 'Jyothi Sai Swaroop Mareedu',
    email: 'swaroop@example.com',
    phone: '9440662460',
    location: 'Vijayawada, AP',
    bio: 'Event planning enthusiast who loves staying organized and productive.',
  });
  const [preferences, setPreferences] = useState({
    notifications: true,
    emailReminders: true,
    darkMode: true,
    defaultEventDuration: 60,
    weekStartsOn: 'sunday'
  });

  const handleUserInfoChange = (field, value) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const handlePreferenceChange = (field, value) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
    if (field === 'darkMode') {
      setIsDarkMode(value);
    }
  };

  const handleSaveProfile = () => {
    // In a real app, this would save to a backend
    localStorage.setItem('userProfile', JSON.stringify({ userInfo, preferences }));
    alert('Profile saved successfully!');
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900' : 'bg-gradient-to-br from-pink-50 via-white to-pink-50'} relative overflow-hidden`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className={`${isDarkMode ? 'bg-purple-900/40' : 'bg-white/40'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6`}>
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                  <User className="w-16 h-16 text-white" />
                </div>
                <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                {userInfo.name}
              </h2>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                Event Management Pro
              </p>
              
              <div className="space-y-3 text-sm">
                <div className={`flex items-center justify-center space-x-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Mail className="w-4 h-4" />
                  <span>{userInfo.email}</span>
                </div>
                <div className={`flex items-center justify-center space-x-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Phone className="w-4 h-4" />
                  <span>{userInfo.phone}</span>
                </div>
                <div className={`flex items-center justify-center space-x-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <MapPin className="w-4 h-4" />
                  <span>{userInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className={`${isDarkMode ? 'bg-purple-900/40' : 'bg-white/40'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-6 flex items-center`}>
                <User className="w-5 h-5 mr-2" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => handleUserInfoChange('name', e.target.value)}
                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => handleUserInfoChange('email', e.target.value)}
                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={userInfo.phone}
                    onChange={(e) => handleUserInfoChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                    Location
                  </label>
                  <input
                    type="text"
                    value={userInfo.location}
                    onChange={(e) => handleUserInfoChange('location', e.target.value)}
                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                  Bio
                </label>
                <textarea
                  value={userInfo.bio}
                  onChange={(e) => handleUserInfoChange('bio', e.target.value)}
                  rows={3}
                  className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none`}
                  placeholder="Tell us about yourself..."
                />
              </div>
            </div>

            {/* Preferences */}
            <div className={`${isDarkMode ? 'bg-purple-900/40' : 'bg-white/40'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-6 flex items-center`}>
                <Settings className="w-5 h-5 mr-2" />
                Preferences
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Push Notifications
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Receive notifications for upcoming events
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('notifications', !preferences.notifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      preferences.notifications ? 'bg-pink-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        preferences.notifications ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Email Reminders
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Get email reminders before events
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('emailReminders', !preferences.emailReminders)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      preferences.emailReminders ? 'bg-pink-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        preferences.emailReminders ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                    Default Event Duration (minutes)
                  </label>
                  <select
                    value={preferences.defaultEventDuration}
                    onChange={(e) => handlePreferenceChange('defaultEventDuration', parseInt(e.target.value))}
                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
                  >
                    <option value={30}>30 minutes</option>
                    <option value={60}>1 hour</option>
                    <option value={90}>1.5 hours</option>
                    <option value={120}>2 hours</option>
                  </select>
                </div>
                
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                    Week Starts On
                  </label>
                  <select
                    value={preferences.weekStartsOn}
                    onChange={(e) => handlePreferenceChange('weekStartsOn', e.target.value)}
                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
                  >
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSaveProfile}
                className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>Save Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Profile;