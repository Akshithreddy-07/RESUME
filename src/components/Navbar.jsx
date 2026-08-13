import { useState } from "react";

function Navbar() {
  const [sakuraMode, setSakuraMode] = useState(false);

  const toggleSakuraMode = () => {
    setSakuraMode(!sakuraMode);
    document.body.classList.toggle("sakura-mode");
  };

  return (
    <nav>
      <div className="logo">Devfolio</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>

        <button
          className="theme-toggle"
          onClick={toggleSakuraMode}
          aria-label="Toggle Sakura mode"
        >
          {sakuraMode ? "🌙" : "🌸"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;