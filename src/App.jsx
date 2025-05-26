// // // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // // import Home from './Pages/Home';
// // // // import AnimatedAuthPage from './Pages/AnimatedAuth';
// // // // import EventCalendarPortal from './Pages/EventCalendarPortal';
// // // // import AboutUs from './Pages/AboutUS';
// // // // import Features from './Pages/Feautures';
// // // // export default function App() {
// // // //   return (
// // // //     <Router>
// // // //       <Routes>
// // // //         <Route path="/" element={<Home />} />
// // // //         <Route path="/auth" element={<AnimatedAuthPage />} /> {/* Route for login */}
// // // //         <Route path="/eventportal" element={<EventCalendarPortal />} /> 
// // // //          <Route path="/aboutus" element={<AboutUs />} /> 
// // // //          <Route path="/ft" element={<Features />} /> 
// // // //       </Routes>
// // // //     </Router>
// // // //   );
// // // // }
// // // import React, { useState } from 'react';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // // import Header from './components/Header';
// // // import Home from './Pages/Home';
// // // import AboutUs from './Pages/AboutUS';
// // // import Features from './Pages/Feautures';

// // // function App() {
// // //   const [isDarkMode, setIsDarkMode] = useState(true);
// // //   const [isHovering, setIsHovering] = useState(false);

// // //   return (
// // //     <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} min-h-screen`}>
// // //       <Router>
// // //         <Header
// // //           isDarkMode={isDarkMode}
// // //           setIsDarkMode={setIsDarkMode}
// // //           isHovering={isHovering}
// // //           setIsHovering={setIsHovering}
// // //         />
// // //         <Routes>
// // //           <Route 
// // //             path="/" 
// // //             element={<Home isDarkMode={isDarkMode} isHovering={isHovering} setIsHovering={setIsHovering} />} 
// // //           />
// // //           <Route 
// // //             path="/aboutus" 
// // //             element={<AboutUs isDarkMode={isDarkMode} isHovering={isHovering} setIsHovering={setIsHovering} />} 
// // //           />
// // //           <Route 
// // //             path="/ft" 
// // //             element={<Features isDarkMode={isDarkMode} isHovering={isHovering} setIsHovering={setIsHovering} />} 
// // //           />
// // //         </Routes>
// // //       </Router>
// // //     </div>
// // //   );
// // // }

// // // // export default App;
// // // import React, { useState, useEffect } from 'react';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // // import Header from './components/Header';
// // // import Home from './Pages/Home';
// // // import AboutUs from './Pages/AboutUS';
// // // import Features from './Pages/Feautures';

// // // function App() {
// // //   const [isDarkMode, setIsDarkMode] = useState(true);
// // //   const [isHovering, setIsHovering] = useState(false);
// // //   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

// // //   // Track mouse position globally for CustomCursor in all pages
// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       setCursorPos({ x: e.clientX, y: e.clientY });
// // //     };
// // //     window.addEventListener('mousemove', handleMouseMove);
// // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // //   }, []);

// // //   return (
// // //     <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} min-h-screen`}>
// // //       <Router>
// // //         <Header
// // //           isDarkMode={isDarkMode}
// // //           setIsDarkMode={setIsDarkMode}
// // //           isHovering={isHovering}
// // //           setIsHovering={setIsHovering}
// // //         />
// // //         <Routes>
// // //           <Route 
// // //             path="/" 
// // //             element={<Home 
// // //               isDarkMode={isDarkMode} 
// // //               isHovering={isHovering} 
// // //               setIsHovering={setIsHovering} 
// // //               cursorPos={cursorPos} 
// // //             />} 
// // //           />
// // //           <Route 
// // //             path="/aboutus" 
// // //             element={<AboutUs 
// // //               isDarkMode={isDarkMode} 
// // //               isHovering={isHovering} 
// // //               setIsHovering={setIsHovering} 
// // //               cursorPos={cursorPos} 
// // //             />} 
// // //           />
// // //           <Route 
// // //             path="/ft" 
// // //             element={<Features 
// // //               isDarkMode={isDarkMode} 
// // //               isHovering={isHovering} 
// // //               setIsHovering={setIsHovering} 
// // //               cursorPos={cursorPos} 
// // //             />} 
// // //           />
// // //         </Routes>
// // //       </Router>
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// // import Header from './components/Header';
// // import Home from './Pages/Home';
// // import AboutUs from './Pages/AboutUS';
// // import Features from './Pages/Feautures';
// // import AnimatedAuthPage from './Pages/AnimatedAuth';
// // import EventCalendarPortal from './Pages/EventCalendarPortal';

