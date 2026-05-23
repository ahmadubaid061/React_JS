import Navigation from "./Navigation";
import "../styles/style.css";

export default function CompanyInfo({ onSignOut }) {
  return (
    <div>
      <Navigation onSignOut={onSignOut} />

      <main className="main-content">
        <div className="hero-section">
          <h1>🏢 Our Story</h1>
          <p>Discover who we are and what drives us.</p>
        </div>

        <div className="info-container">
          <div className="info-card">
            <h2>Our Vision</h2>
            <p>
              We create intuitive digital solutions that empower individuals and
              businesses to achieve more. This platform showcases modern React
              patterns including protected routes, state management, and
              responsive design with React Router v6.
            </p>
          </div>

          <div className="team-showcase">
            {[
              { name: "Maria Garcia", position: "Lead Developer", icon: "💻" },
              {
                name: "James Wilson",
                position: "Product Designer",
                icon: "🎨",
              },
              {
                name: "Priya Patel",
                position: "Systems Architect",
                icon: "⚡",
              },
            ].map((member) => (
              <div className="team-card" key={member.name}>
                <span className="team-icon">{member.icon}</span>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
