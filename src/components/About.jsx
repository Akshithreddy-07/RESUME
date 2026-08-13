function About() {
  return (
    <section id="about" className="about section">
      <div className="section-title">
        <p>Get To Know Me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>I'm a passionate developer who loves building things.</h3>

          <p>
            I'm a technology enthusiast interested in software development,
            artificial intelligence, machine learning, and emerging
            technologies.
          </p>

          <p>
            I enjoy turning ideas into practical projects and continuously
            learning new technologies to improve my development skills.
          </p>

          <p>
            My goal is to build useful and innovative solutions that can solve
            real-world problems.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <span>💻</span>
            <h4>Development</h4>
            <p>Building modern and responsive web applications.</p>
          </div>

          <div className="about-card">
            <span>🤖</span>
            <h4>AI & ML</h4>
            <p>Exploring intelligent solutions using machine learning.</p>
          </div>

          <div className="about-card">
            <span>🚀</span>
            <h4>Innovation</h4>
            <p>Turning ideas into practical real-world projects.</p>
          </div>

          <div className="about-card">
            <span>📚</span>
            <h4>Continuous Learning</h4>
            <p>Always learning and experimenting with new technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;