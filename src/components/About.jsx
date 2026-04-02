import { useState } from "react";
import { Link } from "react-router-dom";



function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h1>SK Training Academy</h1>

        <div className="navbar-links">
          <p className="navbar-link"><Link to="/">Home</Link></p>
          <p className="navbar-link"><Link to="/registration">Registration</Link></p>
          <p className="navbar-link"><Link to="/contact">Contact</Link></p>
          <p className="navbar-link"><Link to="/officialLogin">Official Login</Link></p>
        </div>

        <div className="navbar-menu-toggle" onClick={() => setIsOpen(true)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>

      <div className={`side-navbar ${isOpen ? "active" : ""}`}>
        <p style={{ textAlign: 'right' }} onClick={() => setIsOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </p>

        <div className="side-navbar-links">
          <p className="navbar-link"><Link to="/">Home</Link></p>
          <p className="navbar-link"><Link to="/registration">Registration</Link></p>
          <p className="navbar-link"><Link to="/contact">Contact</Link></p>
          <p className="navbar-link"><Link to="/officialLogin">Official Login</Link></p>
        </div>
      </div>

      <div className="about-container">

      <div className="about-header">
        <h1>About SK Training Academy</h1>
        <p>Empowering Students for a Better Future 🚀</p>
      </div>

      <div className="about-content">
        <p>
          SK Training Academy is dedicated to providing high-quality education
          and training to help students achieve their career goals. We focus on
          practical knowledge, real-world skills, and industry-level training.
        </p>

        <p>
          Our mission is to guide students in the right direction and make them
          industry-ready with strong technical and soft skills.
        </p>
      </div>

      <div className="about-cards">

        <div className="card">
          <h3>🎯 Our Mission</h3>
          <p>
            To deliver top-quality training and shape students into skilled
            professionals.
          </p>
        </div>

        <div className="card">
          <h3>👨‍🏫 Expert Trainers</h3>
          <p>
            Learn from experienced trainers with real-world industry knowledge.
          </p>
        </div>

        <div className="card">
          <h3>💼 Career Support</h3>
          <p>
            We provide guidance, projects, and support to help you land your dream job.
          </p>
        </div>

      </div>

    </div>
    
    </>
    
  );
}

export default About;