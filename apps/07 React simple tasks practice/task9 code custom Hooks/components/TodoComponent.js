import React from "react";
import useFetch from "../hooks/useFetch";
import "./TodoComponent.css";

function TodoComponent() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (loading) return (
    <div className="card">
      <div className="loader"></div>
      <p>Loading todo...</p>
    </div>
  );
  
  if (error) return (
    <div className="card error-card">
      <p>Error: {error}</p>
    </div>
  );

  return (
    <div className="card todo-card">
      <h2>📝 Todo Task</h2>
      <p className="todo-title">{data?.title}</p>
      <div className="todo-status">
        <span className={`status ${data?.completed ? "completed" : "pending"}`}>
          {data?.completed ? "✓ Completed" : "⏳ Pending"}
        </span>
      </div>
    </div>
  );
}

export default TodoComponent;