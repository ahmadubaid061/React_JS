import React, { useState } from "react";
import HeroSection from "./components/HeroSection"; // ← import
import TeamSection from "./components/TeamSection"; // ← import
import LabSection from "./components/Lab10section";
import Count from "./components/Counter";

// Data passed as props
const heroData = {
  title: "Welcome to MyWebsite",
  description: "We build amazing things for the web.",
  image: "https://images.pexels.com/photos/17766789/pexels-photo-17766789.jpeg",
};

const teamData = [
  {
    name: "Ubaid Gul",
    role: "CEO & Founder",
    description: "Ubaid leads the team with 10+ years of experience.",
    image: "/images/ubaid.PNG",
  },
  {
    name: "Hassan Shah",
    role: "Website Developer",
    description: "Hassan builds robust and scalable web applications.",
    image: "/images/hassan.JPEG",
  },
  {
    name: "Didar Kareem",
    role: "Seo Specialist",
    description: "Didar crafts beautiful and intuitive user interfaces.",
    image: "/images/didar.png",
  },
];

// lab 10 section
const LabData = {
  title: "Welcome this lab 10 section",
  description:
    "In this lab will learn about using React Componenents and how to create and import them and how they will us mamke our code cleaner",
};

function App() {
  // search bar functionality
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const q = query.trim().toLowerCase();
    if (q === "herosection" || q === "hero") {
      document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
    } else if (q === "teamsection" || q === "team") {
      document.getElementById("team").scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Section not found! Try 'hero' or 'team'");
    }
    setQuery("");
  };
  return (
    <>
      {/* page header */}
      <div style={{ position: "sticky" }}>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
            background: "rgba(0, 0, 0, 0.5)", // 👈 add this
            backdropFilter: "blur(8px)", // 👈 glass effect (modern UI)
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="/">
              MyWebsite
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
                <li className="nav-item">
                  <a className="nav-link" href="#hero">
                    HeroSection
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    TeamSection
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Try 'hero' or 'team'"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "#fff",
                  }}
                />
                <button
                  className="btn btn-outline-light"
                  type="button"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/* hero section */}
        <HeroSection
          title={heroData.title}
          description={heroData.description}
          image={heroData.image}
        />
      </div>
      {/* teams section */}
      <TeamSection members={teamData} />
      {/* lab 10 section */}
      <LabSection title={LabData.title} description={LabData.description} />
      {/* counter program for practicing use states */}
      
      <Count />
    </>
  );
}

export default App;
