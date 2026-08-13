function Education() {
  const education = [
    {
      year: "2025 - 2029",
      degree: "Bachelor of Technology",
      institution: "KLH UNIVERSITY",
      description:
        "Currently pursuing a B.Tech degree in ECE with a focus on technology, software development, and emerging technologies."
    },
    {
      year: "2023 - 2025",
      degree: "Intermediate",
      institution: "NARAYANA JUNIOR COLLEGE",
      CGPA: "Percentage: 96.5% ",
      description:
        "Completed higher secondary education with a focus on mathematics and science."
    },
    {
        year: "2022 - 2023",
      degree: "ssc ",
      institution: "NAVEENA MONTY SCHOOL",
      CGPA: "CGPA: 9.5 ",
      description:"completed 10th class with a wonderfull results."
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
              <h4>{item.CGPA}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;