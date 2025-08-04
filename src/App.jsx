import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Layout from "./components/Layout";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <Layout>
        <Hero />
      </Layout>
      <div id="skills" className="section">
        <Layout>
         <Skills/>
        </Layout>
      </div>
      <div id="projects" className="section">
        <Layout>
        <Projects/>
        </Layout>
      </div>

      <div id="resume" className="section">
        <Layout>
         <Resume/>
        </Layout>
      </div>

      <div id="contact" className="section">
        <Layout>
         <Contact/>
        </Layout>
      </div> 
          <Footer/>
    </>
  );
}

export default App;
