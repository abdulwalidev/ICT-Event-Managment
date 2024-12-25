import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function HostEventPage() {
  return (
    <div>
      <Header />
      <div className="host-new-event-card">
        <h3>Host a New Event</h3>
        <button onClick={() => window.location.href='/event-form'}>Create Event</button>
      </div>
      <Footer />
    </div>
  );
}

export default HostEventPage;
