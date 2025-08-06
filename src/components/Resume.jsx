import React, { useState } from "react";
import "../styles/Resume.css";
const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="resume">
      <h5 className="label">
        Project feedback is welcomed and appreciated to help me grow as a
        developer.
      </h5>
      <h2 className="resume-title">My Resume</h2>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>

        <button
          className={`tab ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          Professional Skills
        </button>

         <button
          className={`tab ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>

      
      </div>

      {/* Education Section */}
      {activeTab === "education" && (
        <div className="fade-section">
          <h3 className="section-title">Education</h3>
          <div className="education-container">
            <div className="education-card">
              <div className="timeline-dot" />
              <h4 className="edu-title">Full-Stack Development</h4>
              <p className="edu-subtitle">Masai School (Jan – Aug 2025)</p>
              <p className="edu-desc">
                Masai is an outcome-driven career school. In 40 weeks, I
                completed 1200+ hours of coding and 100+ hours of soft skills.
              </p>
            </div>

            <div className="education-card">
              <div className="timeline-dot" />
              <h4 className="edu-title">
                Master of Science (Genetic Engineering)
              </h4>
              <p className="edu-subtitle">
                Rashtrasant Tukadoji Maharaj Nagpur University (2020 – Pursuing)
              </p>
              <p className="edu-desc">
                Master of Science, a postgraduate degree in a science-related
                field. It's a step up from a Bachelor of Science (BSc) degree
                and often involves specialized study and research.
              </p>
            </div>

            <div className="education-card">
              <div className="timeline-dot" />
              <h4 className="edu-title">Bachelor of Science (Science)</h4>
              <p className="edu-subtitle">
                Rashtrasant Tukadoji Maharaj Nagpur University (2015 – 2019)
              </p>
              <p className="edu-desc">
                Three year undergraduate degree focused on scientific and
                technical subjects, typically pursued by students with a
                background in science from their 10+2 education.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      {activeTab === "skills" && (
        <div className="fade-section">
          <h3 className="section-title">Professional Skills</h3>
          <div className="education-container">
            <div className="education-card">
              <div className="timeline-dot" />
              <h4 className="edu-title">Frontend</h4>
              <p className="edu-desc">
                React.js, Redux, HTML5, CSS3, JavaScript, Styled-Components,
                Tailwind,TypeScript
              </p>
            </div>

            <div className="education-card">
              <div className="timeline-dot" />
              <h4 className="edu-title">Backend & Tools</h4>
              <p className="edu-desc">
                Node.js, Express.js, MongoDB, JWT, Cloudinary, System Design,
                REST APIs,redis.
              </p>
            </div>

            <div className="education-card">
              <div className="timeline-dot" />
              <h4 className="edu-title">Other Tools</h4>
              <p className="edu-desc">
                Git, GitHub, Postman, Netlify, Vercel,render.
              </p>
            </div>

            <div className="education-card">
              <div className="timeline-dot" />
              <h4 className="edu-title">Soft skills</h4>
              <p className="edu-desc">
                Adaptability, Time Management, Teamwork, Problem Solving,
                Effective Communication.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Experience Section */}
      {activeTab === "experience" && (
        <div className="fade-section">
          <h3 className="section-title">Experience</h3>
          <div className="education-container">
            <div className="education-card">
              <div className="timeline-dot" />
              <h4 className="edu-title">Frontend Developer Intern.</h4>
              <p className="edu-subtitle">
                Codebypk Private Limited, (sep – oct 2024)
              </p>
              <p className="edu-desc">
                Developed responsive web pages using HTML, CSS, and JavaScript
                Debugged UI issues to enhance user experience and functionality
                Organized and maintained frontend code for scalability and
                clarity Applied best practices in web development for efficient
                code structure.
              </p>
            </div>

            <div className="education-card">
              <div className="timeline-dot" />
              <h4 className="edu-title">Software Engineer Intern.</h4>
              <p className="edu-subtitle">
                Nullclass EdTech Private Limited, (Dec 2023 - Mar 2024)
              </p>
              <p className="edu-desc">
                Developed a full-stack MERN web application with responsive
                React frontend and dynamic routing Engineered RESTful backend
                APIs using Node.js and Express, integrating MongoDB for data
                persistence Implemented secure JWT-based authentication and
                authorization workflows Optimized UI/UX for high performance and
                mobile responsiveness using industry best practices
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
