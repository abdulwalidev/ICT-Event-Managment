import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import HostEventPage from "./components/HostEventPage";
import EventFormPage from "./components/EventFormPage";
import SignupPage from "./components/SignupPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BrowseArtists from "./components/BrowseArtists";
import BrowseLocations from "./components/BrowseLocations";
import ExploreEvents from "./components/ExploreEvents";
import EventPage from "./components/EventPage";
import EventDetailPage from "./components/EventDetailPage";
import BuyTicketsPage from "./components/BuyTicketsPage";
import TicketPage from "./components/TicketPage";

import "./App.css";

function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Music Concert",
      date: "2024-12-30",
      location: "City Hall",
      description: "A grand music concert featuring famous artists.",
      image: "./images/event.jpg",
    },
    {
      id: 2,
      title: "Art Exhibition",
      date: "2024-12-28",
      location: "Art Gallery",
      description: "An exhibition showcasing contemporary art.",
      image: "./images/artist.jpg",
    },
  ]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [
      ...prevEvents,
      { id: prevEvents.length + 1, ...newEvent },
    ]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/host-event" element={<HostEventPage />} />
          <Route path="/event-form" element={<EventFormPage addEvent={addEvent} />} />
          <Route path="/browse-artists" element={<BrowseArtists />} />
          <Route path="/browse-locations" element={<BrowseLocations />} />
          <Route path="/explore-events" element={<ExploreEvents />} />
          <Route path="/eventpage" element={<EventPage events={events} />} />
          <Route path="/event/:id" element={<EventDetailPage events={events} />} />
          <Route path="/buy-tickets/:id" element={<BuyTicketsPage />} />
          <Route path="/ticket" element={<TicketPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
