import React from "react";
import "./Portfolio.css";

// Import images
import McanImage from "../assets/Mcan.jpg";
import CatImage from "../assets/Cat.jpg";
import SupercomImage from "../assets/Supercom.jpg";
import ReliefImage from "../assets/Relief.jpg";
import GameImage from "../assets/Game.jpg";

const projects = [
  {
    title: "MCAN Project",
    image: McanImage,
    link: "https://superpen-dev.github.io/mcan-ondo-project/mcan-ondo-main/index.html",
  },
  {
    title: "Cat Facts",
    image: CatImage,
    link: "https://superpen-dev.github.io/cat-facts/",
  },
  {
    title: "Supercom",
    image: SupercomImage,
    link: "https://superpen-dev.github.io/supercom/",
  },
  {
    title: "Relief Academy",
    image: ReliefImage,
    link: "https://superpen-dev.github.io/reliefacademy/",
  },
  {
    title: "Game Assignment",
    image: GameImage,
    link: "https://superpen-dev.github.io/Assignment-game/",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h2 className="skills-title">PORTFOLIO</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <p>{project.title}</p>
                <span>Website Coding (HTML, CSS, JS)</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