// // // Create a wrapper component to access location for conditional header rendering
// // function AppWrapper({ isDarkMode, setIsDarkMode, isHovering, setIsHovering }) {
// //   const location = useLocation();

// //   // Don't show header on /eventportal path
// //   const showHeader = location.pathname !== '/eventportal';

// //   return (
// //     <>
// //       {showHeader && (
// //         <Header
// //           isDarkMode={isDarkMode}
// //           setIsDarkMode={setIsDarkMode}
// //           isHovering={isHovering}
// //           setIsHovering={setIsHovering}
// //         />
// //       )}
// //       <Routes>
// //         <Route 
// //           path="/" 
// //           element={<Home 
// //             isDarkMode={isDarkMode} 
// //             isHovering={isHovering} 
// //             setIsHovering={setIsHovering} 
// //           />} 
// //         />
// //         <Route 
// //           path="/auth" 
// //           element={<AnimatedAuthPage 
// //             isDarkMode={isDarkMode} 
// //             isHovering={isHovering} 
// //             setIsHovering={setIsHovering} 
// //           />} 
// //         />
// //         <Route 
// //           path="/eventportal" 
// //           element={<EventCalendarPortal 
// //             isDarkMode={isDarkMode} 
// //             isHovering={isHovering} 
// //             setIsHovering={setIsHovering} 
// //           />} 
// //         />
// //         <Route 
// //           path="/aboutus" 
// //           element={<AboutUs 
// //             isDarkMode={isDarkMode} 
// //             isHovering={isHovering} 
// //             setIsHovering={setIsHovering} 
// //           />} 
// //         />
// //         <Route 
// //           path="/ft" 
// //           element={<Features 
// //             isDarkMode={isDarkMode} 
// //             isHovering={isHovering} 
// //             setIsHovering={setIsHovering} 
// //           />} 
// //         />
// //       </Routes>
// //     </>
// //   );
// // }

// // function App() {
// //   const [isDarkMode, setIsDarkMode] = useState(true);
// //   const [isHovering, setIsHovering] = useState(false);
// //   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       setCursorPos({ x: e.clientX, y: e.clientY });
// //     };
// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   return (
// //     <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} min-h-screen`}>
// //       <Router>
// //         <AppWrapper
// //           isDarkMode={isDarkMode}
// //           setIsDarkMode={setIsDarkMode}
// //           isHovering={isHovering}
// //           setIsHovering={setIsHovering}
// //           cursorPos={cursorPos}
// //         />
// //       </Router>
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// import Header from './components/Header';
// import CustomCursor from './components/CustomCursor';  // import here
// import Home from './Pages/Home';
// import AboutUs from './Pages/AboutUS';
// import Features from './Pages/Feautures';
// import AnimatedAuthPage from './Pages/AnimatedAuth';
// import EventCalendarPortal from './Pages/EventCalendarPortal';

// // Wrapper to conditionally render header based on route
// function AppWrapper({ isDarkMode, setIsDarkMode, isHovering, setIsHovering }) {
//   const location = useLocation();
//   const showHeader = location.pathname !== '/eventportal';

