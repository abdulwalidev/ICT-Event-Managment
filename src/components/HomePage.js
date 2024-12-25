import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './App.css'; // Make sure to import the App.css file

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Event App</h1>
      <p className="description">
        Explore the world of events. Discover artists, locations, and exciting happenings near you.
      </p>
      <div className="button-container">
        {/* Only Login and Signup buttons remain */}
        <Link to="/login">
          <button className="home-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="home-button">Sign Up</button>
        </Link>
        {/* New button for hosting an event */}
        <Link to="/host-event">
          <button className="home-button">Host an Event</button>
        </Link>
        {/* Button to navigate to the EventPage */}
        <Link to="/eventpage">
          <button className="home-button">Explore Events</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
