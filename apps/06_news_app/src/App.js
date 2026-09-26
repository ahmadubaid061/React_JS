// App.js
import React, { useState, useCallback } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./styles/Task2.css";

function App() {
  // KEY FIX: posts live here — single source of truth for both components
  const [posts, setPosts] = useState(null); // null = "not loaded yet"
  const [newPostId, setNewPostId] = useState(null);

  // Called by PostForm when a new post is created
  const handlePostCreated = useCallback((post) => {
    // Just prepend to the existing array — no refetch, no race condition
    setPosts((prev) => [post, ...(prev ?? [])]);
    setNewPostId(post.id);
    setTimeout(() => setNewPostId(null), 2500);
  }, []);

  // Called by PostList once it has fetched data from the API
  const handlePostsLoaded = useCallback((fetchedPosts) => {
    // Only set if we haven't loaded yet, so user-created posts aren't wiped
    setPosts((prev) => prev ?? fetchedPosts);
  }, []);

  return (
    <div className="task2-container">
      <header className="task2-header">
        <h1>📋 Web Engineering - API Integration</h1>
        <p>GET & POST Requests | Form Handling | Responsive Design</p>
      </header>

      <div className="task2-grid">
        <div className="form-section">
          <PostForm onPostCreated={handlePostCreated} />
        </div>
        <div className="list-section">
          <PostList
            posts={posts}
            newPostId={newPostId}
            onPostsLoaded={handlePostsLoaded}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