//   return (
//     <>
//       {showHeader && (
//         <Header
//           isDarkMode={isDarkMode}
//           setIsDarkMode={setIsDarkMode}
//           isHovering={isHovering}
//           setIsHovering={setIsHovering}
//         />
//       )}
//       <Routes>
//         <Route 
//           path="/" 
//           element={<Home 
//             isDarkMode={isDarkMode} 
//             isHovering={isHovering} 
//             setIsHovering={setIsHovering} 
//           />} 
//         />
//         <Route 
//           path="/auth" 
//           element={<AnimatedAuthPage 
//             isDarkMode={isDarkMode} 
//             isHovering={isHovering} 
//             setIsHovering={setIsHovering} 
//           />} 
//         />
//         <Route 
//           path="/eventportal" 
//           element={<EventCalendarPortal 
//             isDarkMode={isDarkMode} 
//             isHovering={isHovering} 
//             setIsHovering={setIsHovering} 
//           />} 
//         />
//         <Route 
//           path="/aboutus" 
//           element={<AboutUs 
//             isDarkMode={isDarkMode} 
//             isHovering={isHovering} 
//             setIsHovering={setIsHovering} 
//           />} 
//         />
//         <Route 
//           path="/ft" 
//           element={<Features 
//             isDarkMode={isDarkMode} 
//             isHovering={isHovering} 
//             setIsHovering={setIsHovering} 
//           />} 
//         />
//       </Routes>
//     </>
//   );
// }

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [isHovering, setIsHovering] = useState(false);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} min-h-screen`}>
//       <Router>
//         {/* Add CustomCursor here just once */}
//         <CustomCursor 
//           isDarkMode={isDarkMode} 
//           isHovering={isHovering} 
//           cursorPos={cursorPos} 
//         />
//         <AppWrapper
//           isDarkMode={isDarkMode}
//           setIsDarkMode={setIsDarkMode}
//           isHovering={isHovering}
//           setIsHovering={setIsHovering}
//           cursorPos={cursorPos} // optional, in case AppWrapper or pages need it
//         />
//       </Router>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   Calendar,
//   PlusCircle,
//   Sun,
//   Moon,
//   User,
//   Star,
//   Heart,
//   Coffee,
//   Briefcase,
//   Search,
//   Filter,
//   Clock,
//   MapPin,
//   Edit2,
//   Trash2,
//   X
// } from 'lucide-react';

// const App = () => {
//   // State management
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showEventModal, setShowEventModal] = useState(false);
//   const [editingEvent, setEditingEvent] = useState(null);
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [calendarEvents, setCalendarEvents] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterCategory, setFilterCategory] = useState('all');
//   const [draggedEventId, setDraggedEventId] = useState(null);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [particles, setParticles] = useState([]);

//   // Form state
//   const [eventTitle, setEventTitle] = useState('');
//   const [eventTime, setEventTime] = useState('12:00');
//   const [eventEndTime, setEventEndTime] = useState('13:00');
//   const [eventDescription, setEventDescription] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [eventColor, setEventColor] = useState('bg-gradient-to-r from-pink-400 to-rose-500');
//   const [eventCategory, setEventCategory] = useState('work');

//   // Constants
//   const monthNames = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   const categories = [
//     { id: 'work', label: 'Work', icon: Briefcase },
//     { id: 'personal', label: 'Personal', icon: User },
//     { id: 'health', label: 'Health', icon: Heart },
//     { id: 'social', label: 'Social', icon: Coffee },
//     { id: 'important', label: 'Important', icon: Star }
//   ];

//   const eventColors = [
//     'bg-gradient-to-r from-pink-400 to-rose-500',
//     'bg-gradient-to-r from-blue-400 to-blue-600',
//     'bg-gradient-to-r from-purple-400 to-purple-600',
//     'bg-gradient-to-r from-green-400 to-green-600',
//     'bg-gradient-to-r from-yellow-400 to-yellow-600',
//     'bg-gradient-to-r from-red-400 to-red-600',
//     'bg-gradient-to-r from-indigo-400 to-indigo-600',
//     'bg-gradient-to-r from-orange-400 to-orange-600'
//   ];

//   // Initialize particles and cursor tracking
//   useEffect(() => {
//     const newParticles = [...Array(20)].map((_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 4 + 1,
//       speed: Math.random() * 2 + 0.5,
//       opacity: Math.random() * 0.4 + 0.1,
//       drift: Math.random() * 2 - 1
//     }));
//     setParticles(newParticles);

//     const animateParticles = () => {
//       setParticles(prev => prev.map(particle => ({
//         ...particle,
//         y: particle.y - particle.speed * 0.1,
//         x: particle.x + particle.drift * 0.05,
//         y: particle.y < -5 ? 105 : particle.y
//       })));
//     };

//     const interval = setInterval(animateParticles, 100);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };
//     document.addEventListener('mousemove', handleMouseMove);
//     return () => document.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Utility functions
//   const getDaysInMonth = (date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const daysInMonth = lastDay.getDate();
//     const startingDayOfWeek = firstDay.getDay();

//     const days = [];

//     for (let i = 0; i < startingDayOfWeek; i++) {
//       const prevDate = new Date(year, month, -startingDayOfWeek + i + 1);
//       days.push({ date: prevDate, isCurrentMonth: false });
//     }

//     for (let day = 1; day <= daysInMonth; day++) {
//       days.push({ date: new Date(year, month, day), isCurrentMonth: true });
//     }

//     const remainingDays = 42 - days.length;
//     for (let day = 1; day <= remainingDays; day++) {
//       const nextDate = new Date(year, month + 1, day);
//       days.push({ date: nextDate, isCurrentMonth: false });
//     }

//     return days;
//   };

//   const getEventsForDate = (events, date) => {
//     if (!date) return [];
//     const dateString = date.toDateString();
//     return events.filter(event => event.date === dateString);
//   };

//   const timeToMinutes = (time) => {
//     if (!time) return 0;
//     const [h, m] = time.split(":").map(Number);
//     return h * 60 + m;
//   };

//   const isConflicting = () => {
//     if (!eventTime || !selectedDate) return false;
//     const newStart = timeToMinutes(eventTime);
//     const newEnd = eventEndTime ? timeToMinutes(eventEndTime) : newStart + 60;

//     return calendarEvents.some(event => {
//       if (editingEvent && event.id === editingEvent.id) return false;
//       if (event.date !== selectedDate.toDateString()) return false;
//       const eventStart = timeToMinutes(event.time);
//       const eventEnd = event.endTime ? timeToMinutes(event.endTime) : eventStart + 60;
//       return (newStart < eventEnd) && (newEnd > eventStart);
//     });
//   };

//   const isFormValid = () => {
//     if (!eventTime || !eventEndTime) return false;
//     const start = timeToMinutes(eventTime);
//     const end = timeToMinutes(eventEndTime);
//     return (
//       eventTitle.trim() !== '' &&
//       eventTime !== '' &&
//       eventEndTime !== '' &&
//       end > start &&
//       !isConflicting()
//     );
//   };

//   // Event handlers
//   const resetEventForm = () => {
//     setEventTitle('');
//     setEventTime('12:00');
//     setEventEndTime('13:00');
//     setEventDescription('');
//     setEventLocation('');
//     setEventColor('bg-gradient-to-r from-pink-400 to-rose-500');
//     setEventCategory('work');
//   };

//   const handleCloseModal = () => {
//     setShowEventModal(false);
//     setEditingEvent(null);
//     resetEventForm();
//   };

//   const handleSaveEvent = () => {
//     if (!eventTitle.trim()) return;

//     if (editingEvent) {
//       const updatedEvent = { 
//         title: eventTitle,
//         time: eventTime,
//         endTime: eventEndTime,
//         description: eventDescription,
//         location: eventLocation,
//         color: eventColor,
//         category: eventCategory,
//         id: editingEvent.id,
//         date: selectedDate.toDateString(),
//         updatedAt: new Date().toISOString()
//       };

//       setCalendarEvents(prev => 
//         prev.map(event => 
//           event.id === editingEvent.id ? updatedEvent : event
//         )
//       );
//     } else {
//       const newEvent = {
//         title: eventTitle,
//         time: eventTime,
//         endTime: eventEndTime,
//         description: eventDescription,
//         location: eventLocation,
//         color: eventColor,
//         category: eventCategory,
//         id: Date.now().toString(),
//         date: selectedDate.toDateString(),
//         createdAt: new Date().toISOString()
//       };

//       setCalendarEvents(prev => [...prev, newEvent]);
//     }
    
//     handleCloseModal();
//   };

//   const handleDeleteEvent = (eventId) => {
//     setCalendarEvents(prev => prev.filter(event => event.id !== eventId));
//   };

//   const navigateMonth = (direction) => {
//     setCurrentDate(prevDate => {
//       const newDate = new Date(prevDate);
//       newDate.setMonth(newDate.getMonth() + direction);
//       return newDate;
//     });
//   };

//   const handleDragStart = (eventId) => {
//     setDraggedEventId(eventId);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, droppedOnDate) => {
//     e.preventDefault();
//     if (!draggedEventId) return;

//     setCalendarEvents(prevEvents =>
//       prevEvents.map(event =>
//         event.id === draggedEventId
//           ? { ...event, date: droppedOnDate.toDateString() }
//           : event
//       )
//     );

//     setDraggedEventId(null);
//   };

//   // Load event data when editing
//   useEffect(() => {
//     if (editingEvent) {
//       setEventTitle(editingEvent.title || '');
//       setEventTime(editingEvent.time || '12:00');
//       setEventEndTime(editingEvent.endTime || '13:00');
//       setEventDescription(editingEvent.description || '');
//       setEventLocation(editingEvent.location || '');
//       setEventColor(editingEvent.color || 'bg-gradient-to-r from-pink-400 to-rose-500');
//       setEventCategory(editingEvent.category || 'work');
//     }
//   }, [editingEvent]);

//   // Get filtered events
//   const getFilteredEvents = () => {
//     let filtered = calendarEvents;
    
//     if (filterCategory !== 'all') {
//       filtered = filtered.filter(event => event.category === filterCategory);
//     }
    
//     if (searchQuery) {
//       filtered = filtered.filter(event => 
//         event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         event.location.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
    
//     return filtered;
//   };

//   const today = new Date();
//   const todaysEvents = getEventsForDate(calendarEvents, today);

//   return (
//     <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900' : 'bg-gradient-to-br from-pink-50 via-white to-pink-50'} relative overflow-hidden`}>
//       {/* Custom Cursor */}
//       <>
//         <div
//           className={`fixed pointer-events-none z-50 transition-transform duration-200 ${
//             isHovering ? 'scale-150' : 'scale-100'
//           }`}
//           style={{
//             left: cursorPos.x - 8,
//             top: cursorPos.y - 8,
//             transform: `translate(-50%, -50%)`,
//           }}
//         >
//           <div
//             className={`w-4 h-4 rounded-full ${
//               isDarkMode ? 'bg-pink-400' : 'bg-pink-600'
//             } opacity-80`}
//           />
//         </div>
//         <div
//           className={`fixed pointer-events-none z-40 transition-all duration-300 ${
//             isHovering ? 'scale-200 opacity-30' : 'scale-100 opacity-20'
//           }`}
//           style={{
//             left: cursorPos.x - 16,
//             top: cursorPos.y - 16,
//             transform: `translate(-50%, -50%)`,
//           }}
//         >
//           <div
//             className={`w-8 h-8 rounded-full border-2 ${
//               isDarkMode ? 'border-pink-400' : 'border-pink-600'
//             }`}
//           />
//         </div>
//       </>
      
