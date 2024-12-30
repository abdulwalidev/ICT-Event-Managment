import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import artistImage from './images/artist.jpg';
import elegantEventImage from './images/Elegant event.jpg';
import eventImage from './images/event.jpg';
import glowingSkyImage from './images/glowing-sky-sphere-orbits-starry-galaxy-generated-by-ai.jpg';
import indicatorEventImage from './images/Indicator event.jpg';
import locationImage from './images/location.jpg';

const events = [
  { id: 1, title: "Music Concert", date: "2024-12-30", location: "City Hall", description: "A grand music concert featuring famous artists. Enjoy an evening of live performances, great music, and an electrifying atmosphere. Don't miss out on the biggest music event of the year!", image: eventImage, additionalInfo: "Doors open at 6 PM. Free parking available. Food and beverages will be available for purchase." },
  { id: 2, title: "Art Exhibition", date: "2024-12-28", location: "Art Gallery", description: "An exhibition showcasing contemporary art. Explore the latest works from emerging and established artists. A perfect event for art enthusiasts and collectors.", image: artistImage, additionalInfo: "Exhibition hours: 10 AM - 8 PM. Guided tours available at 11 AM, 2 PM, and 5 PM. Entry fee: $10." },
  { id: 3, title: "Tech Conference", date: "2025-01-05", location: "Convention Center", description: "A conference discussing the latest in technology. Join industry leaders and innovators for a day of insightful talks, networking, and hands-on workshops.", image: locationImage, additionalInfo: "Conference starts at 9 AM. Early bird registration ends on December 20th. Lunch and refreshments included." },
  { id: 4, title: "Elegant Event", date: "2024-12-22", location: "Grand Ballroom", description: "An elegant evening event with fine dining and entertainment. Dress to impress and enjoy a night of sophistication and glamour.", image: elegantEventImage, additionalInfo: "Event starts at 7 PM. Black-tie attire required. Complimentary champagne on arrival." },
  { id: 5, title: "Glowing Sky Sphere", date: "2024-12-25", location: "Planetarium", description: "A mesmerizing show of glowing sky spheres and starry galaxy. Experience the wonders of the universe in a breathtaking visual display.", image: glowingSkyImage, additionalInfo: "Showtimes: 6 PM, 8 PM, and 10 PM. Tickets: $15 for adults, $10 for children. Planetarium gift shop open until 11 PM." },
  { id: 6, title: "Indicator Event", date: "2024-12-22", location: "Expo Center", description: "An event showcasing the latest indicators in technology and innovation. Discover cutting-edge products and meet the minds behind them.", image: indicatorEventImage, additionalInfo: "Event runs from 10 AM to 6 PM. Free entry. Interactive demos and product launches throughout the day." },
  // Add more events as needed
];

function EventDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleBuyTickets = () => {
    navigate(`/buy-tickets/${event.id}`);
  };

  return (
    <div className="event-detail-page">
      <img src={event.image} alt={event.title} className="event-detail-image" />
      <h1 className="event-detail-title">{event.title}</h1>
      <p className="event-detail-date">{event.date}</p>
      <p className="event-detail-location">{event.location}</p>
      <p className="event-detail-description">{event.description}</p>
      <p className="event-detail-additional-info">{event.additionalInfo}</p>
      <br /> <br />  
      <button className="buy-tickets-button" onClick={handleBuyTickets}>Buy Tickets</button>
    </div>
  );
}

export default EventDetailPage;
