// components/PostCard.js
import React, { useState } from "react";

const PostCard = ({ post, isNew }) => {
  const [expanded, setExpanded] = useState(false);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className={`post-card${isNew ? " post-card--new" : ""}`}>
      <div className="post-card-header">
        <span className="post-id">#{post.id}</span>
        <span className="post-user">👤 User {post.userId}</span>
      </div>

      <h3 className="post-title">{truncateText(post.title, 60)}</h3>

      <p className="post-body">
        {expanded ? post.body : truncateText(post.body, 120)}
      </p>

      {post.body.length > 120 && (
        <button
          className="read-more-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default PostCard;
