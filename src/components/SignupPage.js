import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link here
import Header from "./Header";


function SignupPage() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (username === "" || email === "" || password === "") {
      setErrorMessage("Please fill in all fields.");
    } else {
      // Perform signup (connect with backend here)
      console.log("Signup successful");
    }
  };

  return (
    <div>
      <Header />
      <div className="login-page">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="password" placeholder="Password" /> 
          <button type="submit">Sign Up</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="link">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default SignupPage;
