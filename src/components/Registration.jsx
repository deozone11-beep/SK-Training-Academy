import '../css/registration.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {

const [isOpen, setIsOpen] = useState(false);
const [students, setStudents] = useState([]);
const [trainer, setTrainer] = useState("");

const formSubmit = (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
}

 useEffect(() => {
  fetch("http://localhost:3000/students")
    .then(res => res.json())
    .then(data => {
      setStudents(data); // just store
    })
    .catch(err => console.log(err));
}, []);

  return (
    <div>
      <nav className="navbar">
        <h1>SK Training Academy</h1>
        <div className="navbar-links">
          <p className="navbar-link"><Link to="/SK-Training-Academy">Home</Link></p>
          <p className="navbar-link"><Link to="/SK-Training-Academy/about">About Us</Link></p>
          <p className="navbar-link"><Link to="/SK-Training-Academy/contact">Contact</Link></p>
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
          <p className="navbar-link"><Link to="/SK-Training-Academy">Home</Link></p>
          <p className="navbar-link"><Link to="/SK-Training-Academy/about">About Us</Link></p>
          <p className="navbar-link"><Link to="/SK-Training-Academy/contact">Contact</Link></p>
        </div>
      </div>

        <form className='form-container'>
          <table>
            <tbody>
                <tr><th colSpan="2" className="form-title">Student Information</th></tr>
                <tr>
                  <td><label htmlFor="f_name">First Name:</label></td>
                  <td><input type="text" id="f_name" name="f_name" /></td>
                </tr>

                <tr>
                  <td><label htmlFor="l_name">Last Name:</label></td>
                  <td><input type="text" id="l_name" name="l_name" /></td>
                </tr>

                <tr>
                  <td><label htmlFor="degree">Degree:</label></td>
                  <td><input type="text" id="degree" name="degree" /></td>
                </tr>

                <tr>
                  <td><label htmlFor="branch">Branch:</label></td>
                  <td><input type="text" id="branch" name="branch" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="year">Year of Passed Out:</label></td>
                  <td><input type="number" id="year" name="year" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="college">College/University:</label></td>
                  <td><input type="text" id="college" name="college" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="email">Email ID:</label></td>
                  <td><input type="email" id="email" name="email" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="phone">Phone Number:</label></td>
                  <td><input type="tel" id="phone" name="phone" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="course">Course:</label></td>
                  <td>
                    <select>
                      <option value="">Select Course</option>
                      {[...new Set(students.map(s => s.course))].map((c, i) => (
                        <option key={i} value={c}>{c}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor="trainer">Trainer:</label></td>
                  <td>
                    <select onChange={(e) => setTrainer(e.target.value)}>
                      <option value="">Select Trainer</option>
                      {[...new Set(students.map(s => s.trainer))].map((t, i) => (
                        <option key={i} value={t}>{t}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor="timing">Timing:</label></td>
                  <td>
                    <select id="timing" name="timing">
                      <option value="">--Select Timing--</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (1PM - 4PM)</option>
                      <option value="evening">Evening (6PM - 9PM)</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><button type="submit" id='btnFormSubmit' onClick={formSubmit}>Register</button></td>
                </tr>
            </tbody>
          </table>
        </form>
        

      <div className="footer">
        <div className="footer-box-1">
          <h2 className="headingText">SK Training Academy</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aperiam.</p>
          <div className="footer-icon-container">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>
        <p>SKacademy@yahoo.com</p>
      </div>
    </div>
  )
}

export default Home