const certifications = [
  {
    title: "Smart India Hackathon 2026",
    organization: "Ministry of Education, Government of India",
    year: "2026",
    description: "Certificate of Participation in the national-level Smart India Hackathon 2026.",
    image: "/certificates/smart-india-hackathon-2026.png"
  },
  {
    title: "Legacy Responsive Web Design V8",
    organization: "freeCodeCamp",
    year: "2026",
    description: "Developer Certification representing approximately 300 hours of work.",
    image: "/certificates/freecodecamp-responsive-web-design.png"
  },
  {
    title: "Mastering IoT with Arduino",
    organization: "Infosys Springboard",
    year: "2026",
    description: "Course completion certificate for Mastering IoT with Arduino.",
    image: "/certificates/infosys-mastering-iot-with-arduino.png"
  },
  {
    title: "Arduino React",
    organization: "Infosys Springboard",
    year: "2026",
    description: "Course completion certificate for Arduino React.",
    image: "/certificates/infosys-arduino-react.png"
  },
  {
    title: "PRISMTECH 2026",
    organization: "IEEE SB KLH",
    year: "2026",
    description: "Certificate of Participation in the 24-hour national-level hackathon held at KL Hyderabad, Aziznagar Campus.",
    image: "/certificates/prismtech-2026.png"
  }
];

function Certifications() {
  return (
    <section id="certifications" className="certifications section">
      <div className="section-title">
        <p>My Achievements</p>
        <h2>Certifications</h2>
      </div>

      <div className="certifications-container">
        {certifications.map((certificate) => (
          <article className="certificate-card" key={certificate.title}>
            <a
              className="certificate-preview"
              href={certificate.image}
              target="_blank"
              rel="noreferrer"
              aria-label={`View full certificate: ${certificate.title}`}
            >
              <img src={certificate.image} alt={`${certificate.title} certificate`} loading="lazy" />
              <span className="certificate-view">View certificate ↗</span>
            </a>
            <div className="certificate-details">
              <span>{certificate.year}</span>
              <h3>{certificate.title}</h3>
              <h4>{certificate.organization}</h4>
              <p>{certificate.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
