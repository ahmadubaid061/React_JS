// src/HeroSection.js

function HeroSection({ title, description, image }) {
  // title, description, image → these come from App.js via props
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="d-flex align-items-center justify-content-center text-center"
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          padding: "40px",
          borderRadius: "12px",
        }}
      >
        <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}>
          {title}
        </h1>
        <p style={{ color: "#ddd", fontSize: "1.2rem", marginTop: "16px" }}>
          {description}
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
