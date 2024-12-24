import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HostEventPage({ isLoggedIn }) {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const navigate = useNavigate();

  // Redirect to login page if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Event Created: ${eventTitle}`);
  };

  return (
    <div className="host-event-page">
      <Link to="/events">
        <button>Browse</button>
      </Link>
      <header>
        <Link to="/" className="website-name">Main Page</Link>
      </header>
      <div className="form-container">
        <h2>Host a New Event</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Event Title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Event Description"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          ></textarea>
          <input type="file" />
          <button type="submit">Create Event</button>
        </form>
      </div>
    </div>
  );
}

export default HostEventPage;
