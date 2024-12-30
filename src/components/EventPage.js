import React from "react";
import { Link } from "react-router-dom"; // Import Link

function EventPage({ events }) {
  return (
    <div className="event-page">
      <h1 className="event-title">Current Events</h1>
      <div className="event-list">
        {events.map((event) => (
          <Link to={`/event/${event.id}`} key={event.id} className="event-card-link">
            <div className="event-card">
              <img src={event.image} alt={event.title} className="event-image" />
              <h2 className="event-name">{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventPage;
