import profilePhoto from "../assets/profile-photo.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1>
          AKSHITH <span>👋</span>
        </h1>

        <h2>Full Stack Developer & AI/ML Enthusiast</h2>

        <p className="hero-description">
          I build practical and innovative projects using software,
          artificial intelligence, and emerging technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/Akshithreddy-07" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/g-akshith-reddy-401522375/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-circle">
          <img src={profilePhoto} alt="Portrait of Akshith" />
        </div>
      </div>
    </section>
  );
}

export default Hero;