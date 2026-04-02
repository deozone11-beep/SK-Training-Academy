import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <h1><i className="fa-solid fa-graduation-cap"></i> SK Training Academy</h1>

        <div className="navbar-links">
          <p className="navbar-link"><Link to="/">Home</Link></p>
          <p className="navbar-link"><Link to="/about">About Us</Link></p>
          <p className="navbar-link"><Link to="/registration">Registration</Link></p>
          <p className="navbar-link"><Link to="/contact">Contact</Link></p>
          <p className="navbar-link"><Link to="/officialLogin">Official Login</Link></p>
        </div>

        <div className="navbar-menu-toggle" onClick={() => setIsOpen(true)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>

      <div className={`side-navbar ${isOpen ? "active" : ""}`}>
        <p style={{ textAlign: "right" }} onClick={() => setIsOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </p>

        <div className="side-navbar-links">
          <p className="navbar-link"><Link to="/">Home</Link></p>
          <p className="navbar-link"><Link to="/about">About Us</Link></p>
          <p className="navbar-link"><Link to="/registration">Registration</Link></p>
          <p className="navbar-link"><Link to="/contact">Contact</Link></p>
          <p className="navbar-link"><Link to="/officialLogin">Official Login</Link></p>
        </div>
      </div>

      <div className="header">
        <div>
          <h1>Level up your Studies</h1>
          <p>We improve your future </p>
          <button className="header-button"><Link to="/registration">Register Now</Link></button>
          <button className="header-button"><Link to="/officialLogin">Trainer Login</Link></button>
        </div>
      </div>
      <div className="service">
        <div className="service-container-1">
          <div>
            <h2>We are Providing Best</h2>
            <h2>Training</h2>
          </div>
        </div>
        <div className="service-container-2">
          <div>
            <i className="fa-regular fa-face-smile"></i>
            <h4>Satisfaction Guarantee</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              dolor, porro expedita provident eius facilis, soluta quam suscipit
              maiores voluptas quod officia voluptate culpa ab architecto quia.
              Ratione, quos! Animi.
            </p>
          </div>
          <div>
            <i className="fa-regular fa-face-smile"></i>
            <h4>Satisfaction Guarantee</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              dolor, porro expedita provident eius facilis, soluta quam suscipit
              maiores voluptas quod officia voluptate culpa ab architecto quia.
              Ratione, quos! Animi.
            </p>
          </div>
          <div>
            <i className="fa-regular fa-face-smile"></i>
            <h4>Satisfaction Guarantee</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              dolor, porro expedita provident eius facilis, soluta quam suscipit
              maiores voluptas quod officia voluptate culpa ab architecto quia.
              Ratione, quos! Animi.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-box-1">
          <h2 className="headingText">SK Training Academy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            aperiam.
          </p>
          <div className="footer-icon-container">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>
        <p>SKacademy@yahoo.com</p>
      </div>
    </div>
  );
}

export default Home;
