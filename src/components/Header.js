  import React from "react";
  import { Link } from "react-router-dom";

  function Header() {
    return (
      <header>
        <div className="website-name">
          <Link to="/">Event App</Link> {/* Homepage link */}
        </div>
        <div className="menu-buttons">
          <Link to="/login"><button>Me</button></Link>
        </div>
      </header>
    );
  }

  export default Header;
