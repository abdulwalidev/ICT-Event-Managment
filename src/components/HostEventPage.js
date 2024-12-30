import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function HostEventPage() {
  return (
    <div>
      <Header /><div>
        <br /> <br /><br />
      <div className="host-new-event-card">
        <br />
        <h3>Host a New Event</h3>
        <button onClick={() => window.location.href='/event-form'}>Create Event</button>
      </div>
      <Footer />
      </div>
    </div>
      );
}

export default HostEventPage;
