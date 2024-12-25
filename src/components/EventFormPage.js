import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import './App.css'; // Ensure App.css is imported for global styling

function EventFormPage() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !eventDate || !eventDescription) {
      alert("Please fill in all fields.");
    } else {
      console.log("Event created", { eventName, eventDate, eventDescription });
      // Submit event to backend here
    }
  };

  return (
    <div className="event-form-page"> {/* Class for global styles */}
      <Header />
      <div className="form-container">
        <h2>Create New Event</h2>
        <form onSubmit={handleSubmit} className="event-form">
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="input-field" // Apply shared styles
          />
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="input-field" // Apply shared styles
          />
          <textarea
            placeholder="Event Description"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            className="input-field" // Apply shared styles
          />
          <button type="submit" className="submit-btn">Create Event</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EventFormPage;
