function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: "💻",
      skills: ["Java", "Python", "JavaScript", "C"]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["HTML", "CSS", "React", "Node.js"]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: ["Python", "NumPy", "Pandas", "Scikit-learn"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Google Colab"]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="section-title">
        <p>What I Work With</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-container">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <div className="skill-icon">{category.icon}</div>

            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;