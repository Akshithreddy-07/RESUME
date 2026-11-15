import { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "AnimeFlekz",
      category: "Web",
      description: "A web development project built as part of the Front-End Development course (FEDF).",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      github: "https://github.com/Akshithreddy-07/FEDF",
      demo: "https://animeflekz.netlify.app/"
    },
    {
      title: "TheraMeet",
      category: "Web",
      description: "A therapy appointment platform that helps patients find doctors, book appointments, and manage their sessions.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Akshithreddy-07/THERAMEET",
      demo: "https://therameet.netlify.app/"
    },
    {
      title: "Ground Vibration Detection",
      category: "IoT",
      description: "A ground-vibration monitoring project that uses sensor data and signal processing to detect and analyze vibration activity.",
      technologies: ["Sensors", "Signal Processing", "Embedded Systems"],
      github: "https://github.com/Akshithreddy-07/GROUND-PULSE",
      demo: "https://ground-pulse.netlify.app/"
    },
    {
      title: "Sorting Stability Demonstrator",
      category: "AI/ML",
      description: "An interactive demonstrator for exploring sorting algorithms and understanding stability through visual examples.",
      technologies: ["Python", "Machine Learning", "Algorithms"],
      github: "https://github.com/AshishCoderWhiteHat/Sorting-stability-Demonstrator",
      demo: "https://sorting-stability-demonstrator.onrender.com/"
    }
  ];

  const categories = ["All", "Web", "AI/ML", "IoT"];
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects section">
      <div className="section-title">
        <p>What I've Built</p>
        <h2>Projects</h2>
      </div>
      <div className="project-filters">
        {categories.map((category) => (
          <button key={category} className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image"><span>&lt;/&gt;</span></div>
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href={project.demo} target="_blank" rel="noreferrer">Live Demo ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
