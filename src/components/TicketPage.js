import React from "react";
import { useLocation } from "react-router-dom";

const TicketPage = () => {
  const location = useLocation();
  const { ticket } = location.state || {};

  if (!ticket) {
    return <div className="ticket-page">No ticket information available.</div>;
  }

  return (
    <div className="ticket-page">
      <div className="ticket-container">
        <div className="ticket-header">🎟️ Your Virtual Ticket</div>
        <div className="ticket-details">
          <span className="ticket-label">Event:</span>
          <span className="ticket-value">{ticket.title}</span>
        </div>
        <div className="ticket-details">
          <span className="ticket-label">Date:</span>
          <span className="ticket-value">{ticket.date}</span>
        </div>
        <div className="ticket-details">
          <span className="ticket-label">Location:</span>
          <span className="ticket-value">{ticket.location}</span>
        </div>
        <div className="ticket-details">
          <span className="ticket-label">Name:</span>
          <span className="ticket-value">{ticket.name}</span>
        </div>
        <div className="ticket-details">
          <span className="ticket-label">Card Number:</span>
          <span className="ticket-value">**** **** **** {ticket.cardNumber.slice(-4)}</span>
        </div>
        <div className="qr-code">QR Code Here</div>
        <div className="footer">Thank you for your purchase!</div>
      </div>
    </div>
  );
};

export default TicketPage;
