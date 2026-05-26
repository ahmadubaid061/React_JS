import React from "react";
import JokeComponent from "./components/JokeComponent";
import TodoComponent from "./components/TodoComponent";
import PostComponent from "./components/PostComponent";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="main-title">🪝 Custom Hook Demo - useFetch</h1>
      <p className="subtitle">
        Same hook, different APIs - Reusable data fetching
      </p>

      <div className="components-grid">
        <JokeComponent />
        <TodoComponent />
        <PostComponent />
      </div>
    </div>
  );
}

export default App;
