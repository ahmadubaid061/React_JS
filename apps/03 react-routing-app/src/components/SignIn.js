import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

const AUTH_USERNAME = "demo";
const AUTH_PASSWORD = "demo123";

export default function SignIn({ onAuthenticate }) {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [authError, setAuthError] = useState("");

  function handleAuthentication(e) {
    e.preventDefault();

    if (!userInput || !passInput) {
      setAuthError("Both fields are required.");
      return;
    }

    if (userInput === AUTH_USERNAME && passInput === AUTH_PASSWORD) {
      setAuthError("");
      onAuthenticate();
      navigate("/dashboard");
    } else {
      setAuthError("Incorrect username or password.");
    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-header">
          <h1>✨ MyDashboard</h1>
          <p>Sign in to continue</p>
        </div>

        <form onSubmit={handleAuthentication} className="auth-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={passInput}
              onChange={(e) => setPassInput(e.target.value)}
            />
          </div>

          {authError && <p className="error-message">⚠️ {authError}</p>}

          <button type="submit" className="auth-btn">
            Sign In
          </button>
        </form>

        <p className="demo-hint">Demo: demo / demo123</p>
      </div>
    </div>
  );
}
