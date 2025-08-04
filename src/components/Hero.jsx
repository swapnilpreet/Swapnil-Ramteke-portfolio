import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SiHtml5, SiJavascript, SiReact } from "react-icons/si";
import logo from "../assets/profilepic.png";

const titles = [
  "Full Stack Developer",
  "Problem solver",
  "Developer",
  "Team player",
  "Coder",
];

const Hero = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  return (
    <>
      <section className="hero" id="about">
        <div className="hero-left">
          <p className="intro">Let’s Build Something Meaningful Together</p>
          <h1>
            Hi, I’m <span className="highlight">Swapnil Ramteke</span>
          </h1>
          <h1>
            A{" "}
            <span className="typing">
              {titles[index].substring(0, subIndex)}
            </span>
          </h1>
          <p className="description">
            Full Stack Developer with hands-on experience in building scalable web apps using JavaScript, TypeScript, and modern tech stacks. Strong in OOP, DSA, and SOLID principles. Trained at Masai School with internships in frontend and full-stack roles. Proficient in REST APIs, JWT auth, Redis caching, and Git. Quick learner focused on writing clean, maintainable code.
          </p>

          <div className="icons">
            <div className="icon-section">
              <div className="icon-title">FIND WITH ME</div>
              <div className="icon-grid">
                <div className="icon-box">
                  <a
                    href="https://github.com/swapnilpreet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="icon-box">
                  <a
                    href="https://www.linkedin.com/in/swapnil-ramteke-460609283/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <div className="icon-box">
                  <a className="resume-link">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>

            <div className="icon-section">
              <div className="icon-title">BEST SKILL ON</div>
              <div className="icon-grid">
                <div className="icon-box">
                  <SiHtml5 color="#e34c26" />
                </div>
                <div className="icon-box">
                  <SiJavascript
                    style={{
                      backgroundColor: "#f7df1e",
                      padding: "2px",
                      borderRadius: "4px",
                    }}
                    color="#000"
                  />
                </div>
                <div className="icon-box">
                  <SiReact color="#61dbfb" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={logo} alt="Swapnil Vijay Ramteke" />
        </div>
        
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
      </section>
      
    </>
  );
};

export default Hero;
