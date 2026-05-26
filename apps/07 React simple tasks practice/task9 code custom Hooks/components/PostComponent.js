import React from "react";
import useFetch from "../hooks/useFetch";
import "./PostComponent.css";

function PostComponent() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1",
  );

  if (loading)
    return (
      <div className="card">
        <div className="loader"></div>
        <p>Loading post...</p>
      </div>
    );

  if (error)
    return (
      <div className="card error-card">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div className="card post-card">
      <h2>📄 Blog Post</h2>
      <h3 className="post-title">{data?.title}</h3>
      <p className="post-body">{data?.body}</p>
    </div>
  );
}

export default PostComponent;
