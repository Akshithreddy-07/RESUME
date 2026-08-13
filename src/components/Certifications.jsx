function Certifications() {
  const certifications = [
    {
      title: "Machine Learning Certification",
      organization: "Certification Organization",
      year: "2026",
      description:
        "Certification focused on machine learning concepts, data analysis, and model development."
    },
    {
      title: "Web Development Certification",
      organization: "Certification Organization",
      year: "2026",
      description:
        "Certification covering modern web development technologies and application development."
    },
    {
      title: "Programming Certification",
      organization: "Certification Organization",
      year: "2025",
      description:
        "Certification demonstrating programming and problem-solving skills."
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="section-title">
        <p>My Achievements</p>
        <h2>Certifications</h2>
      </div>

      <div className="certifications-container">
        {certifications.map((certificate) => (
          <div className="certificate-card" key={certificate.title}>
            <div className="certificate-icon">🏆</div>

            <div>
              <span>{certificate.year}</span>
              <h3>{certificate.title}</h3>
              <h4>{certificate.organization}</h4>
              <p>{certificate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;