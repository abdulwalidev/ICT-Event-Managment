import React, { createContext, useState, useContext } from "react";

const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState([
    { id: 1, title: "Music Concert", date: "2024-12-30", location: "City Hall", description: "A grand music concert...", image: "event.jpg" },
    // ... Add initial events here.
  ]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventContext() {
  return useContext(EventContext);
}
