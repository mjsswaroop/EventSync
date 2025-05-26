import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, PlusCircle, Search, Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventModal from '../components/EventModal';

const Calendar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Event form states
  const [eventTitle, setEventTitle] = useState('');
  const [eventTime, setEventTime] = useState('12:00');
  const [eventEndTime, setEventEndTime] = useState('13:00');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventColor, setEventColor] = useState('bg-gradient-to-r from-pink-400 to-rose-500');
  const [eventCategory, setEventCategory] = useState('work');
  
  // Recurrence states
  const [eventRecurrence, setEventRecurrence] = useState('none');
  const [recurrenceEndDate, setRecurrenceEndDate] = useState('');
  const [recurrenceCount, setRecurrenceCount] = useState(1);

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

  const recurrenceOptions = [
    { value: 'none', label: 'No Repeat' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Load events from localStorage
  useEffect(() => {
    const savedEvents = localStorage.getItem('calendarEvents');
    if (savedEvents) {
      const parsedEvents = JSON.parse(savedEvents);
      console.log('Loaded events in Calendar:', parsedEvents);
      setCalendarEvents(parsedEvents);
    } else {
      // Initialize with some sample events if empty
      const sampleEvents = [
        {
          id: '1',
          title: 'Team Meeting',
          time: '10:00',
          endTime: '11:00',
          description: 'Weekly team sync',
          location: 'Conference Room A',
          color: 'bg-gradient-to-r from-blue-400 to-blue-600',
          category: 'work',
          date: new Date().toDateString(),
          recurrence: 'weekly',
          createdAt: new Date().toISOString()
        }
      ];
      console.log('Initializing Calendar with sample events:', sampleEvents);
      setCalendarEvents(sampleEvents);
    }
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    console.log('Saving events to localStorage:', calendarEvents);
    localStorage.setItem('calendarEvents', JSON.stringify(calendarEvents));
  }, [calendarEvents]);

  // Generate recurring events
  const generateRecurringEvents = (baseEvent, recurrence, endDate, count) => {
    const events = [];
    const startDate = new Date(baseEvent.date);
    let currentDate = new Date(startDate);
    let eventCount = 0;
    const maxDate = endDate ? new Date(endDate) : new Date(startDate.getFullYear() + 2, startDate.getMonth(), startDate.getDate());

    while (currentDate <= maxDate && eventCount < count) {
      if (currentDate.getTime() !== startDate.getTime()) { // Skip the original event
        const newEvent = {
          ...baseEvent,
          id: `${baseEvent.id}_${eventCount}`,
          date: currentDate.toDateString(),
          isRecurring: true,
          parentId: baseEvent.id
        };
        events.push(newEvent);
      }

      // Calculate next occurrence
      switch (recurrence) {
        case 'daily':
          currentDate.setDate(currentDate.getDate() + 1);
          break;
        case 'weekly':
          currentDate.setDate(currentDate.getDate() + 7);
          break;
        case 'monthly':
          currentDate.setMonth(currentDate.getMonth() + 1);
          break;
        case 'yearly':
          currentDate.setFullYear(currentDate.getFullYear() + 1);
          break;
        default:
          return events;
      }
      eventCount++;
    }

    return events;
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Previous month's trailing days
    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevDate = new Date(year, month, -startingDayOfWeek + i + 1);
      days.push({ date: prevDate, isCurrentMonth: false });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ date: new Date(year, month, day), isCurrentMonth: true });
    }

    // Next month's leading days to fill calendar grid
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      const nextDate = new Date(year, month + 1, day);
      days.push({ date: nextDate, isCurrentMonth: false });
    }

    return days;
  };

  const getEventsForDate = (events, date) => {
    if (!date) return [];
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const dateString = dateObj.toDateString();
    
    // Get direct events for this date
    const directEvents = events.filter(event => event.date === dateString);
    
    // Get recurring events that should appear on this date
    const recurringEvents = [];
    events.forEach(event => {
      if (event.recurrence && event.recurrence !== 'none' && !event.isRecurring) {
        const eventDate = new Date(event.date);
        const targetDate = new Date(dateString);
        
        if (eventDate <= targetDate) {
          let shouldInclude = false;
          const daysDiff = Math.floor((targetDate - eventDate) / (1000 * 60 * 60 * 24));
          
          switch (event.recurrence) {
            case 'daily':
              shouldInclude = daysDiff >= 0;
              break;
            case 'weekly':
              shouldInclude = daysDiff >= 0 && daysDiff % 7 === 0;
              break;
            case 'monthly':
              shouldInclude = daysDiff >= 0 && 
                eventDate.getDate() === targetDate.getDate() &&
                (targetDate.getFullYear() > eventDate.getFullYear() || 
                 (targetDate.getFullYear() === eventDate.getFullYear() && targetDate.getMonth() > eventDate.getMonth()));
              break;
            case 'yearly':
              shouldInclude = daysDiff >= 0 && 
                eventDate.getDate() === targetDate.getDate() &&
                eventDate.getMonth() === targetDate.getMonth() &&
                targetDate.getFullYear() > eventDate.getFullYear();
              break;
          }
          
          if (shouldInclude) {
            recurringEvents.push({
              ...event,
              id: `${event.id}_recurring_${dateString}`,
              isRecurring: true,
              parentId: event.id
            });
          }
        }
      }
    });
    
    return [...directEvents, ...recurringEvents];
  };

  const getFilteredEvents = () => {
    let filtered = calendarEvents;
    
    if (filterCategory !== 'all') {
      filtered = filtered.filter(event => event.category === filterCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + direction);
      return newDate;
    });
  };

  const resetEventForm = () => {
    setEventTitle('');
    setEventTime('12:00');
    setEventEndTime('13:00');
    setEventDescription('');
    setEventLocation('');
    setEventColor('bg-gradient-to-r from-pink-400 to-rose-500');
    setEventCategory('work');
    setEventRecurrence('none');
    setRecurrenceEndDate('');
    setRecurrenceCount(1);
  };

  const handleCloseModal = () => {
    setShowEventModal(false);
    setEditingEvent(null);
    resetEventForm();
  };

  const handleSaveEvent = () => {
    if (!eventTitle.trim()) return;

    const eventDate = selectedDate.toDateString();
    console.log('Saving event for date:', eventDate);

    if (editingEvent) {
      const updatedEvent = { 
        title: eventTitle,
        time: eventTime,
        endTime: eventEndTime,
        description: eventDescription,
        location: eventLocation,
        color: eventColor,
        category: eventCategory,
        recurrence: eventRecurrence,
        recurrenceEndDate: recurrenceEndDate,
        recurrenceCount: recurrenceCount,
        id: editingEvent.id,
        date: eventDate,
        updatedAt: new Date().toISOString()
      };

      console.log('Updating event:', updatedEvent);
      setCalendarEvents(prev => {
        const newEvents = prev.map(event => 
          event.id === editingEvent.id ? updatedEvent : event
        );
        console.log('Updated events array:', newEvents);
        return newEvents;
      });
    } else {
      const newEvent = {
        title: eventTitle,
        time: eventTime,
        endTime: eventEndTime,
        description: eventDescription,
        location: eventLocation,
        color: eventColor,
        category: eventCategory,
        recurrence: eventRecurrence,
        recurrenceEndDate: recurrenceEndDate,
        recurrenceCount: recurrenceCount,
        id: Date.now().toString(),
        date: eventDate,
        createdAt: new Date().toISOString()
      };

      console.log('Creating new event:', newEvent);
      setCalendarEvents(prev => {
        const newEvents = [...prev, newEvent];
        console.log('New events array:', newEvents);
        return newEvents;
      });
    }
    
    handleCloseModal();
  };

  const handleDeleteEvent = (eventId) => {
    console.log('Deleting event:', eventId);
    setCalendarEvents(prevEvents => {
      const newEvents = prevEvents.filter(event => event.id !== eventId);
      console.log('Events after deletion:', newEvents);
      return newEvents;
    });
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
      setEventRecurrence(editingEvent.recurrence || 'none');
      setRecurrenceEndDate(editingEvent.recurrenceEndDate || '');
      setRecurrenceCount(editingEvent.recurrenceCount || 1);
    }
  }, [editingEvent]);

  const filteredEvents = getFilteredEvents();

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900' : 'bg-gradient-to-br from-pink-50 via-white to-pink-50'} relative overflow-hidden`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className={`${isDarkMode ? 'bg-purple-900/40' : 'bg-white/40'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6`}>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
              />
            </div>
            
            <div className="flex gap-4">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className={`px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
              
              <button
                onClick={() => {
                  setShowEventModal(true);
                }}
                className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <PlusCircle className="w-5 h-5 inline mr-2" />
                Add Event
              </button>
            </div>
          </div>
          
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigateMonth(-1)}
                className={`p-3 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-gray-900'} rounded-xl transition-all duration-300 hover:scale-110`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              
              <button
                onClick={() => navigateMonth(1)}
                className={`p-3 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-gray-900'} rounded-xl transition-all duration-300 hover:scale-110`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <button
              onClick={() => setCurrentDate(new Date())}
              className={`px-4 py-2 ${isDarkMode ? 'bg-pink-400/20 hover:bg-pink-400/30 text-pink-400' : 'bg-pink-500/20 hover:bg-pink-500/30 text-pink-600'} rounded-xl font-medium transition-all duration-300 hover:scale-105`}
            >
              Today
            </button>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {shortDays.map((day) => (
              <div
                key={day}
                className={`p-4 text-center font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {getDaysInMonth(currentDate).map((day, index) => {
              const dayEvents = getEventsForDate(filteredEvents, day.date);
              const isToday = day.date.toDateString() === new Date().toDateString();
              const isSelected = day.date.toDateString() === selectedDate.toDateString();
              
              return (
                <div
                  key={index}
                  onClick={() => setSelectedDate(day.date)}
                  className={`min-h-[120px] p-2 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                    day.isCurrentMonth
                      ? isDarkMode
                        ? 'bg-purple-800/20 border-purple-700/30 hover:bg-purple-700/30'
                        : 'bg-white/50 border-pink-200 hover:bg-pink-50'
                      : isDarkMode
                      ? 'bg-purple-900/10 border-purple-800/20'
                      : 'bg-gray-50 border-gray-200'
                  } ${
                    isToday
                      ? isDarkMode
                        ? 'ring-2 ring-pink-400'
                        : 'ring-2 ring-pink-500'
                      : ''
                  } ${
                    isSelected
                      ? isDarkMode
                        ? 'bg-pink-400/20 border-pink-400'
                        : 'bg-pink-100 border-pink-500'
                      : ''
                  }`}
                >
                  <div className={`text-sm font-medium mb-1 ${
                    day.isCurrentMonth
                      ? isDarkMode
                        ? isToday
                          ? 'text-pink-400'
                          : 'text-white'
                        : isToday
                        ? 'text-pink-600'
                        : 'text-gray-900'
                      : isDarkMode
                      ? 'text-gray-600'
                      : 'text-gray-400'
                  }`}>
                    {day.date.getDate()}
                  </div>
                  
                  <div className="space-y-1">
                    {dayEvents.slice(0, 3).map((event) => (
                      <div
                        key={event.id}
                        className={`${event.color} text-xs text-white p-1 rounded text-center truncate relative`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingEvent(event);
                          setSelectedDate(day.date);
                          setShowEventModal(true);
                        }}
                      >
                        {event.title}
                        {event.recurrence && event.recurrence !== 'none' && (
                          <span className="absolute top-0 right-0 text-xs">↻</span>
                        )}
                      </div>
                    ))}
                    {dayEvents.length > 3 && (
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-center`}>
                        +{dayEvents.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Event Modal */}
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
        eventRecurrence={eventRecurrence}
        setEventRecurrence={setEventRecurrence}
        recurrenceEndDate={recurrenceEndDate}
        setRecurrenceEndDate={setRecurrenceEndDate}
        recurrenceCount={recurrenceCount}
        setRecurrenceCount={setRecurrenceCount}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
        isFormValid={isFormValid}
        categories={categories}
        eventColors={eventColors}
        recurrenceOptions={recurrenceOptions}
        setIsHovering={() => {}}
      />

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Calendar;