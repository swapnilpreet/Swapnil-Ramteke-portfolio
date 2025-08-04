import React, { useState } from "react";

import "../styles/Projects.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbLivePhotoFilled } from "react-icons/tb";
import { PiGithubLogoBold } from "react-icons/pi";

const projects = [
  {
    id: "Online-Exchange",
    title: "Online Exchange",
    type: "Development",
    description:
      "The Online exchange project is a web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack, designed to replicate the functionality and user experience of the popular online marketplace platform.  This project aims to provide a user-friendly platform where users can buy and bids & sell various products,",
    details:
      "A full-stack responsive app with user sign-in/sign-up, product search, filter, sort, pagination, and real-time notifications.Users can add, edit, delete products, and place bids. Admins have full control over users and products. Built with React, Node.js, Express, and MongoDB.",
    images: [
      "https://camo.githubusercontent.com/3e611e951d18fad521b76a1956ac8ae5873dbaa6584e8066be9e562a8c9ddb04/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f76322f726573697a653a6669743a343830302f666f726d61743a776562702f312a323545306e674261646b4b5a5135616d2d61495a51512e706e67",
    ],
    techstack: [
      "Redux",
      "React",
      "Ant Design",
      "Tailwind-css",
      "Nodejs",
      "Expressjs",
      "MongoDB",
      "JWT",
      "JavaScript",
    ],
    github: "https://github.com/swapnilpreet/OLX.COM",
    deployment: "https://olx-clone-in-india.onrender.com/login",
  },
  {
    id: "kentucky-fried-chicken",
    title: "Kentucky Fried Chicken",
    type: "Application",
    description:
      "Kentucky Fried Chicken is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the second-largest restaurant chain in the world after McDonald's, with more than 24,000 locations globally.",
    details:
      "A fully responsive full-stack clone of the kentucky-fried-chicken website with core e-commerce features like user authentication, product management, bidding, and admin control panel.",
    images: [
      "https://camo.githubusercontent.com/20b93380428a4b5bed3d225cb92a8ebb6796661f7cce38a43067c2abf02e1aa2/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64656a71797675716a2f696d6167652f75706c6f61642f76313735343234303736392f53637265656e73686f745f3338305f613076706a6a2e706e67",
    ],
    techstack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/swapnilpreet/Kentucky-Fried-Chicken-KFC.COM",
    deployment: "https://kentucky-fried-chicken-kfc-com.onrender.com/",
  },
  {
    id: "Drag & Drop To-Do App",
    title: "Drag & Drop To-Do App",
    type: "Application",
    description:
      "A modern and responsive to-do list application with drag-and-drop functionality. Easily manage tasks by organizing them between different columns such as To Do, In Progress, and Done using smooth drag-and-drop interactions.",
    details:
      "A modern and responsive to-do list application with drag-and-drop functionality. Easily manage tasks by organizing them between different columns such as To Do, In Progress, and Done using smooth drag-and-drop interactions.",
    images: [
      "https://res.cloudinary.com/dejqyvuqj/image/upload/v1754241577/Screenshot_384_udmwbn.png",
    ],
    techstack: ["React"],
    github: "https://github.com/swapnilpreet/todo-drag-drop/",
    deployment: "https://task-app-hnz5.onrender.com/",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-section">
      {!selectedProject ? (
        <>
          <h5 className="projects-label">
            Explore my projects and feel free to share your valuable feedback.
          </h5>
          <h2 className="projects-heading">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.images[0]} alt={project.title} />
                <p className="type">{project.type}</p>
                <p className="desc">{project.description}</p>
                <h3 className="title">{project.title}</h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="project-details">
          <button className="back-btn" onClick={() => setSelectedProject(null)}>
            <IoMdArrowRoundBack color="white" size={22} />
          </button>

          <h2>{selectedProject.title}</h2>
          <p className="type">{selectedProject.type}</p>

          {selectedProject.images.map((img, i) => (
            <img key={i} src={img} alt={`Slide ${i}`} />
          ))}

          <p className="desc">{selectedProject.details}</p>

          <p className="techstack">
            <strong>Tech Stack:</strong> {selectedProject.techstack.join(", ")}
          </p>

          <div className="project-links">
            <a
              href={selectedProject.deployment}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo-btn">
                <TbLivePhotoFilled size={22} /> Live Demo
              </button>
            </a>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo-btn">
                <PiGithubLogoBold size={22} /> GitHub Code
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