//       {/* Floating Particles */}
//       <div className="fixed inset-0 pointer-events-none z-10">
//         {particles.map((particle) => (
//           <div
//             key={particle.id}
//             className="absolute w-2 h-2 bg-pink-400 rounded-full animate-pulse"
//             style={{
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//               opacity: particle.opacity,
//               animation: `float ${3 + particle.speed}s ease-in-out infinite`,
//             }}
//           />
//         ))}
//       </div>
      
//       {/* Navigation Header */}
//       <div className={`${isDarkMode ? 'bg-purple-900/60' : 'bg-white/60'} backdrop-blur-xl border-b-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} sticky top-0 z-40`}>
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className={`w-12 h-12 bg-gradient-to-r ${isDarkMode ? 'from-pink-400 to-pink-500' : 'from-pink-500 to-pink-600'} rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
//                 <Calendar className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                   EventFlow
//                 </h1>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                   Manage your events with style
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//                 className={`p-3 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-yellow-400' : 'bg-black/10 hover:bg-black/20 text-gray-600'} rounded-xl transition-all duration-300 hover:scale-110`}
//                 onMouseEnter={() => setIsHovering(true)}
//                 onMouseLeave={() => setIsHovering(false)}
//               >
//                 {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
//               </button>
              
//               <button
//                 onClick={() => {
//                   setSelectedDate(new Date());
//                   setShowEventModal(true);
//                 }}
//                 className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
//                 onMouseEnter={() => setIsHovering(true)}
//                 onMouseLeave={() => setIsHovering(false)}
//               >
//                 <PlusCircle className="w-5 h-5 inline mr-2" />
//                 New Event
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Left Sidebar */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* Today's Events */}
//             <div className={`${isDarkMode ? 'bg-purple-900/40' : 'bg-white/40'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6`}>
//               <h3 className={`text-xl font-bold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-4`}>
//                 Today's Events
//               </h3>
              
//               {todaysEvents.length === 0 ? (
//                 <p className={`${isDarkMode ? 'text-pink-200' : 'text-pink-600'} text-center py-8`}>
//                   No events today
//                 </p>
//               ) : (
//                 <div className="space-y-3">
//                   {todaysEvents.map((event) => (
//                     <div
//                       key={event.id}
//                       className={`${event.color} p-4 rounded-2xl text-white relative group cursor-pointer hover:scale-105 transition-transform duration-300`}
//                     >
//                       <div className="flex items-start justify-between">
//                         <div className="flex-1">
//                           <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
//                           <div className="flex items-center text-xs opacity-90 mb-1">
//                             <Clock className="w-3 h-3 mr-1" />
//                             {event.time} - {event.endTime}
//                           </div>
//                           {event.location && (
//                             <div className="flex items-center text-xs opacity-90">
//                               <MapPin className="w-3 h-3 mr-1" />
//                               {event.location}
//                             </div>
//                           )}
//                         </div>
//                         <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               setEditingEvent(event);
//                               setSelectedDate(new Date(event.date));
//                               setShowEventModal(true);
//                             }}
//                             className="p-1 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
//                           >
//                             <Edit2 className="w-3 h-3" />
//                           </button>
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleDeleteEvent(event.id);
//                             }}
//                             className="p-1 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
//                           >
//                             <Trash2 className="w-3 h-3" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
            
//             {/* Quick Stats */}
//             <div className={`${isDarkMode ? 'bg-purple-900/40' : 'bg-white/40'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6`}>
//               <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
//                 Quick Stats
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Events</span>
//                   <span className={`font-bold ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>
//                     {calendarEvents.length}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>This Month</span>
//                   <span className={`font-bold ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>
//                     {calendarEvents.filter(event => {
//                       const eventDate = new Date(event.date);
//                       return eventDate.getMonth() === currentDate.getMonth() && 
//                              eventDate.getFullYear() === currentDate.getFullYear();
//                     }).length}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Calendar */}
//           <div className="lg:col-span-3">
//             <div className={`${isDarkMode ? 'bg-purple-900/40' : 'bg-white/40'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6`}>
              
//               {/* Search and Filter */}
//               <div className="mb-8">
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <div className="flex-1 relative">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
//                     <input
//                       type="text"
//                       placeholder="Search events..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-pink-400/30 rounded-xl text-pink-100 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
//                     />
//                   </div>
                  
//                   <div className="relative">
//                     <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
//                     <select
//                       value={filterCategory}
//                       onChange={(e) => setFilterCategory(e.target.value)}
//                       className="pl-10 pr-8 py-3 bg-white/10 border-2 border-pink-400/30 rounded-xl text-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-400 appearance-none cursor-pointer"
//                       onMouseEnter={() => setIsHovering(true)}
//                       onMouseLeave={() => setIsHovering(false)}
//                     >
//                       <option value="all">All Categories</option>
//                       {categories.map((category) => (
//                         <option key={category.id} value={category.id}>
//                           {category.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Calendar Header */}
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center space-x-4">
//                   <button
//                     onClick={() => navigateMonth(-1)}
//                     className={`p-3 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-gray-900'} rounded-xl transition-all duration-300 hover:scale-110`}
//                     onMouseEnter={() => setIsHovering(true)}
//                     onMouseLeave={() => setIsHovering(false)}
//                   >
//                     <ChevronLeft className="w-6 h-6" />
//                   </button>
                  
//                   <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                     {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
//                   </h2>
                  
//                   <button
//                     onClick={() => navigateMonth(1)}
//                     className={`p-3 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-gray-900'} rounded-xl transition-all duration-300 hover:scale-110`}
//                     onMouseEnter={() => setIsHovering(true)}
//                     onMouseLeave={() => setIsHovering(false)}
//                   >
//                     <ChevronRight className="w-6 h-6" />
//                   </button>
//                 </div>
                
//                 <button
//                   onClick={() => setCurrentDate(new Date())}
//                   className={`px-4 py-2 ${isDarkMode ? 'bg-pink-400/20 hover:bg-pink-400/30 text-pink-400' : 'bg-pink-500/20 hover:bg-pink-500/30 text-pink-600'} rounded-xl font-medium transition-all duration-300 hover:scale-105`}
//                   onMouseEnter={() => setIsHovering(true)}
//                   onMouseLeave={() => setIsHovering(false)}
//                 >
//                   Today
//                 </button>
//               </div>

//               {/* Days of Week Header */}
//               <div className="grid grid-cols-7 gap-2 mb-4">
//                 {shortDays.map((day) => (
//                   <div
//                     key={day}
//                     className={`p-4 text-center font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
//                   >
//                     {day}
//                   </div>
//                 ))}
//               </div>

//               {/* Calendar Grid */}
//               <div className="grid grid-cols-7 gap-2">
//                 {getDaysInMonth(currentDate).map((day, index) => {
//                   const dayEvents = getEventsForDate(calendarEvents, day.date);
//                   const filteredDayEvents = dayEvents.filter(event => {
//                     if (filterCategory !== 'all' && event.category !== filterCategory) return false;
//                     if (searchQuery && !event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
//                         !event.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
//                         !event.location.toLowerCase().includes(searchQuery.toLowerCase())) return false;
//                     return true;
//                   });
                  
//                   const isToday = day.date.toDateString() === new Date().toDateString();
//                   const isSelected = day.date.toDateString() === selectedDate.toDateString();
                  
//                   return (
//                     <div
//                       key={index}
//                       className={`
//                         min-h-[120px] p-2 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105
//                         ${day.isCurrentMonth 
//                           ? (isDarkMode ? 'bg-purple-800/30 border-pink-400/20' : 'bg-white/30 border-pink-300/20')
//                           : (isDarkMode ? 'bg-purple-900/20 border-pink-400/10' : 'bg-gray-100/30 border-pink-300/10')
//                         }
//                         ${isToday ? (isDarkMode ? 'ring-2 ring-pink-400' : 'ring-2 ring-pink-500') : ''}
//                         ${isSelected ? (isDarkMode ? 'bg-pink-500/20 border-pink-400' : 'bg-pink-200/40 border-pink-500') : ''}
//                         hover:shadow-lg
//                       `}
//                       onClick={() => setSelectedDate(day.date)}
//                       onDoubleClick={() => {
//                         setSelectedDate(day.date);
//                         setShowEventModal(true);
//                       }}
//                       onDragOver={handleDragOver}
//                       onDrop={(e) => handleDrop(e, day.date)}
//                     >
//                       <div className={`text-sm font-semibold mb-2 ${
//                         day.isCurrentMonth 
//                           ? (isDarkMode ? 'text-pink-200' : 'text-pink-700')
//                           : (isDarkMode ? 'text-pink-400/50' : 'text-pink-500/50')
//                       }`}>
//                         {day.date.getDate()}
//                       </div>
                      
//                       <div className="space-y-1">
//                         {filteredDayEvents.slice(0, 3).map((event) => (
//                           <div
//                             key={event.id}
//                             draggable
//                             onDragStart={() => handleDragStart(event.id)}
//                             className={`${event.color} text-white p-1 rounded-lg text-xs font-medium cursor-move hover:scale-105 transition-transform duration-200`}
//                             onClick={(e) => e.stopPropagation()}
//                           >
//                             <div className="truncate">{event.title}</div>
//                             <div className="text-xs opacity-80">{event.time}</div>
//                           </div>
//                         ))}
//                         {filteredDayEvents.length > 3 && (
//                           <div className={`text-xs ${isDarkMode ? 'text-pink-300' : 'text-pink-600'} font-medium`}>
//                             +{filteredDayEvents.length - 3} more
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Event Modal */}
//       {showEventModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className={`${isDarkMode ? 'bg-purple-900/90' : 'bg-white/90'} backdrop-blur-xl border-2 ${isDarkMode ? 'border-pink-400/30' : 'border-pink-500/40'} rounded-3xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto`}>
//             <div className="flex items-center justify-between mb-6">
//               <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'}`}>
//                 {editingEvent ? 'Edit Event' : 'Create New Event'}
//               </h2>
//               <button
//                 onClick={handleCloseModal}
//                 className={`p-2 ${isDarkMode ? 'text-pink-300 hover:bg-pink-500/20' : 'text-pink-700 hover:bg-pink-500/20'} rounded-xl transition-colors`}
//                 onMouseEnter={() => setIsHovering(true)}
//                 onMouseLeave={() => setIsHovering(false)}
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
//                   Event Title
//                 </label>
//                 <input
//                   type="text"
//                   value={eventTitle}
//                   onChange={(e) => setEventTitle(e.target.value)}
//                   className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
//                   placeholder="Enter event title..."
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
//                     Start Time
//                   </label>
//                   <input
//                     type="time"
//                     value={eventTime}
//                     onChange={(e) => setEventTime(e.target.value)}
//                     className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
//                   />
//                 </div>
//                 <div>
//                   <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
//                     End Time
//                   </label>
//                   <input
//                     type="time"
//                     value={eventEndTime}
//                     onChange={(e) => setEventEndTime(e.target.value)}
//                     className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
//                   Description
//                 </label>
//                 <textarea
//                   value={eventDescription}
//                   onChange={(e) => setEventDescription(e.target.value)}
//                   rows={3}
//                   className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none`}
//                   placeholder="Event description..."
//                 />
//               </div>

