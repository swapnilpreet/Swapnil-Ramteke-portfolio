import React, { useState } from "react";
import "../styles/Skill.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import {} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiPostman,
  SiFirebase,
  SiVercel,
  SiRender,
  SiNetlify,
  SiCloudinary,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const skillsData = [
  {
    id: 1,
    name: "HTML",
    category: "Front-End",
    icon: <FaHtml5 className="icon" color="#f16529" />,
  },
  {
    id: 2,
    name: "CSS",
    category: "Front-End",
    icon: <FaCss3Alt className="icon" color="#2965f1" />,
  },
  {
    id: 3,
    name: "JavaScript",
    category: "Front-End",
    icon: <SiJavascript className="icon" color="#f0db4f" />,
  },
  {
    id: 4,
    name: "TypeScript",
    category: "Front-End",
    icon: <SiTypescript className="icon" color="#007acc" />,
  },
  {
    id: 5,
    name: "React",
    category: "Front-End",
    icon: <FaReact className="icon" color="#61DBFB" />,
  },
  {
    id: 6,
    name: "Redux",
    category: "Front-End",
    icon: <SiRedux className="icon" color="#764abc" />,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    category: "Front-End",
    icon: <SiTailwindcss className="icon" color="#38bdf8" />,
  },
  {
    id: 8,
    name: "Next.js",
    category: "Front-End",
    icon: <SiNextdotjs className="icon" color="#000" />,
  },

  // Backend
  {
    id: 9,
    name: "Node.js",
    category: "Backend",
    icon: <FaNodeJs className="icon" color="#68a063" />,
  },
  {
    id: 10,
    name: "Express.js",
    category: "Backend",
    icon: <SiExpress className="icon" color="#000" />,
  },
  {
    id: 11,
    name: "Firebase",
    category: "Backend",
    icon: <SiFirebase className="icon" color="#FFCA28" />,
  },

  // Database
  {
    id: 12,
    name: "MongoDB",
    category: "Backend",
    icon: <SiMongodb className="icon" color="#4db33d" />,
  },

  // DevOps & Deployment
  {
    id: 13,
    name: "Git",
    category: "DevOps",
    icon: <FaGitAlt className="icon" color="#F1502F" />,
  },
  {
    id: 14,
    name: "GitHub",
    category: "DevOps",
    icon: <FaGithub className="icon" color="#333" />,
  },
  {
    id: 15,
    name: "Postman",
    category: "DevOps",
    icon: <SiPostman className="icon" color="#ff6c37" />,
  },
  {
    id: 16,
    name: "Docker",
    category: "DevOps",
    icon: <FaDocker className="icon" color="#0db7ed" />,
  },
  // { id: 17, name: 'AWS', category: 'DevOps', icon: <FaAws className="icon" color="#FF9900" /> },
  {
    id: 18,
    name: "Vercel",
    category: "DevOps",
    icon: <SiVercel className="icon" color="#000" />,
  },
  // { id: 19, name: 'Nginx', category: 'DevOps', icon: <SiNginx className="icon" color="#009639" /> },
  {
    id: 19,
    name: "Render",
    category: "DevOps",
    icon: <SiRender className="icon" color="#46E3B7" />,
  },
  {
    id: 20,
    name: "Netlify",
    category: "DevOps",
    icon: <SiNetlify className="icon" color="#00C7B7" />,
  },

  {
    id: 22,
    name: "Cloudinary",
    category: "Cloud/Media",
    icon: <SiCloudinary className="icon" color="#3448c5" />,
  },

  {
    id: 21,
    name: "VS Code",
    category: "Other",
    icon: <TbBrandVscode className="icon" color="#007ACC" />,
  },
];

const categories = ["Front-End", "Backend", "DevOps", "Cloud/Media", "Other"];

const Skill = () => {
  const [activeTab, setActiveTab] = useState("Front-End");

  const filteredSkills =
    activeTab === "All"
      ? skillsData
      : skillsData?.filter((skill) => skill?.category === activeTab);

  return (
    <section className="skill-section">
      <p className="skill-label">SKILL</p>
      <h2 className="skill-heading">Languages and Tools</h2>
      <div className="skill-container">
        <div className="skill-box">
          <div className="skill-tabs">
            {categories.map((cat) => (
              <div
                key={cat}
                className={`skill-tab ${activeTab === cat ? "active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </div>
            ))}
          </div>

          <div className="skill-grid">
            {filteredSkills.map((skill) => (
              <div key={skill.id} className="skill-card">
                {skill.icon}
                <hr />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
