import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Edit2, Trash2, PlusCircle, ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventModal from '../components/EventModal';
import TodaysEvents from '../components/TodaysEvents';
import { useEvents } from '../context/EventContext';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Event form states
  const [eventTitle, setEventTitle] = useState('');
  const [eventTime, setEventTime] = useState('12:00');
  const [eventEndTime, setEventEndTime] = useState('13:00');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventColor, setEventColor] = useState('bg-gradient-to-r from-pink-400 to-rose-500');
  const [eventCategory, setEventCategory] = useState('work');

  const { calendarEvents, getEventsForDate, addEvent, updateEvent, deleteEvent } = useEvents();

  const categories = [
    { id: 'work', label: 'Work', color: 'from-blue-400 to-blue-600' },
    { id: 'personal', label: 'Personal', color: 'from-pink-400 to-pink-600' },
    { id: 'health', label: 'Health', color: 'from-red-400 to-red-600' },
    { id: 'social', label: 'Social', color: 'from-purple-400 to-purple-600' },
    { id: 'important', label: 'Important', color: 'from-yellow-400 to-yellow-600' }
  ];

  const eventColors = [
    'bg-gradient-to-r from-pink-400 to-rose-500',
    'bg-gradient-to-r from-blue-400 to-blue-600',
    'bg-gradient-to-r from-purple-400 to-purple-600',
    'bg-gradient-to-r from-pink-500 to-pink-600',
    'bg-gradient-to-r from-yellow-400 to-yellow-600',
    'bg-gradient-to-r from-red-400 to-red-600',
    'bg-gradient-to-r from-indigo-400 to-indigo-600',
    'bg-gradient-to-r from-orange-400 to-orange-600'
  ];

  const resetEventForm = () => {
    setEventTitle('');
    setEventTime('12:00');
    setEventEndTime('13:00');
    setEventDescription('');
    setEventLocation('');
    setEventColor('bg-gradient-to-r from-pink-400 to-rose-500');
    setEventCategory('work');
  };

  const handleCloseModal = () => {
    setShowEventModal(false);
    setEditingEvent(null);
    resetEventForm();
  };

  const handleSaveEvent = (recurrenceData) => {
    if (!eventTitle.trim()) return;

    const eventDate = selectedDate.toDateString();

    if (editingEvent) {
      const updatedEvent = { 
        title: eventTitle,
        time: eventTime,
        endTime: eventEndTime,
        description: eventDescription,
        location: eventLocation,
        color: eventColor,
        category: eventCategory,
        id: editingEvent.id,
        date: eventDate,
        updatedAt: new Date().toISOString(),
        recurrence: recurrenceData.recurrence,
        recurrenceEndDate: recurrenceData.recurrenceEndDate,
        recurrenceCount: recurrenceData.recurrenceCount
      };

      updateEvent(updatedEvent);
    } else {
      const newEvent = {
        title: eventTitle,
        time: eventTime,
        endTime: eventEndTime,
        description: eventDescription,
        location: eventLocation,
        color: eventColor,
        category: eventCategory,
        id: Date.now().toString(),
        date: eventDate,
        createdAt: new Date().toISOString(),
        recurrence: recurrenceData.recurrence,
        recurrenceEndDate: recurrenceData.recurrenceEndDate,
        recurrenceCount: recurrenceData.recurrenceCount
      };

      addEvent(newEvent);
    }
    
    handleCloseModal();
  };

  const isFormValid = () => {
    const start = timeToMinutes(eventTime);
    const end = timeToMinutes(eventEndTime);
    return eventTitle.trim() !== '' && eventTime !== '' && eventEndTime !== '' && end > start;
  };

  const timeToMinutes = (time) => {
    if (!time) return 0;
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  useEffect(() => {
    if (editingEvent) {
      setEventTitle(editingEvent.title || '');
      setEventTime(editingEvent.time || '12:00');
      setEventEndTime(editingEvent.endTime || '13:00');
      setEventDescription(editingEvent.description || '');
      setEventLocation(editingEvent.location || '');
      setEventColor(editingEvent.color || 'bg-gradient-to-r from-pink-400 to-rose-500');
      setEventCategory(editingEvent.category || 'work');
    }
  }, [editingEvent]);

  const instructions = [
    {
      title: "Quick Start Guide",
      items: [
        "Click 'Add Event' to create new events for today",
        "Use Edit button to modify existing events",
        "Delete unwanted events with the trash icon",
        "Navigate to Calendar page for full month view"
      ]
    },
    {
      title: "Pro Tips",
      items: [
        "Set different colors for event categories",
        "Add locations to track where events happen",
        "Use time slots to avoid conflicts",
        "Check your profile page for settings"
      ]
    }
  ];

  const today = new Date();
  const todaysEvents = getEventsForDate(today);

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900' : 'bg-gradient-to-br from-pink-50 via-white to-pink-50'} relative overflow-hidden`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today's Events Section */}
          <div className={`${isDarkMode ? 'bg-purple-900/40' : 'bg-white/40'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'}`}>
                Today's Events
              </h2>
              <button
                onClick={() => {
                  setSelectedDate(new Date());
                  setShowEventModal(true);
                }}
                className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <PlusCircle className="w-4 h-4 inline mr-2" />
                Add Event
              </button>
            </div>
            
            <TodaysEvents
              calendarEvents={calendarEvents}
              isDarkMode={isDarkMode}
              setEditingEvent={setEditingEvent}
              setSelectedDate={setSelectedDate}
              setShowEventModal={setShowEventModal}
              handleDeleteEvent={deleteEvent}
              getEventsForDate={getEventsForDate}
            />

            <div className="mt-6 pt-6 border-t border-pink-400/20">
              <Link
                to="/calendar"
                className={`flex items-center justify-center space-x-2 ${isDarkMode ? 'text-pink-300 hover:text-pink-200' : 'text-pink-600 hover:text-pink-700'} transition-colors`}
              >
                <span>View Full Calendar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="space-y-6">
            {instructions.map((section, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-purple-900/40' : 'bg-white/40'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6`}
              >
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-4`}>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 ${isDarkMode ? 'text-pink-400' : 'text-pink-500'} mt-0.5 flex-shrink-0`} />
                      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Quick Stats */}
            <div className={`${isDarkMode ? 'bg-purple-900/40' : 'bg-white/40'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-4`}>
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                    {todaysEvents.length}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Today's Events
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                    {calendarEvents.length}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Events
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Modal */}
      <EventModal
        isOpen={showEventModal}
        onClose={handleCloseModal}
        editingEvent={editingEvent}
        selectedDate={selectedDate}
        isDarkMode={isDarkMode}
        eventTitle={eventTitle}
        setEventTitle={setEventTitle}
        eventTime={eventTime}
        setEventTime={setEventTime}
        eventEndTime={eventEndTime}
        setEventEndTime={setEventEndTime}
        eventDescription={eventDescription}
        setEventDescription={setEventDescription}
        eventLocation={eventLocation}
        setEventLocation={setEventLocation}
        eventCategory={eventCategory}
        setEventCategory={setEventCategory}
        eventColor={eventColor}
        setEventColor={setEventColor}
        onSave={handleSaveEvent}
        isFormValid={isFormValid}
        categories={categories}
        eventColors={eventColors}
        setIsHovering={() => {}}
      />

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Dashboard;

