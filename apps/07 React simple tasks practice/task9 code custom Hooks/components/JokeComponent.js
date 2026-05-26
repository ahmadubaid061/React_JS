import React from "react";
import useFetch from "../hooks/useFetch";
import "./JokeComponent.css";

function JokeComponent() {
  const { data, loading, error } = useFetch(
    "https://official-joke-api.appspot.com/random_joke",
  );

  if (loading)
    return (
      <div className="card">
        <div className="loader"></div>
        <p>Loading joke...</p>
      </div>
    );

  if (error)
    return (
      <div className="card error-card">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div className="card joke-card">
      <h2>😂 Random Joke</h2>
      <p className="setup">{data?.setup}</p>
      <p className="punchline">{data?.punchline}</p>
    </div>
  );
}

export default JokeComponent;
