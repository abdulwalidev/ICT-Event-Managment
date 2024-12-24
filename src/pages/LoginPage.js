import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy check for login (for Gmail and password)
    if (email.includes('@gmail.com') && password) {
      setIsLoggedIn(true); // Set user as logged in
      navigate('/host-event'); // Redirect to the Host Event page
    } else {
      alert('Please enter valid Gmail and password');
    }
  };

  return (
    <div className="login-page">
      <header>
        <h2>Login</h2>
      </header>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Enter your Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
