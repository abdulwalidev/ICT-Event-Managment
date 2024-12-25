import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import HostEventPage from "./components/HostEventPage";
import EventFormPage from "./components/EventFormPage";
import SignupPage from "./components/SignupPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import new pages
import BrowseArtists from "./components/BrowseArtists";
import BrowseLocations from "./components/BrowseLocations";
import ExploreEvents from "./components/ExploreEvents";
import EventPage from "./components/EventPage"; // Import EventPage

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/host-event" element={<HostEventPage />} />
          <Route path="/event-form" element={<EventFormPage />} />
          {/* New Routes for Browse Artists, Browse Locations, and Explore Events */}
          <Route path="/browse-artists" element={<BrowseArtists />} />
          <Route path="/browse-locations" element={<BrowseLocations />} />
          <Route path="/explore-events" element={<ExploreEvents />} />
          {/* New Route for EventPage */}
          <Route path="/eventpage" element={<EventPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
