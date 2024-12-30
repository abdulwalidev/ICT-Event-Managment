import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

// Importing images
import artistImage from './images/artist.jpg';
import elegantEventImage from './images/Elegant event.jpg';
import eventImage from './images/event.jpg';
import glowingSkyImage from './images/glowing-sky-sphere-orbits-starry-galaxy-generated-by-ai.jpg';
import indicatorEventImage from './images/Indicator event.jpg';
import locationImage from './images/location.jpg';

// Events array (reuse from previous code)
const events = [
  { id: 2, title: "Art Exhibition", date: "2024-12-28", location: "Art Gallery", image: artistImage },
  { id: 3, title: "Tech Conference", date: "2025-01-05", location: "Convention Center", image: locationImage },
  { id: 4, title: "Elegant Event", date: "2024-12-22", location: "Grand Ballroom", image: elegantEventImage },
  { id: 5, title: "Glowing Sky Sphere", date: "2024-12-25", location: "Planetarium", image: glowingSkyImage },
  { id: 6, title: "Indicator Event", date: "2024-12-22", location: "Expo Center", image: indicatorEventImage },
];

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      {/* Featured Banner */}
      <div className="banner">
        <img
          src={eventImage}
          alt="Featured Event"
          className="banner-image"
        />
        <div className="banner-content">
          <h2>Featured Event: Music Concert 2024</h2>
          <p>Join the biggest music concert of the year. Discover more, explore artists, and enjoy the thrill.</p>
          <br />
          <Link to="/eventpage">
            <button className="explore-button">Explore Now</button>
          </Link>
        </div>
      </div>
      <br />
      {/* Event Categories */}
      <div className="event-sections">
        <h3>Trending Events</h3>
        <div className="event-grid">
          <br />
          {events.map((event) => (
            <Link to={`/event/${event.id}`} key={event.id} className="event-card-link">
              <EventCard
                title={event.title}
                date={event.date}
                location={event.location}
                imgUrl={event.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventCard({ title, date, location, imgUrl }) {
  return (
    <div className="event-card">
      <img src={imgUrl} alt={title} className="event-card-img" />
      <br />
      <h4>{title}</h4>
      <p className="event-date">{date}</p>
      <p className="event-location">{location}</p>
    </div>
  );
}

export default HomePage;
