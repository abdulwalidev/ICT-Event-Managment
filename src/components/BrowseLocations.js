import React from "react";

function BrowseLocations() {
  return (
    <div className="browse-locations-page">
      <h1>Browse Locations</h1>
      <p>Find exciting event locations near you.</p>
      <div className="locations-list">
        {/* Example of location cards */}
        <div className="location-card">
          <img src="/images/location.jpg" alt="Location 1" />
          <h2>Location Name 1</h2>
        </div>
        <div className="location-card">
          <img src="/images/location.jpg" alt="Location 2" />
          <h2>Location Name 2</h2>
        </div>
        {/* Add more location cards as needed */}
      </div>
    </div>
  );
}

export default BrowseLocations;
