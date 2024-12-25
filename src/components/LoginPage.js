import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "" || password === "") {
      setErrorMessage("Please fill in both fields.");
    } else {
      // Perform login (connect with backend here)
      console.log("Login successful");
    }
  };

  return (
    <div>
      <Header />
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="link">
            <a href="/signup">Don't have an account? Sign up</a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
