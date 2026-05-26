import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./PostDetail.css";

// Same posts data (in real app, this would come from API)
const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "John Doe",
    date: "March 15, 2024",
    excerpt: "React is a JavaScript library for building user interfaces...",
    content:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.\n\nComponents are the building blocks of React applications. They let you split the UI into independent, reusable pieces. Think of them as custom HTML elements that you can control with JavaScript. Props are read-only inputs to components, while state allows components to manage dynamic data.",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    author: "Jane Smith",
    date: "March 18, 2024",
    excerpt:
      "Hooks are functions that let you use state and lifecycle features...",
    content:
      "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. The most common hooks are useState, useEffect, and useContext. Hooks allow you to reuse stateful logic without changing your component hierarchy.\n\nThe useState hook lets you add state to functional components. The useEffect hook lets you perform side effects like data fetching. The useContext hook provides a way to consume context without wrapping components. Hooks make your code cleaner and more reusable.",
  },
  {
    id: 3,
    title: "React Router Deep Dive",
    author: "Mike Johnson",
    date: "March 20, 2024",
    excerpt: "Learn how to handle navigation and dynamic routes...",
    content:
      "React Router is a fully-featured client and server-side routing library for React. It helps you create single-page applications with navigation. Dynamic routes allow you to create pages that change based on URL parameters, perfect for blog posts, user profiles, and product pages.\n\nKey components include BrowserRouter for routing, Routes for defining routes, Route for individual paths, Link for navigation, and useParams for accessing dynamic parameters. Nested routes let you create complex layouts. Protected routes handle authentication.",
  },
  {
    id: 4,
    title: "State Management in React",
    author: "Sarah Wilson",
    date: "March 22, 2024",
    excerpt: "Explore different state management solutions...",
    content:
      "State management is crucial in React applications. The Context API provides a way to share values between components without prop drilling. For larger applications, Redux offers a predictable state container that helps you manage complex state logic and debugging.\n\nLocal state is fine for simple components. Lifting state up helps share state between siblings. The Context API is good for themes, user auth, and settings. Redux is excellent for large apps with complex data flows. Choose based on your app's complexity.",
  },
  {
    id: 5,
    title: "Optimizing React Performance",
    author: "Tom Brown",
    date: "March 25, 2024",
    excerpt: "Tips and tricks to make your React apps faster...",
    content:
      "React is fast by default, but there are ways to optimize performance. Use React.memo to prevent unnecessary re-renders. Implement code splitting with lazy loading. Virtualize long lists with react-window. Always profile your app to find performance bottlenecks.\n\nLazy loading reduces initial bundle size. useMemo and useCallback memoize expensive calculations. Avoid inline functions in render. Use production builds for deployment. Monitor bundle size with tools like Webpack Bundle Analyzer.",
  },
];

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const postId = parseInt(id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="not-found-container">
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/" className="back-home-btn">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="post-detail-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
      <div className="post-detail-card">
        <h1 className="detail-title">{post.title}</h1>
        <div className="detail-meta">
          <span className="detail-author">✍️ {post.author}</span>
          <span className="detail-date">📅 {post.date}</span>
        </div>
        <div className="detail-content">
          <p>
            {post.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="detail-paragraph">
                {paragraph}
              </p>
            ))}
          </p>
        </div>
        <Link to="/" className="read-more-btn">
          ← Back to All Posts
        </Link>
      </div>
    </div>
  );
}

export default PostDetail;
