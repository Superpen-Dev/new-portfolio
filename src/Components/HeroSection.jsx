import React from "react";
import "./HeroSection.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Toheeb from "../assets/Toheeb.png"


const HeroSection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero-section">
      <div className="content" data-aos="fade-up">
        <h1>
          <span>FRONTEND</span> <span>DEVELOPER</span>
        </h1>
        <p>
          I am Toheeb Alli – <span className="highlight">web-developer</span> with a passion
          for creating beautiful and responsive websites.
        </p>
        <div className="buttons">
          <button className="btn primary-btn">VIEW MY WORK</button>
          <button className="btn secondary-btn">DOWNLOAD CV</button>
        </div>
      </div>
      <div className="image-container" data-aos="fade-up">
        <img
          src={Toheeb}
          alt="Toheeb - Frontend Developer"
          className="profile-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
