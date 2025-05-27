import React from 'react';
import { Clock, MapPin, Edit2, Trash2 } from 'lucide-react';
import { useEvents } from '../context/EventContext';

const TodaysEvents = ({ isDarkMode, setEditingEvent, setSelectedDate, setShowEventModal, handleDeleteEvent }) => {
  const { getEventsForDate } = useEvents();
  const today = new Date();
  const events = getEventsForDate(today);

  if (events.length === 0) {
    return (
      <div className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <p>No events scheduled for today</p>
        <p className="text-sm mt-2">Click the Add Event button to create one!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div
          key={event.id}
          className={`${event.color} rounded-xl p-4 text-white shadow-lg transition-all duration-300 hover:scale-[1.02]`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm">
                  {event.time} - {event.endTime}
                </span>
              </div>
              {event.location && (
                <div className="flex items-center space-x-2 mt-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
              )}
              {event.description && (
                <p className="mt-2 text-sm opacity-90">{event.description}</p>
              )}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setEditingEvent(event);
                  setSelectedDate(today);
                  setShowEventModal(true);
                }}
                className="p-1 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDeleteEvent(event.id)}
                className="p-1 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodaysEvents; 