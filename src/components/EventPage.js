import React from "react";

function EventPage() {
  // Sample data for an event
  const eventDetails = {
    title: "Summer Music Festival 2024",
    date: "August 15, 2024",
    location: "Central Park, New York",
    description:
      "Join us for a day of fun, music, and excitement at the Summer Music Festival 2024! Featuring top artists from around the world, food trucks, and interactive activities for all ages.",
    image: "https://via.placeholder.com/800x400", // Replace with an actual image URL
  };

  return (
    <div className="event-page">
      <h1 className="event-title">{eventDetails.title}</h1>
      <img
        className="event-image"
        src={eventDetails.image}
        alt={eventDetails.title}
      />
      <p className="event-date">
        <strong>Date:</strong> {eventDetails.date}
      </p>
      <p className="event-location">
        <strong>Location:</strong> {eventDetails.location}
      </p>
      <p className="event-description">{eventDetails.description}</p>
      <button className="register-button">Register Now</button>
    </div>
  );
}

export default EventPage;
