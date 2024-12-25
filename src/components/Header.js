import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="website-name">
        <Link to="/">Event App</Link> {/* Homepage link */}
      </div>
      <div className="menu-buttons">
        <button><Link to="/login">Login</Link></button>
        <button><Link to="/signup">Sign Up</Link></button>
      </div>
    </header>
  );
}

export default Header;
