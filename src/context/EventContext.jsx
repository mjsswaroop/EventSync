import React, { createContext, useContext, useState, useEffect } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  // Load events from localStorage on initial mount
  useEffect(() => {
    const savedEvents = localStorage.getItem('calendarEvents');
    if (savedEvents) {
      const parsedEvents = JSON.parse(savedEvents);
      setCalendarEvents(parsedEvents);
    }
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(calendarEvents));
  }, [calendarEvents]);

  const addEvent = (event) => {
    setCalendarEvents(prev => [...prev, event]);
  };

  const updateEvent = (updatedEvent) => {
    setCalendarEvents(prev => 
      prev.map(event => event.id === updatedEvent.id ? updatedEvent : event)
    );
  };

  const deleteEvent = (eventId) => {
    setCalendarEvents(prev => prev.filter(event => event.id !== eventId));
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    
    // Normalize the input date to start of day
    const currentDate = new Date(date);
    currentDate.setHours(0, 0, 0, 0);
    const dateString = currentDate.toDateString();

    // Filter events for the given date
    const eventsForDate = calendarEvents.filter(event => {
      // Normalize event date to start of day
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);

      // For non-recurring events, just check the exact date
      if (!event.recurrence || event.recurrence === 'none') {
        return event.date === dateString;
      }

      // Don't show recurring events before their start date
      if (currentDate < eventDate) {
        return false;
      }

      // Calculate days difference
      const daysDiff = Math.floor((currentDate - eventDate) / (24 * 60 * 60 * 1000));

      // Check end date if specified
      if (event.recurrenceEndDate) {
        const endDate = new Date(event.recurrenceEndDate);
        endDate.setHours(23, 59, 59, 999);
        if (currentDate > endDate) {
          return false;
        }
      }

      // Check occurrence count if specified
      if (event.recurrenceCount && daysDiff >= event.recurrenceCount) {
        return false;
      }

      // Check recurrence pattern
      switch (event.recurrence) {
        case 'daily':
          // For daily events, show on all days after start date
          return daysDiff >= 0;
        
        case 'weekly':
          // For weekly events, show every 7 days
          return daysDiff >= 0 && daysDiff % 7 === 0;
        
        case 'monthly':
          // For monthly events, show on the same day of each month
          if (eventDate.getDate() !== currentDate.getDate()) {
            return false;
          }
          // Check if it's a future month
          if (currentDate.getFullYear() > eventDate.getFullYear()) {
            return true;
          }
          if (currentDate.getFullYear() === eventDate.getFullYear()) {
            return currentDate.getMonth() > eventDate.getMonth();
          }
          return false;
        
        case 'yearly':
          // For yearly events, show on the same day and month each year
          if (eventDate.getDate() !== currentDate.getDate() || 
              eventDate.getMonth() !== currentDate.getMonth()) {
            return false;
          }
          return currentDate.getFullYear() > eventDate.getFullYear();
        
        default:
          return false;
      }
    });

    return eventsForDate;
  };

  // Add a function to get all recurring events for debugging
  const getAllRecurringEvents = () => {
    return calendarEvents.filter(event => event.recurrence && event.recurrence !== 'none');
  };

  return (
    <EventContext.Provider value={{
      calendarEvents,
      setCalendarEvents,
      addEvent,
      updateEvent,
      deleteEvent,
      getEventsForDate,
      getAllRecurringEvents // Add this for debugging
    }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
}; 