// components/PostForm.js
import React, { useState } from "react";

const PostForm = ({ onPostCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.length < 5) {
      newErrors.title = "Title must be at least 5 characters";
    } else if (formData.title.length > 100) {
      newErrors.title = "Title must be less than 100 characters";
    }

    if (!formData.body.trim()) {
      newErrors.body = "Content is required";
    } else if (formData.body.length < 20) {
      newErrors.body = "Content must be at least 20 characters";
    } else if (formData.body.length > 500) {
      newErrors.body = "Content must be less than 500 characters";
    }

    return newErrors;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // POST Request + Add to local list
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create new post object
    const newPost = {
      id: Date.now(), // Unique ID using timestamp
      title: formData.title,
      body: formData.body,
      userId: formData.userId,
    };

    try {
      // Try to send to API (but don't wait for it to show the post)
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          body: formData.body,
          userId: formData.userId,
        }),
      }).catch((err) => console.log("API error but post saved locally:", err));

      // Immediately add post to parent component
      onPostCreated(newPost);

      // Success
      setSubmitStatus({
        type: "success",
        message: "Post created successfully!",
      });

      // Reset form
      setFormData({
        title: "",
        body: "",
        userId: 1,
      });

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message: `Failed to create post: ${err.message}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="post-form-container">
      <h2>✏️ Create New Post</h2>
      <p className="form-subtitle">Fill out the form below to add a new post</p>

      {submitStatus && (
        <div className={`status-message ${submitStatus.type}`}>
          {submitStatus.type === "success" ? "✅" : "❌"} {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">
            Title <span className="required">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter post title (min. 5 characters)"
            className={errors.title ? "error-input" : ""}
          />
          {errors.title && <span className="error-text">{errors.title}</span>}
          <small className="char-count">{formData.title.length}/100</small>
        </div>

        <div className="form-group">
          <label htmlFor="body">
            Content <span className="required">*</span>
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Write your post content here (min. 20 characters)..."
            rows="5"
            className={errors.body ? "error-input" : ""}
          />
          {errors.body && <span className="error-text">{errors.body}</span>}
          <small className="char-count">{formData.body.length}/500</small>
        </div>

        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <select
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          >
            <option value="1">User 1</option>
            <option value="2">User 2</option>
            <option value="3">User 3</option>
            <option value="4">User 4</option>
            <option value="5">User 5</option>
          </select>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "📤 Create Post"}
        </button>
      </form>

      <div className="api-info">
        <p>
          📡 API: JSONPlaceholder (https://jsonplaceholder.typicode.com/posts)
        </p>
        <p>✨ New posts appear immediately in the list below!</p>
      </div>
    </div>
  );
};

export default PostForm;
