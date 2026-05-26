import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${isDarkMode ? "navbar-dark" : "navbar-light"}`}>
      <div className="nav-brand">
        <h2>🌡️ React App</h2>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
