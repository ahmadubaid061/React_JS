import { useState } from 'react';
import Navigation from './Navigation';
import '../styles/style.css';

export default function FeedbackForm({ onSignOut }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', emailAddress: '', comments: '' });

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div>
      <Navigation onSignOut={onSignOut} />

      <main className="main-content">
        <div className="hero-section">
          <h1>💬 Share Your Thoughts</h1>
          <p>We value your feedback and will respond promptly.</p>
        </div>

        {isSubmitted ? (
          <div className="success-message">
            ✓ Thank you! Your feedback has been received.
          </div>
        ) : (
          <form className="feedback-form" onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input
                name="emailAddress"
                type="email"
                placeholder="you@example.com"
                value={formData.emailAddress}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Your Message</label>
              <textarea
                name="comments"
                rows="5"
                placeholder="Please share your feedback..."
                value={formData.comments}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Send Feedback</button>
          </form>
        )}
      </main>
    </div>
  );
}