import Navigation from "./Navigation";
import "../styles/style.css";

export default function Dashboard({ onSignOut }) {
  return (
    <div>
      <Navigation onSignOut={onSignOut} />

      <main className="main-content">
        <div className="hero-section">
          <h1> Welcome Back!</h1>
          <p>
            You have successfully authenticated. Navigate through the
            application using the menu above.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <span className="feature-icon">📈</span>
            <h3>Analytics</h3>
            <p>Track your performance metrics and insights.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔔</span>
            <h3>Updates</h3>
            <p>5 new notifications waiting for you.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚙️</span>
            <h3>Preferences</h3>
            <p>Customize your experience.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
