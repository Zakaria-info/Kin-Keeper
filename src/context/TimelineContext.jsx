import React, { createContext, useState } from 'react';

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);

  const addTimelineEntry = (entry) => {
    // Adds new interaction to the top of the list
    setTimelineData((prev) => [entry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timelineData, addTimelineEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};