import React, { useState } from "react";
import "./LoginToggle.css";

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter both username and password");
      return;
    }
    setError("");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {isLoggedIn ? (
          // Logged in state
          <div className="welcome-section">
            <h1 className="welcome-title">Welcome Back! 👋</h1>
            <p className="welcome-message">
              Hello, <span className="username">{username}</span>
            </p>
            <button onClick={handleLogout} className="btn-logout">
              Logout
            </button>
          </div>
        ) : (
          // Logged out state - Login form
          <div className="login-section">
            <h1 className="login-title">Login</h1>
            <p className="login-message">Enter your credentials to continue</p>

            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="form-input"
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button onClick={handleLogin} className="btn-login">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginToggle;
