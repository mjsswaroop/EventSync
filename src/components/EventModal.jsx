

import React from 'react';
import { X, Calendar, Repeat, Trash2 } from 'lucide-react';

const EventModal = ({
  isOpen,
  onClose,
  editingEvent,
  selectedDate,
  isDarkMode,
  eventTitle,
  setEventTitle,
  eventTime,
  setEventTime,
  eventEndTime,
  setEventEndTime,
  eventDescription,
  setEventDescription,
  eventLocation,
  setEventLocation,
  eventCategory,
  setEventCategory,
  eventColor,
  setEventColor,
  eventRecurrence,
  setEventRecurrence,
  recurrenceEndDate,
  setRecurrenceEndDate,
  recurrenceCount,
  setRecurrenceCount,
  onSave,
  onDelete,
  isFormValid,
  categories = [],
  eventColors = [],
  recurrenceOptions = [],
  setIsHovering = () => {}
}) => {
  if (!isOpen) return null;

  const formatDateForInput = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  };

  const formatDateDisplay = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`${isDarkMode ? 'bg-purple-900/90' : 'bg-white/90'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`p-2 ${isDarkMode ? 'bg-pink-400/20' : 'bg-pink-100'} rounded-xl`}>
              <Calendar className={`w-6 h-6 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`} />
            </div>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'}`}>
              {editingEvent ? 'Edit Event' : 'Create New Event'}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {editingEvent && (
              <button
                onClick={() => {
                  onDelete(editingEvent.id);
                  onClose();
                }}
                className={`p-2 ${isDarkMode ? 'text-red-400 hover:bg-red-500/20' : 'text-red-600 hover:bg-red-500/20'} rounded-xl transition-colors`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className={`p-2 ${isDarkMode ? 'text-pink-300 hover:bg-pink-500/20' : 'text-pink-700 hover:bg-pink-500/20'} rounded-xl transition-colors`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Event Title */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
              Event Title *
            </label>
            <input
              type="text"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
              placeholder="Enter event title..."
            />
          </div>

          {/* Date Selection */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
              Event Date *
            </label>
            <div className={`p-3 ${isDarkMode ? 'bg-purple-800/30 border-pink-400/20' : 'bg-pink-50/50 border-pink-200'} border-2 rounded-xl`}>
              <div className={`text-sm ${isDarkMode ? 'text-pink-200' : 'text-pink-800'} font-medium`}>
                {formatDateDisplay(selectedDate)}
              </div>
            </div>
          </div>

          {/* Time Range */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                Start Time *
              </label>
              <input
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                End Time *
              </label>
              <input
                type="time"
                value={eventEndTime}
                onChange={(e) => setEventEndTime(e.target.value)}
                className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
              />
            </div>
          </div>

          {/* Category and Color */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                Category
              </label>
              <select
                value={eventCategory}
                onChange={(e) => setEventCategory(e.target.value)}
                className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                Color
              </label>
              <div className="grid grid-cols-4 gap-2">
                {eventColors.slice(0, 4).map((color) => (
                  <button
                    key={color}
                    onClick={() => setEventColor(color)}
                    className={`w-full h-12 ${color} rounded-xl transition-all duration-300 hover:scale-105 ${eventColor === color ? 'ring-2 ring-pink-400 ring-offset-2' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Recurrence Section */}
          <div className={`p-4 ${isDarkMode ? 'bg-purple-800/30' : 'bg-pink-50/50'} rounded-xl border-2 ${isDarkMode ? 'border-pink-400/20' : 'border-pink-200'}`}>
            <div className="flex items-center gap-2 mb-4">
              <Repeat className={`w-5 h-5 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`} />
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'}`}>
                Recurrence Settings
              </h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                  Repeat Pattern
                </label>
                <select
                  value={eventRecurrence}
                  onChange={(e) => setEventRecurrence(e.target.value)}
                  className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-white border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
                >
                  {recurrenceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {eventRecurrence && eventRecurrence !== 'none' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                      End Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formatDateForInput(recurrenceEndDate)}
                      onChange={(e) => setRecurrenceEndDate(e.target.value)}
                      min={formatDateForInput(selectedDate)}
                      className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-white border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
                      Max Occurrences
                    </label>
                    <input
                      type="number"
                      value={recurrenceCount}
                      onChange={(e) => setRecurrenceCount(Math.max(1, parseInt(e.target.value) || 1))}
                      min="1"
                      max="365"
                      className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-white border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
                    />
                  </div>
                </div>
              )}

              {eventRecurrence && eventRecurrence !== 'none' && (
                <div className={`p-3 ${isDarkMode ? 'bg-purple-700/30' : 'bg-pink-100/50'} rounded-lg`}>
                  <p className={`text-sm ${isDarkMode ? 'text-pink-200' : 'text-pink-800'}`}>
                    <strong>Preview:</strong> This event will repeat {eventRecurrence === 'daily' ? 'every day' : 
                    eventRecurrence === 'weekly' ? 'every week' : 
                    eventRecurrence === 'monthly' ? 'every month' : 
                    eventRecurrence === 'yearly' ? 'every year' : ''} 
                    {recurrenceEndDate ? ` until ${new Date(recurrenceEndDate).toLocaleDateString()}` : 
                    ` for ${recurrenceCount} occurrence${recurrenceCount > 1 ? 's' : ''}`}.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
              Description
            </label>
            <textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              rows={3}
              className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none`}
              placeholder="Event description..."
            />
          </div>

          {/* Location */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
              Location
            </label>
            <input
              type="text"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
              placeholder="Event location..."
            />
          </div>

          {/* Additional Color Options */}
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
              More Colors
            </label>
            <div className="grid grid-cols-8 gap-2">
              {eventColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setEventColor(color)}
                  className={`w-full h-10 ${color} rounded-lg transition-all duration-300 hover:scale-105 ${eventColor === color ? 'ring-2 ring-pink-400 ring-offset-1' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t-2 border-pink-400/20">
            <button
              onClick={onClose}
              className={`flex-1 px-6 py-3 ${isDarkMode ? 'bg-purple-700/50 hover:bg-purple-700/70 text-pink-300' : 'bg-pink-100 hover:bg-pink-200 text-pink-700'} rounded-xl font-medium transition-all duration-300`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              disabled={!isFormValid()}
              className={`flex-1 px-6 py-3 ${isFormValid() 
                ? 'bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white hover:scale-105' 
                : 'bg-gray-400 text-gray-600 cursor-not-allowed'
              } rounded-xl font-medium transition-all duration-300`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {editingEvent ? 'Update Event' : 'Create Event'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;