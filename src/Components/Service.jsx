import React, { useEffect } from 'react';
import './Service.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration for all animations
  }, []);

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">MY SERVICES</h2>
      <div className="services-container">
        {/* Service 1: Website Development & Design */}
        <div className="service-card" data-aos="fade-right" data-aos-delay="100">
          <div className="service-icon">🖥️</div>
          <h3 className="service-title">Website Development & Design</h3>
          <p className="service-description">
            I specialize in creating visually stunning, responsive, and user-friendly websites that work seamlessly across all devices. Whether you need a landing page or a custom design, I can bring your vision to life.
          </p>
        </div>

        {/* Service 2: Performance Optimization & SEO */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <div className="service-icon">📊</div>
          <h3 className="service-title">Performance Optimization & SEO</h3>
          <p className="service-description">
            I optimize websites for fast loading speeds and improve your website’s SEO to boost its ranking on search engines, ensuring better visibility and reach.
          </p>
        </div>

        {/* Service 3: E-Commerce Solutions */}
        <div className="service-card" data-aos="fade-left" data-aos-delay="300">
          <div className="service-icon">🛒</div>
          <h3 className="service-title">E-Commerce Solutions</h3>
          <p className="service-description">
            I build secure, easy-to-manage e-commerce websites with integrated payment gateways, making it simple for you to sell products online.
          </p>
        </div>

        {/* Service 4: API Integrations & Custom Features */}
        <div className="service-card" data-aos="fade-right" data-aos-delay="400">
          <div className="service-icon">🔄</div>
          <h3 className="service-title">API Integrations & Custom Features</h3>
          <p className="service-description">
            I can integrate third-party APIs and add custom features to extend your website's functionality and improve the overall user experience.
          </p>
        </div>

        {/* Service 5: UI/UX Design & Website Redesign */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="500">
          <div className="service-icon">🖌️</div>
          <h3 className="service-title">UI/UX Design & Website Redesign</h3>
          <p className="service-description">
            I create intuitive, engaging designs and improve your website's usability, whether it’s a full redesign or a simple UI overhaul.
          </p>
        </div>

        {/* Service 6: Website Security & Maintenance */}
        <div className="service-card" data-aos="fade-left" data-aos-delay="600">
          <div className="service-icon">🔒</div>
          <h3 className="service-title">Website Security & Maintenance</h3>
          <p className="service-description">
            I provide regular maintenance and implement the latest security measures to keep your website secure and fully functional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
