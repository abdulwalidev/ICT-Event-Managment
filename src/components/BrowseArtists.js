import React from "react";

function BrowseArtists() {
  return (
    <div className="browse-artists-page">
      <h1>Browse Artists</h1>
      <p>Explore various artists performing at upcoming events.</p>
      <div className="artists-list">
        {/* Example of artists' cards */}
        <div className="artist-card">
          <img src="/images/artist.jpg" alt="Artist 1" />
          <h2>Artist Name 1</h2>
        </div>
        <div className="artist-card">
          <img src="/images/artist.jpg" alt="Artist 2" />
          <h2>Artist Name 2</h2>
        </div>
        {/* Add more artist cards as needed */}
      </div>
    </div>
  );
}

export default BrowseArtists;
