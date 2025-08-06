import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResumeDownload = (event) => {
      event.preventDefault();
    // 1. Open the resume preview in a new tab
    window.open(
      "https://drive.google.com/file/d/1pinC1EWHEsMtvkHnFv9LQ8vqQSEcRYzI/view",
      "_blank"
    );

    // 2. Trigger download using the direct download link
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1pinC1EWHEsMtvkHnFv9LQ8vqQSEcRYzI";
    link.download = "Swapnil_Resume.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="text-logo" onClick={() => scrollTo("about")}>
          SwapniL
        </h2>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => scrollTo("about")}>About</li>
          <li onClick={() => scrollTo("skills")}>Skills</li>
          <li onClick={() => scrollTo("projects")}>Projects</li>
          <li onClick={() => scrollTo("experience")}>
            {" "}
            <a
              href="#"
              onClick={handleResumeDownload}
              className="resume-link"
            >
              <FaDownload />
            </a>
          </li>
          <li onClick={() => scrollTo("resume")}>Resume</li>
          <li onClick={() => scrollTo("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
