import React from 'react';
import { Clock, MapPin, Edit2, Trash2 } from 'lucide-react';

const EventCard = ({ event, onEdit, onDelete, isDraggable }) => {
  return (
    <div
      className={`${event.color} p-4 rounded-2xl text-white relative group cursor-pointer hover:scale-105 transition-transform duration-300`}
      draggable={isDraggable}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-2">{event.title}</h4>
          <div className="flex items-center text-sm opacity-90 mb-1">
            <Clock className="w-4 h-4 mr-2" />
            {event.time} - {event.endTime}
          </div>
          {event.location && (
            <div className="flex items-center text-sm opacity-90 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              {event.location}
            </div>
          )}
          {event.description && (
            <p className="text-sm opacity-90">{event.description}</p>
          )}
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(event);
            }}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(event.id);
            }}
            className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard; 