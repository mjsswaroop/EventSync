import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, PlusCircle, Edit2, Trash2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventModal from '../components/EventModal';
import { useEvents } from '../context/EventContext';

const Calendar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isHovering, setIsHovering] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);

  // Event form states
  const [eventTitle, setEventTitle] = useState('');
  const [eventTime, setEventTime] = useState('12:00');
  const [eventEndTime, setEventEndTime] = useState('13:00');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventColor, setEventColor] = useState('bg-gradient-to-r from-pink-400 to-rose-500');
  const [eventCategory, setEventCategory] = useState('work');

  const { calendarEvents, getEventsForDate, addEvent, updateEvent, deleteEvent, getAllRecurringEvents } = useEvents();

  // Debug recurring events
  useEffect(() => {
    const recurringEvents = getAllRecurringEvents();
    console.log('Recurring Events:', recurringEvents);
  }, [calendarEvents]);

  // Force calendar to update when events change
  useEffect(() => {
    console.log('Calendar Events Updated:', calendarEvents);
    setForceUpdate(prev => prev + 1);
  }, [calendarEvents]);

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
    console.log('Saving event with recurrence:', recurrenceData);

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

      console.log('Updating event:', updatedEvent);
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

      console.log('Adding new event:', newEvent);
      addEvent(newEvent);
    }
    
    handleCloseModal();
    // Force calendar to update
    setForceUpdate(prev => prev + 1);
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

  const getDaysInMonth = useCallback((date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowEventModal(true);
  };

  const handleEventClick = (event, date) => {
    setEditingEvent(event);
    setSelectedDate(date);
    setShowEventModal(true);
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900' : 'bg-gradient-to-br from-pink-50 via-white to-pink-50'} relative overflow-hidden`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className={`${isDarkMode ? 'bg-purple-900/40' : 'bg-white/40'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePrevMonth}
                className={`p-2 rounded-full ${isDarkMode ? 'text-pink-300 hover:bg-pink-400/20' : 'text-pink-600 hover:bg-pink-100'} transition-colors`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'}`}>
                {formatDate(currentDate)}
              </h2>
              <button
                onClick={handleNextMonth}
                className={`p-2 rounded-full ${isDarkMode ? 'text-pink-300 hover:bg-pink-400/20' : 'text-pink-600 hover:bg-pink-100'} transition-colors`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
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

          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day) => (
              <div
                key={day}
                className={`text-center py-2 font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'}`}
              >
                {day}
              </div>
            ))}
            {days.map((date, index) => {
              const isToday = date && date.toDateString() === new Date().toDateString();
              const isCurrentMonth = date && date.getMonth() === currentDate.getMonth();
              const events = date ? getEventsForDate(date) : [];

              return (
                <div
                  key={`${index}-${forceUpdate}`}
                  onClick={() => date && handleDateClick(date)}
                  className={`min-h-[100px] p-2 rounded-xl border-2 ${
                    isDarkMode
                      ? isToday
                        ? 'border-pink-400 bg-pink-400/20'
                        : 'border-pink-400/30 hover:border-pink-400/50'
                      : isToday
                      ? 'border-pink-500 bg-pink-100'
                      : 'border-pink-200 hover:border-pink-300'
                  } ${!isCurrentMonth ? 'opacity-50' : ''} transition-all duration-300 cursor-pointer`}
                >
                  <div className={`text-right ${isDarkMode ? 'text-pink-300' : 'text-pink-700'}`}>
                    {date ? date.getDate() : ''}
                  </div>
                  <div className="mt-1 space-y-1">
                    {events.map((event) => (
                      <div
                        key={`${event.id}-${forceUpdate}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEventClick(event, date);
                        }}
                        className={`${event.color} text-white text-xs p-1 rounded truncate cursor-pointer hover:opacity-90 transition-opacity`}
                      >
                        {event.time} - {event.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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
        setIsHovering={setIsHovering}
      />

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Calendar;