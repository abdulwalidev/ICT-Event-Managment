import React, { useState } from "react";

function EventFormPage({ addEvent }) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eventName || !eventDate || !eventDescription || !file) {
      alert("Please fill in all fields and select a file.");
      return;
    }

    const newEvent = {
      title: eventName,
      date: eventDate,
      description: eventDescription,
      location: "Default Location",
      image: URL.createObjectURL(file),
    };

    addEvent(newEvent);

    setEventName("");
    setEventDate("");
    setEventDescription("");
    setFile(null);

    alert("Event created successfully!");
  };

  return (
    
   <div> 
   <br /><br /><br /><div className="event-form-page">
      <br />  
      <h1 className="event-form-title">Create a New Event</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="event-input"
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="event-input"
        />
        <textarea
          placeholder="Event Description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          className="event-textarea"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="event-file-input"
        />
        <button type="submit" className="event-submit-button">
          Create Event
        </button>
      </form>
      </div>
      </div>
    
  );
}

export default EventFormPage;
