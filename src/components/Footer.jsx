import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-logo">Swapnil Ramteke</h2>
        <nav className="footer-nav">
          <li onClick={() => scrollTo("about")}>About</li>
          <li onClick={() => scrollTo("projects")}>Projects</li>
          <li  onClick={() => scrollTo("skills")}>Skills</li>
          <li  onClick={() => scrollTo("contact")}>Contact</li>
        </nav>
      </div>

      <div className="footer-middle">
        <p className="footer-email">
          <FaEnvelope className="icon" /> swapnilramteke004@gmail.com
        </p>
        <div className="footer-socials">
          <a href="https://github.com/swapnilpreet" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/swapnil-ramteke-460609283/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="#" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Swapnil Ramteke. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer