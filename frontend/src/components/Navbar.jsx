import React from "react";

function Navbar({ userName = "Farmer" }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span className="logo-icon">🌾</span>
          <span className="logo-text">AgriSmart AI</span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="notification">
          🔔
        </div>

        <div className="user-profile">
          <div className="user-avatar">
            {userName.charAt(0).toUpperCase()}
          </div>

          <div className="user-info">
            <span className="user-name">{userName}</span>
            <span className="user-role">Farm Manager</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;