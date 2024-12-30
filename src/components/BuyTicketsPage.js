import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const events = [
  { id: 1, title: "Music Concert", date: "2024-12-30", location: "City Hall" },
  { id: 2, title: "Art Exhibition", date: "2024-12-28", location: "Art Gallery" },
  { id: 3, title: "Tech Conference", date: "2025-01-05", location: "Convention Center" },
  { id: 4, title: "Elegant Event", date: "2024-12-22", location: "Grand Ballroom" },
  { id: 5, title: "Glowing Sky Sphere", date: "2024-12-25", location: "Planetarium" },
  { id: 6, title: "Indicator Event", date: "2024-12-22", location: "Expo Center" },
];

function BuyTicketsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((event) => event.id === parseInt(id));
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/ticket", { state: { ticket: { ...event, ...formData } } });
  };

  const fillRandomInfo = () => {
    setFormData({
      name: "John Doe",
      cardNumber: "1234 5678 9101 1121",
      expiryDate: "12/25",
      cvv: "123",
    });
  };

  return (
    <div className="buy-tickets-page">
      <h1 className="buy-tickets-title">Buy Tickets for {event.title}</h1>
      <form className="buy-tickets-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="card-number">Card Number</label>
          <input
            type="text"
            id="card-number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiry-date">Expiry Date</label>
          <input
            type="text"
            id="expiry-date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="button"
            className="fill-random-button"
            onClick={fillRandomInfo}
          >
            Fill Random Info
          </button>
        </div>
      </form>
    </div>
  );
}

export default BuyTicketsPage;
