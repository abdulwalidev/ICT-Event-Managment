import React from 'react';
import { Link } from 'react-router-dom';

// Import the images
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';

function EventPage() {
  return (
    <div className="event-page">
      <header>
        <Link to="/" className="website-name">Event Portal</Link>
        <div className="menu-buttons">
          <Link to="/Login">
            <button>Host Event</button>
          </Link>
        </div>
      </header>

      <div className="event-cards">
        <div className="event-card">
          <img src={img1} alt="Event 1" className="event-card-image" />
          <h3>Elegant Event</h3>
          <p>This is an elegant that is being event held.</p>
        </div>
        <div className="event-card">
          <img src={img2} alt="Event 2" className="event-card-image" />
          <h3>INDIATER</h3>
          <p>Description of INdicator.</p>
        </div>
        <div className="event-card">
          <img src={img1} alt="Event 3" className="event-card-image" />
          <h3>Event Title 3</h3>
          <p>Description of event 3.</p>
        </div>
      </div>
    </div>
  );
}


export default EventPage;
