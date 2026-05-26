import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-card">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="error-actions">
          <Link to="/" className="home-link">
            🏠 Go to Homepage
          </Link>
          <button onClick={() => window.history.back()} className="back-link">
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