//               <div>
//                 <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   value={eventLocation}
//                   onChange={(e) => setEventLocation(e.target.value)}
//                   className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
//                   placeholder="Event location..."
//                 />
//               </div>

//               <div>
//                 <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
//                   Category
//                 </label>
//                 <select
//                   value={eventCategory}
//                   onChange={(e) => setEventCategory(e.target.value)}
//                   className={`w-full px-4 py-3 ${isDarkMode ? 'bg-purple-800/50 border-pink-400/30 text-pink-100' : 'bg-pink-50 border-pink-300 text-pink-900'} border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400`}
//                 >
//                   {categories.map((category) => (
//                     <option key={category.id} value={category.id}>
//                       {category.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className={`block text-sm font-medium ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} mb-2`}>
//                   Color
//                 </label>
//                 <div className="grid grid-cols-4 gap-2">
//                   {eventColors.map((color) => (
//                     <button
//                       key={color}
//                       onClick={() => setEventColor(color)}
//                       className={`w-full h-12 ${color} rounded-xl transition-all duration-300 hover:scale-105 ${eventColor === color ? 'ring-2 ring-pink-400 ring-offset-2' : ''}`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {isConflicting() && (
//                 <div className="p-4 bg-red-500/20 border-2 border-red-400/30 rounded-xl">
//                   <p className="text-red-400 text-sm">
//                     ⚠️ This event conflicts with another event at the same time.
//                   </p>
//                 </div>
//               )}

