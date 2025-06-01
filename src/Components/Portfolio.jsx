import "./Portfolio.css";

// Import images
import McanImage from "../assets/Mcan.jpg";
import AlKogiwwyyImage from "../assets/AlKogiwwyy.png";
import ChatBotImage from "../assets/ChatBot.png";
import CatImage from "../assets/Cat.jpg";
import SupercomImage from "../assets/Supercom.jpg";
import ReliefImage from "../assets/Relief.jpg";
import GameImage from "../assets/Game.jpg";


const projects = [
  {
    title: "MCAN Project",
    image: McanImage,
    link: "https://superpen-dev.github.io/mcan-ondo-project/mcan-ondo-main/index.html",
    type: "Static",
  },
  {
    title: "Al-Kogiwwyy Casuals",
    image: AlKogiwwyyImage,
    link: "https://al-kogiwwyy-casual.vercel.app/",
    type: "React",
  },
  {
    title: "Superpen Chat Bot",
    image: ChatBotImage,
    link: "https://superpen-dev.github.io/superpen-chatbot/",
    type: "React + Bootstrap",
  },
  {
    title: "Cat Facts",
    image: CatImage,
    link: "https://superpen-dev.github.io/cat-facts/",
    type: "Static",
  },
  {
    title: "Supercom",
    image: SupercomImage,
    link: "https://superpen-dev.github.io/supercom/",
    type: "Static",
  },
  {
    title: "Relief Academy",
    image: ReliefImage,
    link: "https://superpen-dev.github.io/reliefacademy/",
    type: "Static",
  },
  {
    title: "Game Assignment",
    image: GameImage,
    link: "https://superpen-dev.github.io/Assignment-game/",
    type: "Static",
  },
];

// Tech label mapping
const techLabels = {
  "React": "React & Tailwind",
  "React + Bootstrap": "React & Bootstrap",
  "Static": "HTML, CSS & JS",
};

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h2 className="skills-title">PORTFOLIO</h2>
      <div className="portfolio-grid" data-aos="fade-up" data-aos-offset="200">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <p>{project.title}</p>
                <span>{techLabels[project.type] || "Website Project"}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
