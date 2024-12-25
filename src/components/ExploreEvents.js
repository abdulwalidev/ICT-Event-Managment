import React from "react";

function ExploreEvents() {
  return (
    <div className="explore-events-page">
      <h1>Explore Events</h1>
      <p>Browse through exciting events happening around you.</p>
      <div className="events-list">
        {/* Example of event cards */}
        <div className="event-card">
          <img src="/images/event.jpg" alt="Event 1" />
          <h2>Event Name 1</h2>
        </div>
        <div className="event-card">
          <img src="/images/event.jpg" alt="Event 2" />
          <h2>Event Name 2</h2>
        </div>
        {/* Add more event cards as needed */}
      </div>
    </div>
  );
}

export default ExploreEvents;
