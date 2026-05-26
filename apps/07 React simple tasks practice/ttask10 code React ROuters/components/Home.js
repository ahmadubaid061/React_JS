import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Blog posts data
const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "John Doe",
    date: "March 15, 2024",
    excerpt:
      "React is a JavaScript library for building user interfaces. Learn the basics and start your journey...",
    content:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    author: "Jane Smith",
    date: "March 18, 2024",
    excerpt:
      "Hooks are functions that let you use state and lifecycle features in functional components...",
    content:
      "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. The most common hooks are useState, useEffect, and useContext. Hooks allow you to reuse stateful logic without changing your component hierarchy.",
  },
  {
    id: 3,
    title: "React Router Deep Dive",
    author: "Mike Johnson",
    date: "March 20, 2024",
    excerpt:
      "Learn how to handle navigation and dynamic routes in React applications...",
    content:
      "React Router is a fully-featured client and server-side routing library for React. It helps you create single-page applications with navigation. Dynamic routes allow you to create pages that change based on URL parameters, perfect for blog posts, user profiles, and product pages.",
  },
  {
    id: 4,
    title: "State Management in React",
    author: "Sarah Wilson",
    date: "March 22, 2024",
    excerpt:
      "Explore different state management solutions like Context API and Redux...",
    content:
      "State management is crucial in React applications. The Context API provides a way to share values between components without prop drilling. For larger applications, Redux offers a predictable state container that helps you manage complex state logic and debugging.",
  },
  {
    id: 5,
    title: "Optimizing React Performance",
    author: "Tom Brown",
    date: "March 25, 2024",
    excerpt:
      "Tips and tricks to make your React apps faster and more efficient...",
    content:
      "React is fast by default, but there are ways to optimize performance. Use React.memo to prevent unnecessary re-renders. Implement code splitting with lazy loading. Virtualize long lists with react-window. Always profile your app to find performance bottlenecks.",
  },
];

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>📝 Blog Posts</h1>
        <p>Click on any post to read full details</p>
      </div>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2 className="post-title">{post.title}</h2>
            <div className="post-meta">
              <span className="post-author">✍️ {post.author}</span>
              <span className="post-date">📅 {post.date}</span>
            </div>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link to={`/posts/${post.id}`} className="read-more-btn">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
