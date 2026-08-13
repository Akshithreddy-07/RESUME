import { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "TheraMeet",
      category: "Web",
      description:
        "A therapy appointment platform that allows patients to find doctors, book appointments, and manage their sessions.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Prediction Project",
      category: "AI/ML",
      description:
        "A machine learning project designed to analyze data and make useful predictions using trained models.",
      technologies: ["Python", "NumPy", "Pandas", "Scikit-learn"],
      github: "#",
      demo: "#"
    },
    {
      title: "Drone Technology Project",
      category: "IoT",
      description:
        "An exploration of drone technology involving flight controllers, sensors, and autonomous systems.",
      technologies: ["Arduino", "Sensors", "Flight Controller"],
      github: "#",
      demo: "#"
    }
  ];

  const categories = ["All", "Web", "AI/ML", "IoT"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects section">
      <div className="section-title">
        <p>What I've Built</p>
        <h2>Projects</h2>
      </div>

      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              <span>&lt;/&gt;</span>
            </div>

            <div className="project-content">
              <span className="project-category">{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github}>GitHub ↗</a>
                <a href={project.demo}>Live Demo ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;