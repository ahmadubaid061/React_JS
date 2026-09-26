// components/PostList.js
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostList = ({ posts, newPostId, onPostsLoaded }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  // GET Request — runs once on mount
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=9",
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Hand data up to App so App owns the array
        onPostsLoaded(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // ↑ intentionally empty — we only fetch once; new posts come via props

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h3>Failed to load posts</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  const displayPosts = posts ?? [];
  const filteredPosts = displayPosts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="post-list-container">
      <div className="list-header">
        <h2>📌 Posts ({filteredPosts.length})</h2>
        <input
          type="text"
          placeholder="🔍 Filter posts by title..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="posts-grid">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} isNew={post.id === newPostId} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="no-results">
          <p>No posts found matching &ldquo;{filter}&rdquo;</p>
        </div>
      )}
    </div>
  );
};

export default PostList;
