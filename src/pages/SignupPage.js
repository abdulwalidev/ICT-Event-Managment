import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulate successful sign-up logic
    console.log('Signed up with', email, password);
    navigate('/login'); // Redirect to login page after successful sign-up
  };

  return (
    <div className="signup-page">
      <div className="signup-form">
        <header>
          <h2>Sign Up</h2>
        </header>

        <form onSubmit={handleSignUp}>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
