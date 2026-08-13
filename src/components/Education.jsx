function Education() {
  const education = [
    {
      year: "2024 - Present",
      degree: "Bachelor of Technology",
      institution: "Your College Name",
      description:
        "Currently pursuing a B.Tech degree with a focus on technology, software development, and emerging technologies."
    },
    {
      year: "2022 - 2024",
      degree: "Intermediate",
      institution: "Your School / College Name",
      description:
        "Completed higher secondary education with a focus on mathematics and science."
    }
  ];

  return (
    <section id="education" className="education section">
      <div className="section-title">
        <p>My Academic Journey</p>
        <h2>Education</h2>
      </div>

      <div className="timeline">
        {education.map((item) => (
          <div className="timeline-item" key={item.year}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>{item.year}</span>
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;