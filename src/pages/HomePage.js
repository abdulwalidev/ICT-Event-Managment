import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <div className="welcome-message">
        <h4>EvEnT MASTER</h4>
        <h8>Click below to explore events or create your own!</h8>
        <br />
        <br />
        <div className="menu-buttons">
          <Link to="/events">
            <button>Browse Events</button>
          </Link>
          <Link to="/login">
            <button>Host an Event</button>  {/* Changed to link to /login */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
