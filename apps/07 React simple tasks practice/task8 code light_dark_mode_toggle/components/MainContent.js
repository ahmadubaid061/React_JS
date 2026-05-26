import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./MainContent.css";

function MainContent() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`main-content ${isDarkMode ? "content-dark" : "content-light"}`}
    >
      <div className="content-card">
        <h1>Welcome to Theme Switcher</h1>
        <p>
          This app uses React Context API to manage global theme state. No prop
          drilling needed!
        </p>
        <div className="feature-grid">
          <div className="feature">
            <h3>🎨 Global State</h3>
            <p>Theme is accessible anywhere</p>
          </div>
          <div className="feature">
            <h3>🔄 Real-time Update</h3>
            <p>Changes reflect everywhere instantly</p>
          </div>
          <div className="feature">
            <h3>🚀 No Prop Drilling</h3>
            <p>Components access theme directly</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
