function LabSection({ title, description }) {
  return (
    <section
      id="lab10Section"
      style={{
        height: "100vh",
        backgroundColor: "darkblue",
      }}
      className="d-flex align-items-center justify-content-center text-center"
    >
      <div style={{ maxWidth: "700px", padding: "20px" }}>
        <span
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
            padding: "6px 18px",
            borderRadius: "20px",
            fontSize: "0.85rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Welcome
        </span>

        <h1
          style={{
            color: "#ffffff",
            fontSize: "3.5rem",
            fontWeight: "800",
            marginTop: "20px",
            lineHeight: "1.2",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </h1>

        <div
          style={{
            width: "60px",
            height: "4px",
            background: "#fff",
            margin: "20px auto",
            borderRadius: "2px",
          }}
        />

        <p
          style={{
            color: "#e0e0e0",
            fontSize: "1.15rem",
            lineHeight: "1.8",
            marginBottom: "32px",
          }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}

export default LabSection;
