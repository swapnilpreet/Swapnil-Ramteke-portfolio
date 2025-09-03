// import React, { useState } from "react";
// import "../styles/Navbar.css";
// import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleResumeDownload = (event) => {
//       event.preventDefault();
//     // 1. Open the resume preview in a new tab
//     window.open(
//       "https://drive.google.com/file/d/1pinC1EWHEsMtvkHnFv9LQ8vqQSEcRYzI/view",
//       "_blank"
//     );

//     // 2. Trigger download using the direct download link
//     const link = document.createElement("a");
//     link.href =
//       "https://drive.google.com/uc?export=download&id=1pinC1EWHEsMtvkHnFv9LQ8vqQSEcRYzI";
//     link.download = "Swapnil-Ramteke-Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         <h2 className="text-logo" onClick={() => scrollTo("about")}>
//           SwapniL
//         </h2>
//       </div>
//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </div>
//       <div className={`nav-right ${menuOpen ? "open" : ""}`}>
//         <ul>
//           <li onClick={() => scrollTo("about")}>About</li>
//           <li onClick={() => scrollTo("skills")}>Skills</li>
//           <li onClick={() => scrollTo("projects")}>Projects</li>
//           <li onClick={() => scrollTo("experience")}>
//             {" "}
//             <a
//               href="#"
//               onClick={handleResumeDownload}
//               className="resume-link"
//             >
//               <FaDownload />
//             </a>
//           </li>
//           <li onClick={() => scrollTo("resume")}>Resume</li>
//           <li onClick={() => scrollTo("contact")}>Contact</li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import myresume from "../assets/Swapnil-Ramteke-Resume.pdf"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  // const handleResumeDownload = (event) => {
  //   event.preventDefault();
  //   window.open(
  //     "https://drive.google.com/file/d/1pinC1EWHEsMtvkHnFv9LQ8vqQSEcRYzI/view",
  //     "_blank"
  //   );

  //   const link = document.createElement("a");
  //   link.href =
  //     "https://drive.google.com/uc?export=download&id=1pinC1EWHEsMtvkHnFv9LQ8vqQSEcRYzI";
  //   link.download = "Swapnil-Ramteke-Resume.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleResumeDownload=()=>{
    // window.open(myresume)
    window.open(myresume, "_blank");
    const link = document.createElement("a");
    link.href = myresume;
    link.download = "Swapnil-Ramteke-resume.pdf";
    link.click();
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
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
            {/* <li>
              <a
                href="#"
                onClick={handleResumeDownload}
                className="resume-link"
              >
                <FaDownload />
              </a>
            </li> */}
            <li
              // onClick={() => scrollTo("resume")}
              onClick={() => {
                handleResumeDownload();
                scrollTo("resume");
              }}
            >
              Resume
            </li>
            <li onClick={() => scrollTo("contact")}>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;
