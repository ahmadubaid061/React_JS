import React, { useState, useEffect } from "react";
import "./RandomJoke.css";

function RandomJoke() {
  // State for storing the joke
  const [joke, setJoke] = useState(null);

  // State for loading status
  const [loading, setLoading] = useState(true);

  // State for error handling
  const [error, setError] = useState(null);

  // Function to fetch a random joke
  const fetchRandomJoke = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }

      const data = await response.json();
      setJoke(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // useEffect to fetch joke when component mounts (page loads)
  useEffect(() => {
    fetchRandomJoke();
  }, []); // Empty dependency array means this runs only once when component mounts

  // Handle new joke button click
  const handleNewJoke = () => {
    fetchRandomJoke();
  };

  return (
    <div className="joke-container">
      <div className="joke-card">
        <h1 className="joke-title">Random Joke Generator</h1>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading a hilarious joke for you...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-state">
            <p className="error-icon">😢</p>
            <p className="error-message">Oops! {error}</p>
            <button onClick={handleNewJoke} className="btn-retry">
              Try Again
            </button>
          </div>
        )}

        {/* Joke Display */}
        {!loading && !error && joke && (
          <div className="joke-content">
            <div className="joke-setup">
              <span className="quote-icon">"</span>
              {joke.setup}
            </div>
            <div className="joke-punchline">
              <span className="punchline-label">😂 Punchline:</span>
              {joke.punchline}
            </div>

            {/* Joke Metadata */}
            <div className="joke-meta">
              <span className="joke-type">Type: {joke.type}</span>
              <span className="joke-id">Joke #{joke.id}</span>
            </div>
          </div>
        )}

        {/* New Joke Button */}
        <button
          onClick={handleNewJoke}
          className="btn-new-joke"
          disabled={loading}
        >
          {loading ? "Loading..." : "🎲 New Joke"}
        </button>
      </div>
    </div>
  );
}

export default RandomJoke;
