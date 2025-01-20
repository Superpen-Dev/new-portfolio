import React from "react";
import './Skills.css'; // Assuming you saved the CSS styles in a separate file
import Tail from "../assets/Tail.png"

const Skills = () => {
  return (
    <section className="skills-section" id="technologies">
      <h2 className="skills-title">SKILLS</h2>
      <p className="skills-description">
        The skills, tools, and technologies I use:
      </p>
      <div className="skills-container">
        <div className="skill-logo" data-aos="fade-right" data-aos-offset="200">
          <i className="fab fa-html5 fa-3x" style={{ color: "#E44D26" }}></i> {/* HTML color */}
        </div>
        <div className="skill-logo" data-aos="fade-up" data-aos-offset="200">
          <i className="fab fa-css3-alt fa-3x" style={{ color: "#1572B6" }}></i> {/* CSS color */}
        </div>
        <div className="skill-logo" data-aos="fade-left" data-aos-offset="200">
          <i className="fab fa-bootstrap fa-3x" style={{ color: "#563D7C" }}></i> {/* Bootstrap color */}
        </div>
        <div className="skill-logo" data-aos="fade-right" data-aos-offset="200" >
            
          <img
                    src={Tail}
                    alt="Tailwing logo"
                    className="profile-image"
                  /> {/* Tailwind color */}
        </div>
        <div className="skill-logo" data-aos="fade-up" data-aos-offset="200">
          <i className="fab fa-react fa-3x" style={{ color: "#61DBFB" }}></i> {/* React color */}
        </div>
        <div className="skill-logo" data-aos="fade-left" data-aos-offset="200">
          <i className="fab fa-js fa-3x" style={{ color: "#F7DF1E" }}></i> {/* JavaScript color */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