//               <div className="flex gap-4 pt-4">
//                 <button
//                   onClick={handleCloseModal}
//                   className={`flex-1 px-6 py-3 ${isDarkMode ? 'bg-purple-700/50 hover:bg-purple-700/70 text-pink-300' : 'bg-pink-100 hover:bg-pink-200 text-pink-700'} rounded-xl font-medium transition-all duration-300`}
//                   onMouseEnter={() => setIsHovering(true)}
//                   onMouseLeave={() => setIsHovering(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleSaveEvent}
//                   disabled={!isFormValid()}
//                   className={`flex-1 px-6 py-3 ${isFormValid() 
//                     ? 'bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white' 
//                     : 'bg-gray-400 text-gray-600 cursor-not-allowed'
//                   } rounded-xl font-medium transition-all duration-300 hover:scale-105`}
//                   onMouseEnter={() => setIsHovering(true)}
//                   onMouseLeave={() => setIsHovering(false)}
//                 >
//                   {editingEvent ? 'Update Event' : 'Create Event'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Profile from './pages/Profile';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} cursorPos={cursorPos} />}
        />
        <Route
          path="/calendar"
          element={<Calendar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} cursorPos={cursorPos} />}
        />
        <Route
          path="/profile"
          element={<Profile isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} cursorPos={cursorPos} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
