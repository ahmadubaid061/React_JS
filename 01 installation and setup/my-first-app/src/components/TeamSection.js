function TeamSection({ members }) {
  return (
    <section
      id="team"
      style={{
        minHeight: "100vh",
        background: "#fff0f5",
        padding: "60px 20px",
      }}
    >
      <h2 className="text-center mb-5" style={{ fontWeight: "bold" }}>
        Our Team
      </h2>

      <div className="container">
        <div className="row justify-content-center">
          {members.map((member, index) => (
            // .map() loops through each member and creates a card
            <div className="col-md-4 mb-4" key={index}>
              <div className="card text-center shadow h-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <p style={{ color: "#888", fontSize: "0.9rem" }}>
                    {member.role}
                  </p>
                  <p className="card-text">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
