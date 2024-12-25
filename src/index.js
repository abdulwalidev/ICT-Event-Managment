import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HostEventPage from "./components/HostEventPage";
import EventFormPage from "./components/EventFormPage";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/host-event" element={<HostEventPage />} />
      <Route path="/event-form" element={<EventFormPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
