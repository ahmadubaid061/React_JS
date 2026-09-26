import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">◉</span>
          <span className="logo-text">Positivus</span>
        </div>
        <nav className="nav">
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <button className="quote-btn">Request a quote</button>
        </nav>
        <button className="mobile-menu-btn">☰</button>
      </header>

      {/* Hero Section */}
      <div className="hero-wrapper">
        <div className="hero">
          <div className="hero-left">
            <h1 className="hero-title">
              Navigating the
              <br />
              digital landscape
              <br />
              for success
            </h1>
            <p className="hero-description">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="hero-btn">Book a consultation</button>
          </div>
          <div className="hero-right">
            {/* Exact illustration matching original design */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 600 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hero-illustration"
            >
              {/* Background circle */}
              <circle
                cx="300"
                cy="250"
                r="180"
                fill="#B9FF66"
                fillOpacity="0.15"
              />
              <circle
                cx="300"
                cy="250"
                r="150"
                fill="#B9FF66"
                fillOpacity="0.3"
              />

              {/* Megaphone / Speaker body */}
              <path
                d="M220 200 L260 180 L340 210 L340 290 L260 320 L220 300 Z"
                fill="#191A23"
              />

              {/* Megaphone opening */}
              <ellipse cx="340" cy="250" rx="15" ry="40" fill="#B9FF66" />

              {/* Megaphone handle */}
              <rect
                x="200"
                y="230"
                width="30"
                height="40"
                rx="5"
                fill="#191A23"
              />

              {/* Sound waves */}
              <path
                d="M370 220 Q390 250 370 280"
                stroke="#191A23"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M390 200 Q420 250 390 300"
                stroke="#191A23"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M410 180 Q450 250 410 320"
                stroke="#191A23"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />

              {/* Decorative circles */}
              <circle cx="180" cy="160" r="12" fill="#B9FF66" />
              <circle
                cx="150"
                cy="200"
                r="8"
                fill="#191A23"
                fillOpacity="0.5"
              />
              <circle cx="200" cy="130" r="6" fill="#B9FF66" />
              <circle cx="450" cy="150" r="10" fill="#B9FF66" />
              <circle
                cx="480"
                cy="200"
                r="6"
                fill="#191A23"
                fillOpacity="0.4"
              />
              <circle
                cx="460"
                cy="350"
                r="12"
                fill="#B9FF66"
                fillOpacity="0.7"
              />
              <circle
                cx="200"
                cy="380"
                r="8"
                fill="#191A23"
                fillOpacity="0.3"
              />

              {/* Sparkle/star decorations */}
              <path
                d="M420 130 L425 140 L435 145 L425 150 L420 160 L415 150 L405 145 L415 140 Z"
                fill="#B9FF66"
              />
              <path
                d="M160 320 L163 327 L170 330 L163 333 L160 340 L157 333 L150 330 L157 327 Z"
                fill="#B9FF66"
              />

              {/* Chart/growth arrow */}
              <path
                d="M250 370 L300 340 L340 355 L380 320"
                stroke="#B9FF66"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="380" cy="320" r="5" fill="#B9FF66" />

              {/* Dots pattern */}
              <circle
                cx="100"
                cy="280"
                r="3"
                fill="#191A23"
                fillOpacity="0.3"
              />
              <circle
                cx="115"
                cy="300"
                r="3"
                fill="#191A23"
                fillOpacity="0.3"
              />
              <circle
                cx="130"
                cy="280"
                r="3"
                fill="#191A23"
                fillOpacity="0.3"
              />
              <circle
                cx="500"
                cy="280"
                r="3"
                fill="#191A23"
                fillOpacity="0.3"
              />
              <circle
                cx="515"
                cy="300"
                r="3"
                fill="#191A23"
                fillOpacity="0.3"
              />
              <circle
                cx="530"
                cy="280"
                r="3"
                fill="#191A23"
                fillOpacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="brands">
        <span className="brand">amazon</span>
        <span className="brand">dribbble</span>
        <span className="brand">HubSpot</span>
        <span className="brand">Notion</span>
        <span className="brand">NETFLIX</span>
        <span className="brand">zoom</span>
      </div>
    </div>
  );
};

export default Home;
