import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewsApp.css";

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // API configuration
  const API_KEY = "f07b0882d4a94064a1f0a5214a44f427";
  const BASE_URL = "https://newsapi.org/v2/top-headlines";


  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async (category = "general") => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}`,
        {
          timeout: 10000, // 10 second timeout
        },
      );

      if (response.data.status === "ok") {
        setArticles(response.data.articles);
      } else {
        throw new Error("Failed to fetch news");
      }
    } catch (err) {
      if (err.code === "ECONNABORTED") {
        setError(
          "Request timeout. Please check your connection and try again.",
        );
      } else if (err.response && err.response.status === 426) {
        setError(
          "API key issue: Please check your API key or use a different news API.",
        );
      } else {
        setError(`Error fetching news: ${err.message}`);
      }
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchNews();
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${BASE_URL}?q=${searchTerm}&apiKey=${API_KEY}`,
        {
          timeout: 10000,
        },
      );

      if (response.data.status === "ok") {
        setArticles(response.data.articles);
      } else {
        throw new Error("No articles found");
      }
    } catch (err) {
      setError(`Search error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (category) => {
    fetchNews(category);
  };

  // Helper function to get image URL with fallback
  const getImageUrl = (article) => {
    if (article.urlToImage) {
      return article.urlToImage;
    }
    return "https://via.placeholder.com/400x200?text=No+Image+Available";
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading latest news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h3>Something went wrong</h3>
        <p>{error}</p>
        <button onClick={() => fetchNews()} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="news-app">
      <header className="app-header">
        <h1>📰 Latest News</h1>
        <p>Stay updated with what's happening around the world</p>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-btn">
            🔍 Search
          </button>
        </div>

        {/* Category Buttons */}
        <div className="categories">
          {[
            "general",
            "business",
            "technology",
            "entertainment",
            "sports",
            "science",
            "health",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className="category-btn"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </header>

      {/* Articles Grid */}
      <div className="articles-grid">
        {articles.length === 0 ? (
          <div className="no-results">
            <p>No articles found. Try a different search term or category.</p>
          </div>
        ) : (
          articles.map(
            (article, index) =>
              article &&
              article.title !== "[Removed]" && (
                <div key={index} className="article-card">
                  <img
                    src={getImageUrl(article)}
                    alt={article.title || "News article"}
                    className="article-image"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x200?text=Image+Not+Available";
                    }}
                  />
                  <div className="article-content">
                    <h3 className="article-title">
                      {article.title || "No title available"}
                    </h3>
                    <p className="article-description">
                      {article.description ||
                        "No description available for this article."}
                    </p>
                    {article.author && (
                      <p className="article-author">By: {article.author}</p>
                    )}
                    {article.publishedAt && (
                      <p className="article-date">
                        {new Date(article.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </p>
                    )}
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="read-more"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ),
          )
        )}
      </div>
    </div>
  );
};

export default NewsApp;
